import React from 'react';

import { authWithAxios } from './utils/authWithAxios';

class Login extends React.Component {
    state = {
        creds: {
            username: '',
            password: '',
        },
    };

    handleChanges = (e) => {
        this.setState({
            creds: {
                ...this.state.creds,
                [e.target.name]: e.target.value,
            },
        });
    };

    login = (e) => {
        e.preventDefault();
        authenticAxios()
            .post('/api/login', this.state.creds)
            .then((res) => {
                // console.log(res);
                // console.log(this.props.history);
                localStorage.setItem('token', JSON.stringify(res.data.payload));
                this.props.history.push('/protected');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
    render() {
        return (
            <>
                <h1>Welcome to the Bubble App!</h1>
                <section>
                    <h4>Login required to continue:</h4>
                    <form onSubmit={this.login}>
                        Username:
                        <input
                            type="text"
                            name="username"
                            value={this.state.creds.username}
                            onChange={this.handleChanges}
                        />
                        <br />
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={this.state.creds.password}
                            onChange={this.handleChanges}
                        />
                        <br />
                        <button>Login</button>
                    </form>
                </section>{' '}
            </>
        );
    }
}

export default Login;
