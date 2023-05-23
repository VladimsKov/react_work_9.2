import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useState } from "react";
import { postData } from "../requests";
import { LinkContext } from "../contexts/LinkContext";

export default function ListItemCreate({ setUpdate }) {
    const { baseUrl } = useContext(LinkContext);
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const contentChange = ({ target }) => {
        const { value } = target;
        setContent(() => value);
    }

    const publicPost = async (evt) => {
        evt.preventDefault();
        const body = {
            id: 0,
            content,
        }
        const response = await postData(`${baseUrl}/posts`, body);
        if (response.ok) {
            setUpdate(prev => !prev);
            navigate("/");
        }
        console.log(response.status);
    }
    return (
        <div className="list-item">
            <form onSubmit={publicPost}>
                <textarea className="create-post-content" onChange={contentChange}
                    rows="5" wrap="soft" placeholder="Введите текст..." autoFocus required></textarea>
                <input className='btn create-btn' value="опубликовать" type="submit" />
            </form>
            <button className="del-btn" onClick={() => navigate("/")}></button>
        </div>
    )
}



