import React, { useState } from 'react'
import "./Login.css"
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import {login} from "./features/userSlice"

function Login() {

    const dispatch = useDispatch();
    const [email,setEmail]= useState();
    const [password,setPassword] = useState();
    const [name,setName] = useState();
    const [profilePic,setProfilePic]=useState();

    const loginToApp = (e) =>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth =>{
            dispatch(login({
                email: userAuth.email,
                uid:userAuth.uid,
                displayName:userAuth.displayName,
                photoUrl:userAuth.photoURL,
            }))
        }).catch(e => alert(e))
    }

    const register = () =>{
        if (!name){
            return alert("Please enter a full name!")
        }
        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName:name,
                photoURL:profilePic,
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:name,
                    photoURL :profilePic,
                }));
            });
        }).catch((error)=>alert(error));
    };

    return (
        <div className="login">
            {/* <img alt="" src="https://th.bing.com/th/id/OIP.-6qQW5mo85wd8i6bE4ATMAHaCu?w=343&h=129&c=7&r=0&o=5&pid=1.7" /> */}
            <img src="data:image/jpeg;base64,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" />
            <form>
                <input 
                    value={name} 
                    onChange={(e)=>setName(e.target.value)} 
                    type="text" 
                    placeholder="Fullname (required if registering)"      
                />
                
                <input 
                    value={profilePic}
                    onChange={(e)=>setProfilePic(e.target.value)}
                    type="text" 
                    placeholder="Profile pic URL (optional)"    
                />
                
                <input 
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)}
                    type="email" 
                    placeholder="Email" 
                />

                <input 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    type="password" 
                    placeholder="Password" 

                />
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member? <span className="login__register" onClick={register}>Register Now</span></p>
        </div>
    )
}

export default Login
