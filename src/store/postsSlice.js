import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";



export const getPosts = createAsyncThunk(
    "posts/getPosts",
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch(`http://localhost:3001/posts/`);

            if (!response.ok) {
                throw new Error(`Server error with status - ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const getPost = createAsyncThunk(
    "posts/getPost",
    async function (id, {rejectWithValue}) {
        try {
            const response = await fetch(`http://localhost:3001/posts/${id}`);
            if (!response.ok) {
                throw new Error(`Server error with status - ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const addPost = createAsyncThunk("posts/addPost", async function ({title, image, text}, {rejectWithValue}) {
    try {
        const response = await fetch(`http://localhost:3001/posts/`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                image,
                text
            })
        });
        console.log(response)
        if(!response.ok) {
            throw new Error(`Server error with status - ${response.status}`);
        }
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const deletePost = createAsyncThunk("posts/deletePost", async function(id, {rejectWithValue, dispatch}) {
    try {
        const dispatch = useDispatch();
        const response = await fetch(`http://localhost:3001/posts/${id}`);
        if(!response.ok) {
            throw new Error(`Server error with status - ${response.status}`);
        }
        dispatch(getPost());
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
export const updatePost = createAsyncThunk("posts/updatePost", async function({id, title, text}, {rejectWithValue}) {
    try {
        const dispatch = useDispatch();

        const response = await fetch(`http://localhost:3001/posts/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id,
                title,
                text
            })
        });
        dispatch(getPost());

        if(!response.ok) {
            throw new Error(`Server error with status - ${response.status}`);
        }
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        post: {},
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getPosts.pending]: (state) => {
            state.status = 'Loading';
            state.error = null;
        },
        [getPosts.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [getPosts.fulfilled]: (state, action) => {
            state.status = "fulfilled";
            state.posts = action.payload;
        },
        [addPost.pending]: (state) => {
            state.status = "Loading";
            state.error = null;
        },
        [addPost.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [addPost.fulfilled]: (state) => {
            state.status = "fulfilled";
        },
        [deletePost.pending]: (state) => {
            state.status = "Loading";
            state.error = null;
        },
        [deletePost.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [deletePost.fulfilled]: (state) => {
            state.status = "fulfilled";
        },
        [getPost.pending]: (state) => {
            state.status = "Loading";
            state.error = null;
        },
        [getPost.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [getPost.fulfilled]: (state, action) => {
            state.status = "fulfilled";
            state.posts = action.payload;
        },
        [updatePost.pending]: (state) => {
            state.status = "Loading";
            state.error = null;
        },
        [updatePost.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [updatePost.fulfilled]: (state) => {
            state.status = "fulfilled";
        },
    }
});

export default postsSlice.reducer;