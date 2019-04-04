import { connect } from 'react-redux';
import Subheader from '../components/Subheader';
import {
    setSortBy
} from '../../utils/actions';

const mapDispatchToProps = dispatch => ({
    setSortBy: (value) => {
        console.log(value);
        dispatch(setSortBy(value));
    }
});

const SubheaderContainer = connect(null, mapDispatchToProps)(Subheader);

export default SubheaderContainer;