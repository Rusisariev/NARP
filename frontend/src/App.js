import React, {useState} from "react";
import instance from "./axios";

const App = () => {
    const [login, setLogin] = useState({email: "", password: ""})
    const [registration, setRegistration] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target

        setLogin(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleClickLogin = async () => {
        await instance.post("/auth/login", login).then(res => {
            if(res.data){
                window.localStorage.setItem("token", res.data.token)
            }
        })
    }
    const handleClickRegistration = async () => {
        await instance.post("/auth/registration", login).then(res => {
            if(res.data){
                window.localStorage.setItem("token", res.data.token)
            }
        })
    }

    return (
        <div className="app">
            {
                registration ? (
                    <div className="login">
                        <h2>Регистрация</h2>
                        <input type="email" name="email" onChange={handleChange} placeholder="example@example.example" />
                        <input type="password" name="password" onChange={handleChange} placeholder="Пароль"/>
                        <button onClick={handleClickRegistration}>Зарегистрироватся</button>
                        <p>если есть акаунт <span onClick={() => setRegistration(!registration)}>войдите</span></p>
                    </div>
                ) : (
                    <div className="login">
                        <h2>Авторизация</h2>
                        <input type="email" name="email" onChange={handleChange} placeholder="example@example.example" />
                        <input type="password" name="password" onChange={handleChange} placeholder="Пароль"/>
                        <button onClick={handleClickLogin}>Войти</button>
                        <p>если нету акаунта <span onClick={() => setRegistration(!registration)}>зарегистрируйтесь</span></p>
                    </div>
                )
            }
        </div>
    );
}

export default App;
