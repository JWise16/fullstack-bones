import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div>
      <h1>Your App Name</h1>
      <p>Welcome to Your App!</p>
      <Link to="/login">Sign In</Link>
      <br />
      <Link to="/signup">Sign Up</Link>
    </div>
  );
}
