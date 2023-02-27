import React from "react"
import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"
import "./AuthPage.css"


export default function AuthPage({setUser}) {
    return(
        <main className="auth-page">
            <h1 id="auth-page-title"> Welcome to Astren </h1>
            <div className="auth-forms">
                <SignUpForm id="signup-form" setUser={setUser} />
                <LoginForm id="login-form" setUser={setUser}/>
            </div>
        </main>
    )
}