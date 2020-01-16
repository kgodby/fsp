import Note from './note'
import {connect} from 'react-redux'
import {logout} from '../../actions/session_actions'

const mapStateToProps = state => ({
    errors: state.errors.session,
    currentUser: state.entities.users[state.session.id].email
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});


export default connect(mapStateToProps, mapDispatchToProps)(Note)