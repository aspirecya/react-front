import React, {Component} from 'react';
import LoginForm from '../components/LoginForm'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Login",
            subtitle: "Enter your email and your password in the fields."
        }
    }

    render() {
        return (
            <div className="">
                <h1>{ this.state.title }</h1>
                <h3>{ this.state.subtitle }</h3>
                <LoginForm/>
            </div>
        );
    }
}

export default Login;