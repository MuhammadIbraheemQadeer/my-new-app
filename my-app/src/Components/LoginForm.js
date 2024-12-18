import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    return (
        <div className='login-container'>
            <form className='login-form'>
                <h1>Login Form</h1>
                <label>Email: </label>
                <input
                    type="text"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p>Your email is "{email}."</p>

                <label>Password: </label>
                <input
                    type="text"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p>Your password is "{password}."</p>

                <label>Name: </label>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <p>Your name is "{name}."</p>

                <label>Age: </label>
                <input
                    type="number"
                    placeholder="Enter your age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <p>Your age is "{age}."</p>
            </form>
        </div>
    );
}

export default LoginForm;
