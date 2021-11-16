import { mount } from "enzyme";
import React from "react";
import CommentBox from "../CommentBox";

let wrapper;
beforeEach(() => {
  wrapper = mount(<CommentBox />);
});
afterEach(() => {
  wrapper.unmount();
});

it("has a textarea and a button", () => {
  expect(wrapper.find("textarea").length).toEqual(1);
  expect(wrapper.find("button").length).toEqual(1);
});

describe("textarea", () => {
  beforeEach(() => {
    wrapper.find("textarea").simulate("change", {
      target: { value: "new comment" },
    });
    wrapper.update();
  });

  it("works a textarea onchange event", () => {
    expect(wrapper.find("textarea").prop("value")).toEqual("new comment");
  });

  it("submit form works", () => {
    wrapper.find("form").simulate("submit");
    wrapper.update();
    expect(wrapper.find("textarea").prop("value")).toEqual("");
  });
});
