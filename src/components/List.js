import { Link } from "react-router-dom";
import ListItem from "./ListItem"

export default function List({ list }) {
  const outList = list.map((e, i, a) => a[(a.length - 1) - i]);

  return (
    <ul className="list">
      {
        outList.map((item) =>
          <Link key={item.id} className="postlink" to={`/posts/${(String(item.id))}`}>
            <ListItem
              id={item.id}
              content={item.content}
              created={item.created} />
          </Link>
        )
      }
    </ul>
  )
}