import React, {Component} from 'react';
import AuthService from '../services/auth.service';

class Account extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: []
        }

        this.Auth = new AuthService();
        const profile = this.Auth.decodeUserToken();
        console.log(profile);
    }


    render() {
        return (
            <div>
                <h1>Mon compte</h1>
            </div>
        );
    }
}

export default Account;