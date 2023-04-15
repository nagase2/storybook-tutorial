import React from "react";

// prettier-ignore
import {  Header } from "./Header";

export default {
  title: "Example/Header",
  component: Header,
};

const Template: any = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
