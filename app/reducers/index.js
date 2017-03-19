const initialState = {
  dataArray: [],
  thumbnails: {},
  authors: {},
  titles: {},
  ups: {},
  favs: {},
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REFRESH_LIST' :
      return {
        ...state,
        dataArray: action.dataArray,
        thumbnails: action.thumbnails,
        authors: action.authors,
        titles: action.titles,
        ups: action.ups,
      }  
    case 'SWITCH_FAVS': 
      return {
        ...state,
        favs: ((list, id) => {
          let copyOfList = {};
          for (key in list) {
            copyOfList[key] = list[key];
          }
          if (copyOfList[id]) {
            delete copyOfList[id];
          } else {
            copyOfList[id] = true;
          }
          return copyOfList;
        })(state.favs, action.itemId),
      }  
    case 'RESET':
      return initialState;  
    default: 
      return state;
  }

}

export default rootReducer;