import React from 'react';
import PostListItem from "../post-list-item/post-list-item";
import "./post-list.css";

const PostList = ({posts}) => {

    const elements = posts.map((item) => {
        const {id,...itemProps} = item;
        return (
            <li key={id} classNames="list-group-item">
                <PostListItem {...itemProps}/>
            </li>
        )
    })

    return (
        <div>
            <ul className="app-list-group">
                {elements}
            </ul>
        </div>
    )
}

export default PostList;