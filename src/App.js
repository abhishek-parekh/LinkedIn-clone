import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { logout,login,selectUser } from './features/userSlice';
import Feed from './Feed';
import Header from './Header';
import Sidebar from "./Sidebar";
import Login from './Login';
import Widgets from "./Widgets"
import { auth } from './firebase';
import { useDispatch } from 'react-redux';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged(userAuth=>{
      if (userAuth){
        //user is logged in
        dispatch(login({
          email: userAuth.email,
          uid:userAuth.uid,
          displayName:userAuth.displayName,
          photoUrl:userAuth.photoURL,
        }))
      } else {
        //user is logged out
        dispatch(logout());
      }
    })
  },[])

  return (
    <div className="app">
      <Header />

      {!user ? ( <Login />) :(
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
      </div>
      )}

      
    </div>
  );
}

export default App;
