import  React, {useState, useEffect} from 'react';
import fire from '../fire';
import Homepage from './homepage';
import { useHistory } from "react-router-dom";

const Login = (props) => {
  
    // const { 
    //     email, 
    //     setEmail, 
    //     password,
    //     setPassword,
    //     handleLogin,
    //     handleSignUp,
    //     hasAccount,
    //     setHasAccount,
    //     emailError,
    //     passwordError
    // } = props;

    // let navigate = useNavigate();
    let history = useHistory();

    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }

    const handleLogin = () => {
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                }
            });
    };

    const handleSignUp = () => {
        clearErrors();
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                }
            });
    };

    const authListener = () => {
        fire.auth().onAuthStateChanged(user => {
            if (user) {
                clearInputs();
                setUser(user);
                console.log(user);
                history.push("/homepage")
            }
            else {
                setUser("");
            }
        })
    }

    useEffect(() => {
        authListener();
    }, [])

    return (
                <div className='col-12 m-auto'>
                    <br>
                    </br>
                    <p><h3>Sign Up/Log In</h3></p>
                    <div className='form-group'>
                        <label>Email Address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <p className="errorMsg">{emailError}</p>
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input
                            type="password"
                            required
                            className="form-control"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <p className="errorMsg">{passwordError}</p>
                    </div>
                    <br></br>
                    <div className='btnContainer'>
                        {hasAccount ? (
                            <>
                                <button className="btn btn-primary btn-block" onClick={handleLogin}>Sign In</button>
                                <br></br>
                                <p>Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                            </>
                        ) : (
                            <>
                                <button className="btn btn-primary btn-block" onClick={handleSignUp}>Sign Up</button>
                                <br></br>
                                <p>Have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                            </>
                        )
                        }
                    </div>
                </div>
    );
}

export default Login;
