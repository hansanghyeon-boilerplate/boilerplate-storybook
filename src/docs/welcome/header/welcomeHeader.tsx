import { ComponentName } from "~sb/components";
import style from "./welcomeHeader.module.scss";

export default function WelcomeHeader() {
  return (
    <ComponentName className={style["monday-storybook-welcome-header"]}>
      <span className={`${style["monday-storybook-welcome-header"]}_text`}>
        Welcome vite storybook boilerplate
        <br /> by Hansanghyeon
      </span>
    </ComponentName>
  );
}
