import s from "./PostCreationPage.module.scss"
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addPost} from "../../store/postsSlice";

function PostCreationPage() {
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const imageChangeHandler = (event) => {
        setImage(event.target.value);
    }

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const textChangeHandler = (event) => {
        setText(event.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(addPost({
            title,
            image,
            text
        }));
        // try {
        //     fetch("http://localhost:3001/posts", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify({
        //             image,
        //             title,
        //             text
        //         }),
        //     });
        // } catch (error) {
        //     console.log("error: ", error);
        // }
    }

    return (
        <div className={s.postCreationPage}>
            <div className={s.container}>
                <div className={s.content}>
                    <div className={s.title}>Post creation</div>
                    <div className={s.field}>
                        <form className={s.form} onSubmit={submitHandler}>
                            <div className={s.field_content}>
                                <div className={s.labels}>
                                    <label htmlFor="image">Image url</label>
                                    <label htmlFor="title">Title</label>
                                    <label htmlFor="textarea">Text</label>
                                </div>
                                <div className={s.inputs}>
                                    <input className={s.input} id="image" type="text" value={image}
                                           onChange={imageChangeHandler}/>
                                    <input className={s.input} id="title" type="text" value={title}
                                           onChange={titleChangeHandler}/>
                                    <input className={s.bigInput} id="textarea" type="text" value={text}
                                           onChange={textChangeHandler}/>
                                </div>
                            </div>
                            <button type="submit">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostCreationPage;