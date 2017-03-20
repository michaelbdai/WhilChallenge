// 'use strict';

import 'react-native';
import React from 'react';
import * as actions from '../app/actions';
import reducer from '../app/reducers';


describe('actions', () => {
  it('should create an action to fetch list', () => {
    const expectedAction = {
      type: 'FETCH_LIST',
    }
    expect(actions.fetchList()).toEqual(expectedAction)
  })
});

describe('actions', () => {
  it('should create an action to fetch list', () => {
    let itemId = 'xxxx';
    const expectedAction = {
      type: 'SWITCH_FAVS',
      itemId,
    }
    expect(actions.switchFavs(itemId)).toEqual(expectedAction)
  })
});

describe('reducer', () => {
  const initialState = {
    dataArray: [],
    thumbnails: {},
    authors: {},
    titles: {},
    ups: {},
    favs: {},
  };
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState)
  });

  it('should handle SWITCH_FAVS', () => {
    expect(
      reducer(
      {
        dataArray: [],
        thumbnails: {},
        authors: {},
        titles: {},
        ups: {},
        favs: {'fakeId' : false}
      }, 
      {
        type: 'SWITCH_FAVS',
        itemId: 'fakeId'
      })
    ).toEqual(
      {
        dataArray: [],
        thumbnails: {},
        authors: {},
        titles: {},
        ups: {},
        favs: {'fakeId' : true},
      }
    )
  });


})

