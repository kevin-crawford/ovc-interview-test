import moxios from "moxios";
import expect from "expect";
import configureMockStore from "redux-mock-store";

import thunk from "redux-thunk";

import * as actions from "./dataActions";

import getDataMock from "../mocks/getDataMocks";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("getData actions", () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it("creates GET_POSTS_SUCCESS after successfully fetching data", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: getDataMock
      });
    });

    const expectedActions = [
      { type: actions.GET_DATA_LOADING },
      { type: actions.GET_DATA_SUCCESS, payload: getDataMock }
    ];

    const store = mockStore({ loading: false, data: [], errors: null });

    return store.dispatch(actions.getData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
