import s from "./PostPage.module.scss";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

function PostPage() {
    const {postId} = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`http://localhost:3001/posts/${postId}`);
            const data = await response.json();
            setPost(data);
        };
        getData();
    }, [postId]);

    return (
        <div className={s.postPage}>
            <div className={s.container}>
                <div className={s.content}>
                    <div className={s.title}>{post.title}</div>
                    <div className={s.inner_content}>
                        <img className={s.image} src={post.image} alt="404"/>
                        <div className={s.text}>Darling in the Franxx (яп. ダーリン・イン・ザ・フランキス Да:рин ин дза фуранкису,
                            досл.
                            «Милый во Франксе») — оригинальный аниме-сериал, транслировавшийся на различных телеканалах
                            Японии в период с 13 января по 7 июля 2018 года. Производством сериала занималась студия
                            CloverWorks, выделившаяся в ходе работы над ним из состава материнской A-1 Pictures,
                            совместно с
                            Trigger, которая анонсировала его на Anime Expo в июле 2017 года[2].
                            14 января в журнале Shonen Jump+ была начата публикация манга-адаптации от иллюстратора
                            Кэнтаро
                            Ябуки[3]. В этом же журнале в период трансляции сериала осуществлялась публикация комедийной
                            ёнкомы от мангаки mato.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostPage;