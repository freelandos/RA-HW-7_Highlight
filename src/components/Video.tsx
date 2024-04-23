import { FC } from "react";
import { IContent } from "../models";

export const Video: FC<IContent> = (props) => {
  return (
    <div className="item item-video">
      <iframe src={props.url} allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <p className="views">Просмотров: {props.views}</p>
    </div>
  )
}
