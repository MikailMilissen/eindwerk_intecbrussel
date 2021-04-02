import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({

apiKey: "AIzaSyBDpaVI0OnuogQRN879Uw1HYIFXjznHwq0",
authDomain: "syla-development.firebaseapp.com",
projectId: "syla-development",
storageBucket: "syla-development.appspot.com",
messagingSenderId: "789699804018",
appId: "1:789699804018:web:42f89df2ace0a3b6587beb"
})

export const auth = app.auth()
export default app

// apiKey: ProcessingInstruction.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: ProcessingInstruction.env.REACT_APP_FIREBASE_authDomain,
//     projectId: ProcessingInstruction.env.REACT_APP_FIREBASE_projectId,
//     storageBucket: ProcessingInstruction.env.REACT_APP_FIREBASE_storageBucket,
//     messagingSenderId: ProcessingInstruction.env.REACT_APP_FIREBASE_messagingSenderI,
//     appId: ProcessingInstruction.env.REACT_APP_FIREBASE_appId