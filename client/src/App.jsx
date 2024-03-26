
import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";

function App() {
    // All Const & Hook
    const [listOfPost, setListOfPost] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/posts')
            .then((response) => {
                console.log(response.data);
                setListOfPost(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Render 

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {listOfPost.map(post => (
                    <div key={post.id} className="max-w-sm rounded overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{post.title}</div>
                            <p className="text-gray-700 text-base">
                                {post.postText}
                            </p>
                        </div>
                        <div className="px-6 py-4">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{post.username}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;

