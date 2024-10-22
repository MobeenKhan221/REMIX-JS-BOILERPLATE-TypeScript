import { Link } from "@remix-run/react";
export default function Home() {
  return (
    <div>
      <Link to="/">
        <h1>Back to Home</h1>
      </Link>
      <p>This is home</p>
    </div>
  );
}
