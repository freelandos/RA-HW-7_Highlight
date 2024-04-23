import { FC, PropsWithChildren } from "react";

export const New: FC<PropsWithChildren> = (props) => {
  return (
    <div className="wrap-item wrap-item-new">
      <span className="label">New!</span>
      {props.children}
    </div>
  )
}
