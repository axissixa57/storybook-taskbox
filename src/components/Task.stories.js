import React from "react";

import Task from "./Task";

// To tell Storybook about the component we are documenting, we create a default export that contains:
export default {
  component: Task, // the component itself,
  title: "Task", // how to refer to the component in the sidebar of the Storybook app,
  // argTypes: { // specify the args (https://storybook.js.org/docs/react/api/argtypes) behavior in each story.
  //   backgroundColor: { control: 'color' },
  // }, 
  // excludeStories -- exports in the story file that should not be rendered as stories by Storybook.
};

const Template = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};
