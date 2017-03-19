import { connect } from 'react-redux';
import { switchFavs } from '../actions';
import Details from '../components/Details';

const mapStateToProps = (state) => ({
  thumbnails: state.thumbnails,
  authors: state.authors,
  titles: state.titles,
  ups: state.ups,
  favs: state.favs,
});

const mapDispatchToProps = (dispatch) => ({
  handleFavChange: (id) => {
    dispatch(switchFavs(id));
  }

});

const DetailScreen = connect(mapStateToProps, mapDispatchToProps)(Details);
export default DetailScreen;