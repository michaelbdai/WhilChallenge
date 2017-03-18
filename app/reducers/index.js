const initialState = {
  list: {},
  dataArray: [],
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REFRESH_LIST' :
      console.log(action.list);
      // console.log(action.dataArray);
      return {
        ...state,
        list: action.list,
        dataArray: action.dataArray,
      }  

    default: 
      return state;
  }

}

export default rootReducer;