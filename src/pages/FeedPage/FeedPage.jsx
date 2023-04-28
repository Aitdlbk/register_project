import s from "./FeedPage.module.scss";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../store/postsSlice";

function FeedPage() {
    const {posts, status, error} = useSelector(store => store.posts);
    const dispatch = useDispatch();
    const nav = useNavigate();
    // const [posts, setPosts] = useState([]);

    useEffect(() => {
        dispatch(getPosts()).then(() => {
            nav("/");
        });

        // const getData = async () => {
        //     const response = await fetch(`http://localhost:3001/posts`);
        //     const data = await response.json();
        //     setPosts(data);
        // };
        // getData();
    }, []);
    return (<div className={s.container}>
        <div className={s.wrapper}>
            <div className={s.inner_wrapper}>
                <div className={s.title}>Recent posts</div>
                <div className={s.image_container}>
                    {status === "fulfilled" && posts.map(elem => (<div className={s.item} key={elem.id}>
                        <img src={elem.image} alt="404" className={s.girl_image}/>
                        <Link to={`/posts/${elem.id}`} className={s.link}></Link>
                    </div>))}
                    {status === "loading" && <div>Loading</div>}
                    {status === "rejected" && <div>Rejected</div>}
                </div>
            </div>
        </div>
    </div>);
}

export default FeedPage;