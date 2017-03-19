import { connect } from 'react-redux';
import { switchFavs } from '../actions';
import Item from '../components/Item';

const mapStateToProps = (state) => ({
  thumbnails: state.thumbnails,
  authors: state.authors,
  titles: state.titles,
  ups: state.ups,
  favs: state.favs
});

const mapDispatchToProps = (dispatch) => ({
  handleSelect: (id) => {
    dispatch(switchFavs(id));
  }

});

const ItemContainer = connect(mapStateToProps, mapDispatchToProps)(Item);
export default ItemContainer;