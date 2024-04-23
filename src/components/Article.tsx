import { FC } from "react";
import { IContent } from "../models";

export const Article: FC<IContent> = (props) => {
  return (
    <div className="item item-article">
      <h3><a href="#">{props.title}</a></h3>
      <p className="views">Прочтений: {props.views}</p>
    </div>
  )
}
