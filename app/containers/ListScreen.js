import { connect } from 'react-redux';
import { fetchList, selectItem } from '../actions';
import List from '../components/List';

console.log('hi');
const mapStateToProps = (state) => ({
  dataArray: state.dataArray,
  thumbnails: state.thumbnails,
  authors: state.authors,
  titles: state.titles,
  ups: state.ups,  
})

const mapDispatchToProps = (dispatch) => ({
  handleRefresh: () => {
    dispatch(fetchList());
  },
  handleSelect: (id) => {
    dispatch(selectItem(id));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List);