import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<nav>
			<ul className="pagination d-flex justify-content-center">
				{pageNumbers.map((number) => (
					<li key={number} className="page-item">
						<a href="!#" className="page-link" onClick={() => paginate(number)}>
							{number}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
