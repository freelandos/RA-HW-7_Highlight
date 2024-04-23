import { FC } from "react";
import { Video } from "./Video";
import { Article } from "./Article";
import { withHighlight } from "./withHighlight";
import { IContent } from "../models";

interface ListProps {
  list: IContent[];
}

export const List: FC<ListProps> = (props) => {
  const VideoHighlight = withHighlight(Video);
  const ArticleHighlight = withHighlight(Article);

  return props.list.map((item, index) => {
    switch (item.type) {
      case "video":
        return <VideoHighlight {...item} key={index} />

      case "article":
        return <ArticleHighlight {...item} key={index} />
    }
  });
}
