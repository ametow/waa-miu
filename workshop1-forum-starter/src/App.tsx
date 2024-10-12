import './App.scss'
import Comment from "./Comment";
import useComments from "./useComments";


export type Post = {
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
    const {tabs, user, list, post, setPost, toggleNav, deletePost, createPost} = useComments();

    return (
        <div className="app">
            <div className="reply-navigation">
                <ul className="nav-bar">
                    <li className="nav-title">
                        <span className="nav-title-text">Comments</span>
                        <span className="total-reply">{list.length}</span>
                    </li>
                    <li className="nav-sort">
                        {tabs.map((tab) => {
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
                <div className="box-normal">
                    <div className="reply-box-avatar">
                        <div className="bili-avatar">
                            <img className="bili-avatar-img" src={user.avatar} alt="Profile"/>
                        </div>
                    </div>
                    <div className="reply-box-wrap">
                        <textarea
                            value={post}
                            onChange={(e) => setPost(e.target.value)}
                            className="reply-box-textarea"
                            placeholder="tell something..."
                        />
                        <div className="reply-box-send" onClick={createPost}>
                            <div className="send-text">post</div>
                        </div>
                    </div>
                </div>
                {list.map((item) => <Comment key={item.rpid} item={item} deletePost={deletePost}/>)}
            </div>
        </div>
    )
}

export default App