import { connect } from 'react-redux';
import TopicList from '../components/TopicList';
import {
    addTopic
} from '../../utils/actions';

const mapDispatchToProps = dispatch => ({
    addTopic: (topicToAdd) => {
        console.log(topicToAdd);
        dispatch(addTopic(topicToAdd));
    }
});

const TopicListContainer = connect(null, mapDispatchToProps)(TopicList);

export default TopicListContainer;