
import './App.css';
import Auth from './pages/Auth';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import Home from './pages/Home';


const auth = getAuth();
function App() {

  const [user , setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth , (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);


  if (user==null) {
    return (
      <Auth/>
    );
  }

  return (
    console.log(user),
    <Home/>
  );
}

export default App;
