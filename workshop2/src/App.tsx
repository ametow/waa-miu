import React, {useEffect} from 'react';
import Card from "./components/Card";
import {fetchUsers} from "./api/service/github";
import User from "./types/user.type";

function App() {
    const [search, setSearch] = React.useState('');
    const [users, setUsers] = React.useState<User[]>([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (search !== '') {
                fetchUsers(search).then(res => {
                    setUsers(res.data.items);
                });
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [search])

    return (
        <div className="container">
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input
                        type="text"
                        placeholder="enter the name you search"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    &nbsp;
                    <button>Search</button>
                </div>
            </section>
            <div className="row">
                {users.map(user =>
                    <Card
                        key={user.id}
                        href={user.html_url}
                        avatar={user.avatar_url}
                        title={user.login}
                    />)}
            </div>
        </div>
    );
}

export default App;
