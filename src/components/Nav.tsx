export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-in">
        <a className="brand" href="#top">Ryan Milrad</a>
        <div className="nav-links">
          <a href="#overview">Overview</a>
          <a href="#work">Work</a>
          <a href="#credentials">Credentials</a>
          <a href="#writing">Writing</a>
          <a href="#people">People</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="btn btn-primary" href="#contact">Get in touch</a>
      </div>
    </nav>
  );
}
