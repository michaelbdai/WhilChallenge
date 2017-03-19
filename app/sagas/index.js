import { fork, take, call, put } from 'redux-saga/effects';
import { refreshList } from '../actions';


export const fetchListGetRequest = (username, password) => {
  console.log('in Saga, triggered fetchListGetRequest');
  const url = 'https://www.reddit.com/.json';
  return new Promise((resolve) => {
    fetch (url)
      .then(response => response.json())
      .then(json => {
        let thumbnails = {};
        let authors = {};
        let titles = {};
        let ups = {};
        // let favs = {};
        console.log('in saga')
        let dataArray = json.data.children
          .map(element => {
            thumbnails[element.data.id] = 
              element.data.thumbnail.slice(0, 5) !== 'https' ? 
              'https://www.redditstatic.com/sprite-reddit.6Om8v6KMv28.png' :
              element.data.thumbnail;
            authors[element.data.id] = element.data.author;
            titles[element.data.id] = element.data.title;
            ups[element.data.id] = element.data.ups;
            // favs[element.data.id] = false;
            return element.data.id;
          });
        // console.log('in sage favs', favs);
        resolve({dataArray, thumbnails, authors, titles, ups});
      });
  })
};

function* fetchList() {
  while (true) {
    yield take('FETCH_LIST')
    const {dataArray, thumbnails, authors, titles, ups} = yield call(fetchListGetRequest);
    // console.log('in saga favs', favs)
    yield put(refreshList(dataArray, thumbnails, authors, titles, ups));
  }

}

export default function* rootSaga() {
  yield fork(fetchList);

}

