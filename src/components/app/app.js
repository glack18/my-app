import React from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
import "./app.css"

const App = () => {

    const data = [
        {label: "Going to learn React!", important: false, id: "dacdvfsd"},
        {label: "This is so good!", important: false, id: "yhfhsj"},
        {label: "Я ЕБЛАН!!!!!!!!!!!!!!!! ААЗАЗААХАХХА", important: true, id: "gjdhigsi"}
    ]

    return (
    <div className="App">
        <AppHeader/>
        <div className="search-panel d-flex">
            <SearchPanel/>
            <PostStatusFilter/>
        </div>
        <PostList posts={data}/>
        <PostAddForm/>
    </div>
    )
}

export default App;