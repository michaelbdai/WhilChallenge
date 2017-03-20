// 'use strict';

import 'react-native';
import React from 'react';
import { fork, take, call, put } from 'redux-saga/effects';

import * as actions from '../app/actions';
import reducer from '../app/reducers';
import { fetchListGetRequest, fetchList} from '../app/sagas';

const mockdata = {
  dataArray: undefined,
  thumbnails: undefined,
  authors: undefined,
  titles: undefined,
  ups: undefined,
};

describe('sagas', () => {
  const generator = fetchList();
  it('should listen to FETCH_LIST', () => {
    expect(generator.next().value).toEqual(take('FETCH_LIST'));
  });
  it('should listen to trigger fecth request function', () => {
    expect(generator.next().value).toEqual(call(fetchListGetRequest));
  });
  it('should listen to trigger refreshList action', () => {
    expect(generator.next(mockdata).value).toEqual(put(actions.refreshList()));
  });
})

xdescribe('Promise', () => {
  it('should fetch result online', () => {
    return fetchListGetRequest().
      then(({dataArray, thumbnails, authors, titles, ups}) => {
        expect(dataArray.length).toBeGreaterThan(0);
        expect(Object.keys(thumbnails).length).toBeGreaterThan(0);
        expect(Object.keys(authors).length).toBeGreaterThan(0);
        expect(Object.keys(titles).length).toBeGreaterThan(0);
        expect(Object.keys(ups).length).toBeGreaterThan(0);
      })
  });

})