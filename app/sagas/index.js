import { fork, take, call, put } from 'redux-saga/effects';
import { refreshList } from '../actions';


export const fetchListGetRequest = (username, password) => {
  console.log('in Saga, triggered fetchListGetRequest');
  const url = 'https://www.reddit.com/.json';
  return new Promise((resolve) => {
    fetch (url)
      .then(response => response.json())
      .then(json => {
        let data = {};
        let dataArray = json.data.children
          .map(element => {
            data[element.data.id] = element.data;
            return element.data.id;
          });
        resolve({data, dataArray});
      });
  })
};

function* fetchList() {
  while (true) {
    yield take('FETCH_LIST')
    const {data, dataArray} = yield call(fetchListGetRequest);
    // console.log('-------', data);
    yield put(refreshList(data, dataArray));
  }

}

export default function* rootSaga() {
  yield fork(fetchList);

}

