import firebase from 'firebase/compat';
import React, {useState, useEffect} from "react";


export const loginRequest = (email, password) => 
    firebase.auth().signInWithEmailAndPassword(email, password)