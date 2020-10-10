import '../src/index.css';

// Configures Storybook to log the actions(onArchiveTask and onPinTask) in the UI.
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
      { name: 'turquoise', value: '#2ce' },
      { name: 'white', value: '#fff' },
    ],
  },
  assets: [
    { name: "app", url: "designs/app.png" },
    { name: "items", url: "designs/items.png" },
    { name: "list 1", url: "designs/list-1.png" },
    { name: "list 2", url: "designs/list-2.png" },
  ],
}