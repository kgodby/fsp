import React from 'react';

class MinimalRegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            email: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }




    render() {


        return (
            <div className="signin">

                <form onSubmit={this.handleSubmit} autoComplete="on" name="Login_form" id="login_form" className="minimal-form">

                    <ol>
                        <li className="Row">
                            <div id="demo-signup" className="demo-button">
                                <div className="demo-signup-inner">
                                    <div className="demo-text">
                                        Continue as Demo User</div>
                                </div>
                            </div>
                        </li>
                        <li className="Row horizontalRow">
                            <div className="horizontalText">
                                or
                            </div>
                            <div className="horizontalLine"></div>
                            <div></div>
                        </li>
                        <li className="Row">
                            <div id="email-wrapper">
                                <input type="text"
                                    name="username"
                                    id="username"
                                    placeholder="Email address or username"
                                    value={this.state.username}
                                    onChange={this.update('email')}
                                    className="TextInput TextInput_large"
                                />

                            </div>
                        </li>
                        <li className="Row" id="passwordRow" tableindex="-1">
                            <div id="password-wrapper">
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className=" TextInput TextInput_large" id="password" name="password" placeholder="Password"
                                />
                            </div>
                        </li>
                        
                        <li>
                            <input name="register" id="register" className="Btn Btn_emph Btn_super Btn_create_account" type="submit" value="Continue" />
                        </li>
                        
                        <li className="tos-container">
                            <label className="t-pico tos">
                                By creating an account, you agree to our
                                <br/><a href="#">Terms of Surrender </a>
                                 and
                                <a href="#"> Privates Policy</a>
                                .
                            </label>
                        </li>

                    </ol>











                </form>
            </div>

        );
    }
}

export default MinimalRegistrationForm;
