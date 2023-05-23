import { useContext } from "react";
import {useState} from "react";
import { postData } from "../requests";
import { LinkContext } from "../contexts/LinkContext";
import time from "../functions";

export default function ListItemEdit({post, setEdit, setUpdate}) {
    const { baseUrl } = useContext(LinkContext);
    const [content, setContent] = useState(post.content);    

    const contentChange = ({ target }) => {
        const { value } = target;
        setContent(() => value);
    }

    const editPost = async (evt) => {
        evt.preventDefault();
        const body = {
            id: post.id,
            content,
        }
        const response = await postData(`${baseUrl}/posts`, body);
        if (response.ok) {
            setUpdate(prev=>!prev);
            setEdit(false);
        }
        console.log(response.status);
    }
  
    
    return (
        <div className="list-item">
            <h2>Редактировать публикацию</h2>
            <span>Автор: ***</span>
            <span className="date">Дата: {time(post.created)}</span>
        <span>id: {post.id}</span>
        <form onSubmit={editPost}>
        <textarea className="create-post-content" onChange={contentChange}
        rows="5" wrap="soft"  value={content} required></textarea>
        <input className='btn create-btn'  value="сохранить" type="submit"/>
        </form>

         <button className="del-btn" onClick={()=>setEdit(false)}></button>
        </div>
    )
}