import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from './components/Login';
import LogoutButton from './components/Logout';
import Home from './view';

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <h1>Is Loading</h1>
  }

  return (
    <div>
 {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    <Router>
      <Home />
    </Router>
    </div>
  
  );
}

export default App;
