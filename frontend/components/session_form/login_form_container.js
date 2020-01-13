import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import Login from './Login';
import MinimalLoginForm from './MinimalLoginForm';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session
      
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MinimalLoginForm);
