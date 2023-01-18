import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import './App.css';

function App() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage, setPostsPerPage] = useState(10);

	useEffect(() => {
		const fetchApiPosts = async () => {
			setLoading(true);
			const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
			setPosts(res.data);
			setLoading(false);
		};
		fetchApiPosts();
	}, []);

	// get current posts
	const indexofLastPost = currentPage * postsPerPage;
	const indexofFirstPost = indexofLastPost - postsPerPage;
	const currentPosts = posts.slice(indexofFirstPost, indexofLastPost);

	const paginate = (number) => {
		setCurrentPage(number);
	};

	return (
		<div className="App">
			<Posts posts={currentPosts} loading={loading} />
			<Pagination
				postsPerPage={postsPerPage}
				totalPosts={posts.length}
				paginate={paginate}
			/>
		</div>
	);
}

export default App;
