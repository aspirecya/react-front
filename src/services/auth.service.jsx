import jwtDecode from 'jwt-decode';

export default class AuthService {

    login(body) {
        return fetch('http://localhost:3001/api/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(function (res) {
            console.log(res);

            return res.json();
        })
    }

    getUserToken() {
        return localStorage.getItem('token');
    }

    decodeUserToken() {
        return jwtDecode(this.getUserToken());
    }

    fetchUser(id) {
        fetch(`http://localhost:3001/api/v1/users/${id}`)
        .then((data) => {
            return data.json();
        })
    }
}
