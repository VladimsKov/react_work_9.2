import { useParams, useNavigate } from 'react-router-dom';
import time from '../functions';
import { delData } from '../requests';
import { useContext } from "react";
import { LinkContext } from '../contexts/LinkContext';
import { useState } from "react";
import ListItemEdit from './ListItemEdit';

export default function ListItemView({ list, setUpdate }) {
    const { baseUrl } = useContext(LinkContext);
    const { id } = useParams();
    const post = list.find((item) => item.id == id);
    const navigate = useNavigate();
    const [edit, setEdit] = useState(false);

    const editPost = () => {
        setEdit(true);
    }

    const delPost = async () => {
        const response = await delData(`${baseUrl}/posts/${id}`);
        if (response.ok) {
            setUpdate(prev => !prev);
            navigate("/");
        }
        console.log(response.status);
    }

    return (post ? edit ? <ListItemEdit post={post} setEdit={setEdit} setUpdate={setUpdate} /> : (
        <>
            <div className="list-item">
                <h2>Страница просмотра</h2>
                <span>Автор: ***</span>
                <span className="date">Дата: {time(post.created)}</span>
                <span>id: {post.id}</span>
                <p className='post-content'>{post.content}</p>
                <div>
                    <button className='btn' onClick={editPost}>Изменить</button>
                    <button className='btn' onClick={delPost}>Удалить</button>
                </div>
            </div>
        </>) : <p className='not-found'>Страница не найдена</p>
    )
}