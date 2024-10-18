import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PostsList from './components/PostsList';
import PostDetails from './components/PostDetails';
import EditPost from './components/EditPost';

export const posts = [
  { id: 1, title: 'Post One', content: 'Content of Post One' },
  { id: 2, title: 'Post Two', content: 'Content of Post Two' },
  { id: 3, title: 'Post Three', content: 'Content of Post Three' },
];
function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/posts">Posts List</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/posts" element={<PostsList />} />
            <Route path="/posts/:id" element={<PostDetails />} />
            <Route path="/posts/:id/edit" element={<EditPost />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
