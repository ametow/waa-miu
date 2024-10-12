import {useEffect, useState} from "react";
import avatar from './images/bozai.png'
import {Post} from "./App";

const user = {
    uid: '30009257',
    avatar,
    uname: 'John',
}

const tabsConst = [
    {type: 'hot', text: 'Top', active: true},
    {type: 'newest', text: 'Newest', active: false},
]

export default function useComments() {
    const [tabs, setTabs] = useState(tabsConst);
    const [list, setList] = useState<Post[]>([]);
    const [post, setPost] = useState('');

    const fetchPosts = async () => {
        const response = await fetch('http://localhost:3001/posts');
        const data:Post[] = await response.json();
        setList(data.sort((a, b) => b.like - a.like));
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    function toggleNav(v: string) {
        const newTabs = tabs.map((tab) => {
            tab.active = tab.type === v;
            return tab;
        });
        setTabs(newTabs);
        setList(list.sort((a, b) => {
            if (v === 'hot') {
                return b.like - a.like;
            } else {
                return new Date(b.ctime).getTime() - new Date(a.ctime).getTime();
            }
        }));
    }

    function deletePost(rpid: number) {
        const newList = list.filter((item) => item.rpid !== rpid);
        setList(newList);
    }

    function createPost() {
        const newPost:Post = {
            rpid: list.length + 1,
            user: user,
            content: post,
            ctime: new Date().toLocaleString(),
            like: 0,
        }
        const newList = [newPost, ...list];
        setList(newList);
        setPost('');
    }

    return {
        tabs,
        list,
        post,
        setPost,
        fetchPosts,
        setList,
        toggleNav,
        deletePost,
        createPost,
        user,
    }
}