import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {posts} from "../App";

function PostDetails() {
    const { id } = useParams();
    const post = posts.find((p) => p.id === parseInt(id!));

    if (!post) {
        return <h2>Post not found!</h2>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <Link to={`/posts/${post.id}/edit`}>Edit</Link>
        </div>
    );
}

export default PostDetails;
