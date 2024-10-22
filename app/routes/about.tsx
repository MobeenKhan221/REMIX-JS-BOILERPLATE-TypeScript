import { Link } from "@remix-run/react";

export default function About() {
  return (
    <div>
      <Link to="/">
        <h1>Back toHome</h1>
      </Link>
      <p>This is about Pgae</p>
    </div>
  );
}
