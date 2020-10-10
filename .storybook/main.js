module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    './design-addon/register', // our addon
  ]
}

// module.exports = {
//   stories: ["../src/components/**/*.stories.js"],
//   addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/preset-create-react-app", "./design-addon/register"],
// };