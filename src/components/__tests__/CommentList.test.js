import { mount } from "enzyme";
import React from "react";
import Root from "../../Root";
import CommentList from "../CommentList";

let wrapper;
beforeEach(() => {
  const initialState = {
    comments: ["comment1", "comment2"],
  };
  wrapper = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});
afterEach(() => {
  wrapper.unmount();
});

it("creates Li", () => {
  console.log(wrapper.find("li").length);
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
