import React from 'react';

class SessionForm extends React.Component {
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
        <div className="login-body">
            <div className="login-wrapper">
                <div className="login-form-container">
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        
                    <h1>Evernote</h1>
                        
                        <div className="login-form">
                            <br />
                            <label className="email">
                <input type="text"
                                    value={this.state.username}
                                    onChange={this.update('email')}
                                    className="login-input"
                                />
                            </label>
                            
                        
                
                        
                            <label className='password'>
                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-input"
                                />
                            </label>
                            <br />
                            <input className="session-submit" type="submit" value={this.props.formType} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
        );
    }
}

export default SessionForm;
