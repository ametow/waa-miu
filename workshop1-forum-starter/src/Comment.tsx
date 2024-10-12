import { Post } from './App'

interface PropsType {
    item: Post;
    deletePost: (rpid: number) => void;
}

export default function Comment(props: PropsType) {
    const { item, deletePost } = props;
    return (
        <>
            <div className="reply-list" key={item.rpid}>
                <div className="reply-item">
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
                        <div className="user-info">
                            <div className="user-name">{item.user.uname}</div>
                        </div>
                        <div className="root-reply">
                            <span className="reply-content">{item.content}</span>
                            <div className="reply-info">
                                <span className="reply-time">{item.ctime}</span>
                                <span className="reply-time">Like:{item.like}</span>
                                <span className="delete-btn" onClick={() => deletePost(item.rpid)}>Delete</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}