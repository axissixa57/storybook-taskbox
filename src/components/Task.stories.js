import React from "react";

import Task from "./Task";

// To tell Storybook about the component we are documenting, we create a default export that contains:
export default {
  component: Task, // the component itself,
  title: "Task", // how to refer to the component in the sidebar of the Storybook app,
  // it is necessary for example to change the background of the window Storybook (it can be moved to another document for example globally to preview.js)
  // parameters: {
  //   backgrounds: {
  //     values: [
  //       { name: 'turquoise', value: '#2ce' },
  //       { name: 'white', value: '#fff' },
  //     ],
  //   },
  // },
  // specify the args (https://storybook.js.org/docs/react/api/argtypes) behavior in each story.
  // argTypes: {
  //   /* ...actionsData, */
  //   backgroundColor: { control: "color" },
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

const longTitleString = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;

export const LongTitle = Template.bind({});
LongTitle.args = {
  task: {
    ...Default.args.task,
    title: longTitleString,
  },
};
