import React from "react";
import { Provider } from "react-redux";
import { action } from "@storybook/addon-actions";

import { PureInboxScreen } from "./InboxScreen";
import * as TaskListStories from "./TaskList.stories";

// A super-simple mock of a redux store
const store = {
  getState: () => {
    return {
      tasks: TaskListStories.Default.args.tasks,
    };
  },
  subscribe: () => 0,
  dispatch: action("dispatch"),
};

export default {
  component: PureInboxScreen,
  title: "Taskbox/InboxScreen",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  parameters: {
    assets: [
      { name: "items", url: "designs/items.png" },
      { name: "list 1", url: "designs/list-1.png" },
      { name: "list 2", url: "designs/list-2.png" },
      { name: "app", url: "designs/app.png" },
    ],
  },
};

const Template = (args) => <PureInboxScreen {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: "Something",
};
