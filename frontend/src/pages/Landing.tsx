import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div>
      <h1>StoryTown</h1>
      <p>Welcome to StoryTown!</p>
      <Link to="/login">Sign In</Link>
      <br />
      <Link to="/signup">Sign Up</Link>
    </div>
  );
}
