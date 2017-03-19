// import { Actions as NavigationActions } from 'react-native-router-flux';
export const refreshList = (dataArray, thumbnails, authors, titles, ups) => ({
  type: 'REFRESH_LIST',
  dataArray,
  thumbnails,
  authors,
  titles,
  ups,
});
export const fetchList = () => ({
    type: 'FETCH_LIST',
});
export const switchFavs = (itemId) => ({
  type: 'SWITCH_FAVS',
  itemId,
})

export const resetState = () => ({
  type: 'RESET',
})