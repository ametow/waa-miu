import './App.scss'
import avatar from './images/bozai.png'
import {useEffect, useState} from "react";


// Comment List data
const defaultList = [
    {
        // comment id
        rpid: 3,
        // user info
        user: {
            uid: '13258165',
            avatar: '',
            uname: 'Jay Zhou',
        },
        // comment content
        content: 'Nice, well done',
        // created datetime
        ctime: '10-18 08:15',
        like: 88,
    },
    {
        rpid: 2,
        user: {
            uid: '36080105',
            avatar: '',
            uname: 'Song Xu',
        },
        content: 'I search for you thousands of times, from dawn till dusk.',
        ctime: '11-13 11:29',
        like: 88,
    },
    {
        rpid: 1,
        user: {
            uid: '30009257',
            avatar,
            uname: 'John',
        },
        content: 'I told my computer I needed a break... now it will not stop sending me vacation ads.',
        ctime: '10-19 09:00',
        like: 66,
    },
]
// current logged in user info
const user = {
    // userid
    uid: '30009257',
    // profile
    avatar,
    // username
    uname: 'John',
}

// Nav Tab
const tabs = [
    {type: 'hot', text: 'Top', active: true},
    {type: 'newest', text: 'Newest', active: false},
]

type Post = {
    rpid: number,
    user: {
        uid: string,
        avatar: string,
        uname: string,
    },
    content: string,
    ctime: string,
    like: number,
}

const App = () => {
    const [mytabs, setmytabs] = useState(tabs);
    const [list, setList] = useState<Post[]>([]);
    const [post, setPost] = useState('');

    async function fetchPosts(){
        const response = await fetch('http://localhost:3001/posts');
        const data:Post[] = await response.json();
        setList(data.sort((a, b) => b.like - a.like));
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    function toggleNav(v: string) {
        const newTabs = mytabs.map((tab) => {
            tab.active = tab.type === v;
            return tab;
        });
        setmytabs(newTabs);
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

    return (
        <div className="app">
            {/* Nav Tab */}
            <div className="reply-navigation">
                <ul className="nav-bar">
                    <li className="nav-title">
                        <span className="nav-title-text">Comments</span>
                        {/* Like */}
                        <span className="total-reply">{list.length}</span>
                    </li>
                    <li className="nav-sort">
                        {mytabs.map((tab) => {
                            return (
                                <span
                                    key={tab.type}
                                    className={`nav-item ${tab.active ? 'active' : ''}`}
                                    onClick={() => toggleNav(tab.type)}
                                >
                    {tab.text}
                    </span>)
                        })}
                    </li>
                </ul>
            </div>

            <div className="reply-wrap">
                {/* comments */}
                <div className="box-normal">
                    {/* current logged in user profile */}
                    <div className="reply-box-avatar">
                        <div className="bili-avatar">
                            <img className="bili-avatar-img" src={user.avatar} alt="Profile"/>
                        </div>
                    </div>
                    <div className="reply-box-wrap">
                        {/* comment */}
                        <textarea
                            value={post}
                            onChange={(e) => setPost(e.target.value)}
                            className="reply-box-textarea"
                            placeholder="tell something..."
                        />
                        {/* post button */}
                        <div className="reply-box-send" onClick={createPost}>
                            <div className="send-text">post</div>
                        </div>
                    </div>
                </div>
                {/* comment list */}
                {list.map((item) => {
                    return (
                        <div className="reply-list" key={item.rpid}>
                            {/* comment item */}
                            <div className="reply-item">
                                {/* profile */}
                                <div className="root-reply-avatar">
                                    <div className="bili-avatar">
                                        <img
                                            className="bili-avatar-img"
                                            src={item.user.avatar}
                                            alt=""
                                        />
                                    </div>
                                </div>

                                <div className="content-wrap">
                                    {/* username */}
                                    <div className="user-info">
                                        <div className="user-name">{item.user.uname}</div>
                                    </div>
                                    {/* comment content */}
                                    <div className="root-reply">
                                        <span className="reply-content">{item.content}</span>
                                        <div className="reply-info">
                                            {/* comment created time */}
                                            <span className="reply-time">{item.ctime}</span>
                                            {/* total likes */}
                                            <span className="reply-time">Like:{item.like}</span>
                                            <span className="delete-btn" onClick={() => deletePost(item.rpid)}>Delete</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default App