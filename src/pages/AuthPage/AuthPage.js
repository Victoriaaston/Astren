import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"
import "./AuthPage.css"

export default function AuthPage({setUser}) {
    return(
        <main className="auth-page">
            <h1> Auth Page </h1>
            <div className="auth-forms">
                <SignUpForm setUser={setUser} />
                <LoginForm setUser={setUser}/>
            </div>
        </main>
    )
}
