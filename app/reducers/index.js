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
      console.log('fetch result---',action.dataArray);
      console.log(action.ups);
      console.log(action.titles);
      return {
        ...state,
        dataArray: action.dataArray,
        thumbnails: action.thumbnails,
        authors: action.authors,
        titles: action.titles,
        ups: action.ups,
        // favs: action.favs,
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
          // copyOfList[id] = !list[id];
          // console.log(copyOfList);
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