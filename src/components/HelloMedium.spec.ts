import { mount } from "@vue/test-utils";
import HelloMedium from "./HelloMedium.vue";
import { describe, it, expect } from "vitest";

describe("HelloMedium", () => {
  it("can render the message", () => {
    const message = "Hello Medium";
    const wrapper = mount(HelloMedium, {
      props: {
        message,
      },
    });
    expect(wrapper.text()).toContain(message);
  });
});
