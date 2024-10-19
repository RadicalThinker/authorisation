import { createContext, useContext } from "react";
import { app } from "../firebase";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const Firebasecontext = createContext(null);
const Firebaseauth = getAuth(app);
const database = getDatabase(app);

export const useFirebase = () => useContext(Firebasecontext);
export const FirebaseProvider = (props) => {

    const SignupUser = (email , password) => {
        createUserWithEmailAndPassword(Firebaseauth, email, password).then((value)=>console.log(value))
    }
    const SigninUser = (email , password) => {
        signInWithEmailAndPassword(Firebaseauth,email, password).then((value) => console.log(value))
        .catch(() => alert("invalid credentials"))
    }

    const SetData = (key, data) => {
        set(ref(database, key ), data)
    }

    const SignoutUser = () => {
        signOut(Firebaseauth).then((value) => console.log(value))
        .catch((error) => console.log(error))
    }



    return (
        <Firebasecontext.Provider value={{SignupUser, SigninUser, SetData, SignoutUser}}>
            {props.children}
        </Firebasecontext.Provider>
    )    
    }