import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, login } from '../../actions/session_actions';
import MinimalRegistrationForm from './MinimalRegistrationForm';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        login: (user) => dispatch(login(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MinimalRegistrationForm);
