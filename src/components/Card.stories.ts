import type { Meta, StoryObj } from "@storybook/vue3";

import YourComponent from "./Card.vue";

const meta: Meta<typeof YourComponent> = {
  title: "Components/Card",
  tags: ["autodocs"],
  component: YourComponent,
};

//👇 This default export determines where your story goes in the story list
export default meta;
type Story = StoryObj<typeof YourComponent>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
const Template = (arg: any) => ({
  components: { YourComponent },
  setup() {
    return { args: arg };
  },
  template: '<YourComponent v-bind="args" />',
});

export const Primary: Story = {
  render: Template,
  args: {
    //👇 The args you need here will depend on your component
    title: "FANG",
  },
};

export const Secondary: Story = {
  render: Template,
  args: {
    //👇 The args you need here will depend on your component
    title: "FANGG",
    subtitle: "Subtitle",
    mediaHref: "src/assets/vue.svg",
  },
};

export const Third: Story = {
  render: Template,
  args: {
    //👇 The args you need here will depend on your component
    title: "FANGG",
    subtitle: "Subtitle",
    mediaHref: "src/assets/vue.svg",
    supportingText:
      "lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
  },
};

export const Forth: Story = {
  render: Template,
  args: {
    //👇 The args you need here will depend on your component
    title: "FANGG",
    subtitle: "Subtitle",
    mediaHref: "src/assets/vue.svg",
    supportingText:
      "lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    buttonText: "Button",
  },
};
