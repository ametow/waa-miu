interface PropsType {
    title: string;
    avatar: string;
    href: string;
}

export default function (props:PropsType) {
    const {title, avatar, href} = props;
    return (
        <div className="card">
            <a href={href} target="_blank">
                <img src={avatar} style={{width: '100px'}}/>
            </a>
            <p className="card-text">{title}</p>
        </div>
    );
}