Integrating Stripe into your application involves a few key steps. Here's a practical guide covering the most common setup (server + client) with card payments via Stripe's modern Payment Element.

## 1. Set up your Stripe account and keys

Create an account at [stripe.com](https://stripe.com/), then grab your API keys from the Dashboard (Developers → API keys):

- **Publishable key** (`pk_...`) — used on the client.
- **Secret key** (`sk_...`) — used only on the server. Never expose this.

Use test mode keys while developing.

## 2. Install the SDKs

Server (Node.js example):

```bash
npm install stripe
```

Client (React example):

```bash
npm install @stripe/stripe-js @stripe/react-stripe-js
```

Stripe also has official server libraries for Python, Ruby, PHP, Java, Go, and .NET.

## 3. Create a PaymentIntent on the server

The recommended flow uses PaymentIntents. Your server creates one and returns its `client_secret` to the frontend.

```javascript
// server.js
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const express = require('express');
const app = express();
app.use(express.json());

app.post('/create-payment-intent', async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1999,          // amount in the smallest currency unit (e.g. cents)
    currency: 'usd',
    automatic_payment_methods: { enabled: true },
  });

  res.json({ clientSecret: paymentIntent.client_secret });
});

app.listen(4242, () => console.log('Running on port 4242'));
```

## 4. Collect payment details on the client

Use the Payment Element, which renders a prebuilt, PCI compliant UI supporting cards, wallets (Apple and Google Pay), and other methods.

```jsx
// App.jsx
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState, useEffect } from 'react';

const stripePromise = loadStripe('pk_test_...'); // publishable key

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: 'https://yoursite.com/success' },
    });
    if (error) console.error(error.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button disabled={!stripe}>Pay</button>
    </form>
  );
}

export default function App() {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    fetch('/create-payment-intent', { method: 'POST' })
      .then(res => res.json())
      .then(data => setClientSecret(data.clientSecret));
  }, []);

  return clientSecret ? (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm />
    </Elements>
  ) : null;
}
```

## 5. Handle webhooks (important)

Never rely solely on the client to confirm a payment succeeded. Listen for webhook events server side to fulfill orders reliably.

```javascript
app.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'payment_intent.succeeded') {
    const intent = event.data.object;
    // Fulfill the order, update your DB, send confirmation email, etc.
  }

  res.json({ received: true });
});
```

Test webhooks locally with the [Stripe CLI](https://stripe.com/docs/stripe-cli):

```bash
stripe listen --forward-to localhost:4242/webhook
```

## 6. Go live

- Complete your Stripe account activation (business details, bank account).
- Swap test keys for **live keys**.
- Ensure everything runs over **HTTPS**.
- Register your production webhook endpoint in the Dashboard.

## A few decisions to consider

- **One time payments** → PaymentIntents (shown above).
- **Subscriptions and recurring billing** → use Stripe Billing with Products, Prices, and the Subscriptions API.
- **Fastest setup** → Stripe Checkout, a fully hosted payment page you redirect users to, requiring far less frontend code.

If you tell me your **tech stack** (language and framework) and whether you need **one time payments, subscriptions, or a marketplace**, I can give you a more tailored walkthrough. The examples above target Node and React, but the concepts map to any stack.
