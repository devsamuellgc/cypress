import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <div>
        <Link to="/login" data-cy="link">
          Login
        </Link>
      </div>
      <h1>Home</h1>
    </main>
  );
}
