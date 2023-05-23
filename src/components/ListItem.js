import time from "../functions";
export default function ListItem({ id, content, created }) {

  return (
    <div className="list-item">
      <span>id:{id}</span>
      <p>{content}</p>
      <span className="date">Дата: {time(created)}</span>
    </div>
  )
}