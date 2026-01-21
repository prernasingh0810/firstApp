import { useNavigate } from "react-router-dom";
import { useState } from "react";

let db = [
    { username: 'admin', password: 'admin' }
];


const Login = () => {

    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const navigate = useNavigate();

    const LoginFun = () => {

        const shallowCopy = db.filter((item) => {
            return item.username === Username && item.password === Password;
        });
        if (shallowCopy.length >= 1) {

            navigate('/dasboard');

        }else{
            alert("wrong credentials")
        }

    }


    return (
        <div>
            <h1>Login Page</h1>
            <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" />
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
            <button onClick={LoginFun}>Login</button>
        </div>
    );
};

export default Login;