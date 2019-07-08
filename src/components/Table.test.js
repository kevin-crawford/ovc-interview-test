import React from "react";
import { Provider } from "react-redux";
import { mount, shallow } from "enzyme";
import { Table } from "./Table";

import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

const mockStore = configureStore([thunk]);

describe("<Table />", () => {
  it("Renders without crashing", () => {
    const store = mockStore({});
    const wrapper = shallow(
      <Provider store={store}>
        <Table />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
