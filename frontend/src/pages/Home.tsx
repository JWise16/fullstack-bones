import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const { session, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  const testBackend = async () => {
    const token = session?.access_token;
    console.log('Token:', token); // Add this line
    const response = await fetch('http://localhost:5001/api/protected', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    alert(JSON.stringify(data));
  };
  

  return (
    <div>
      <h1>Welcome to Your App!</h1>
      <p>You are logged in as {session?.user?.email}</p>
      <button onClick={handleSignOut}>Sign Out</button>
      <button onClick={testBackend}>Test Backend</button>
    </div>
  );
}
