module.exports = {
  stories: ["../src/components/**/*.stories.*"],
  staticDirs: ["../public"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/preset-create-react-app", "@storybook/addon-interactions", "@storybook/addon-a11y", "@storybook/addon-mdx-gfm"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  features: {
    interactionsDebugger: true
  },
  docs: {
    autodocs: true
  }
};