Integrating Revolut payments involves using the Revolut Merchant API (also known as the Business API for payments). Here's a practical guide covering the most common setup.

## 1. Set up your Revolut Business account and API keys

Sign up for a [Revolut Business](https://business.revolut.com/) account, then open the Merchant section in your dashboard to get your API keys:

- **Secret API key** (`sk_...`) — used only on your server. Never expose this.
- **Public key** (`pk_...`) — used on the client for the checkout widget.

Use the Sandbox environment while developing (a separate sandbox dashboard and set of keys), then switch to production later.

## 2. Create an order on the server

The core flow is: your server creates an order via the Merchant API, receives a token, then the client completes payment using that token.

```javascript
// server.js
const express = require('express');
const app = express();
app.use(express.json());

const REVOLUT_API = 'https://sandbox-merchant.revolut.com/api'; // production: https://merchant.revolut.com/api

app.post('/create-order', async (req, res) => {
  const response = await fetch(`${REVOLUT_API}/orders`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.REVOLUT_SECRET_KEY}`,
      'Content-Type': 'application/json',
      'Revolut-Api-Version': '2024-09-01',
    },
    body: JSON.stringify({
      amount: 1999,        // amount in the smallest currency unit (e.g. cents)
      currency: 'USD',
    }),
  });

  const order = await response.json();
  res.json({ token: order.token, orderId: order.id });
});

app.listen(4242, () => console.log('Running on port 4242'));
```

## 3. Collect payment on the client

Revolut provides a hosted Checkout widget (via `@revolut/checkout`) that renders a PCI compliant card entry UI, including Apple Pay and Google Pay support.

```bash
npm install @revolut/checkout
```

```jsx
// checkout.js
import RevolutCheckout from '@revolut/checkout';

async function pay() {
  const { token } = await fetch('/create-order', { method: 'POST' })
    .then(r => r.json());

  const { payWithPopup } = await RevolutCheckout(token, 'sandbox'); // 'prod' in production

  payWithPopup({
    onSuccess() { console.log('Payment successful'); },
    onError(message) { console.error('Payment failed:', message); },
  });
}
```

You can also embed the Card Field inline instead of using the popup if you want more control over the UI.

## 4. Handle webhooks (important)

Don't rely solely on the client callback to confirm payment. Register a webhook endpoint in the Merchant dashboard and verify events server side to fulfill orders reliably.

```javascript
const crypto = require('crypto');

app.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
  const signature = req.headers['revolut-signature'];
  const timestamp = req.headers['revolut-request-timestamp'];

  const payload = `v1.${timestamp}.${req.body}`;
  const expected = 'v1=' + crypto
    .createHmac('sha256', process.env.REVOLUT_WEBHOOK_SECRET)
    .update(payload)
    .digest('hex');

  if (signature !== expected) {
    return res.status(400).send('Invalid signature');
  }

  const event = JSON.parse(req.body);
  if (event.event === 'ORDER_COMPLETED') {
    // Fulfill the order, update DB, send confirmation, etc.
  }

  res.json({ received: true });
});
```

## 5. Go live

- Complete your Revolut Business account verification.
- Swap sandbox keys and the `sandbox-merchant` URL for **production keys** and `merchant.revolut.com`.
- Change the widget mode from `'sandbox'` to `'prod'`.
- Ensure everything runs over **HTTPS**.
- Register your production webhook endpoint.

## A note on this walkthrough

The structure above mirrors the **Stripe integration** I walked you through earlier (server side order and intent creation, then the client widget, then webhooks for fulfillment), since the two providers follow a very similar model. However, I want to be transparent: **the exact field names, endpoint paths, API version headers, and SDK method names for Revolut can differ from what I've shown**, and Revolut's API evolves. I'd recommend verifying the specifics against the official docs.

Would you like me to **search the current Revolut Merchant API documentation** to confirm the exact endpoints, request and response shapes, and SDK usage? I can also tailor the example to your specific **tech stack** and whether you need **one time payments, subscriptions, or payouts** (Revolut also offers a separate Payouts and Business API for sending money).
