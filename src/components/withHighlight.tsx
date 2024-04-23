import { ComponentType } from "react";
import { New } from "./New";
import { Popular } from "./Popular";
import { IContent } from "../models";

export const withHighlight = (Component: ComponentType<IContent>) => {
  return (props: IContent) => {
    if (props.views >= 1000) {
      return (
        <Popular>
          <Component {...props} />
        </Popular>
      )
    }

    if (props.views < 100) {
      return (
        <New>
          <Component {...props} />
        </New>
      )
    }

    return <Component {...props} />
  }
}
