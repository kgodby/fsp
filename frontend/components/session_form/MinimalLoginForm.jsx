import React from 'react';

class MinimalLoginForm extends React.Component {
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
            
                    <form onSubmit={this.handleSubmit}  autoComplete="on" name="Login_form" id="login_form"className="minimal-form">
                        
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
                                    className="TextInput TeztInput_large"
                                />

                            </div>
                        </li>
                        <li className="Row CanBePulledDown PulledIntoViewWithoutDelay" id="passwordRow" tableindex="-1">
                            <div id="password-wrapper">
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className=" TextInput TextInput_large" id="password" name="password" placeholder="Password"
                                />
                            </div>
                        </li>
                        <li className="Row CanBePulledDown" id="responseMessageRow" tableindex="-1">
                            <div id="responseMessage" className="PullableText"></div>
                        </li>
                        <li className="Row CanBePulledDown PulledIntoView" id="submitRow" tableindex="-1">
                            <input type="hidden" name="login" id="eventToTrigger"/>
                            <input id ="loginButton" className="Btn Btn_emph Btn_super" type="submit" value="Continue"/>
                        </li>
                        <li className="Row horizontalSpace"></li>
                        <li className="checkbox-container SwitchInput Row CanBePulledDown PulledIntoView" id="rememberMeRow" tableindex="-1">
                            <input name="rememberMe" id="rememberMe" type="checkbox" className="checkbox" value="true"/>
                            <label htmlFor="rememberMe"> Remember me for 30 days</label>
                        </li>

                    </ol>
                        
                       
                            
                        
                
                        
                          
                            
                        
                           
                      
                    </form>
                </div>
        
        );
    }
}

export default MinimalLoginForm;
