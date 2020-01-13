import { connect } from 'react-redux';

import { login, signup } from '../../../actions/session_actions'

import UtilNav from './util_nav';

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};



export default connect(
    mapStateToProps,
    null
)(UtilNav);
