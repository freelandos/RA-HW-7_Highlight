import { FC, PropsWithChildren } from "react"

export const Popular: FC<PropsWithChildren> = (props) => {
  return (
    <div className="wrap-item wrap-item-popular">
      <span className="label">Popular!</span>
      {props.children}
    </div>
  )
}
