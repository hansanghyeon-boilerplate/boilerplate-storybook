import * as jest from "jest-mock";
window.jest = jest;
import "./style.scss";
import { DocsPage, DocsContainer } from "@storybook/addon-docs";
import { themes } from "@storybook/theming";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  previewTabs: {
    "storybook/docs/panel": {
      index: -1,
    },
    canvas: { title: "Sandbox" },
  },
  options: {
    storySort: {
      order: [
        "Welcome",
        "Foundations",
        "Buttons",
        "Inputs",
        "Data display",
        "Media",
        "Popover",
        "Pickers",
        "*",
        "Accessibility",
        "Hooks",
      ],
    },
  },
  docs: {
    theme: themes.dark,
    inlineStories: true,
    container: ({ children, context }) => (
      <DocsContainer context={context}>{children}</DocsContainer>
    ),
    page: DocsPage,
  },
};

export const viewMode = "docs";
