import { useState, useEffect } from 'react';

interface Post {
	slug: string;
	title: string;
	description: string;
	tags: string[];
}

interface LiveSearchProps {
	posts: Post[];
}

export default function LiveSearch({ posts }: LiveSearchProps) {
	const [searchQuery, setSearchQuery] = useState('');

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value);
	};

	useEffect(() => {
		const blogGrid = document.getElementById('blog-results');
		if (!blogGrid) return;

		const cards = blogGrid.querySelectorAll('.blog-card');
		const query = searchQuery.toLowerCase().trim();

		if (!query) {
			// Show all cards if no search query
			cards.forEach((card) => {
				(card as HTMLElement).style.display = 'block';
			});
			return;
		}

		// Filter cards based on search query
		cards.forEach((card) => {
			const cardElement = card as HTMLElement;
			const cardTitle = (cardElement.dataset.title || '').toLowerCase();
			const cardDescription = (cardElement.dataset.description || '').toLowerCase();
			const cardTags = (cardElement.dataset.tags || '').toLowerCase();

			const matches =
				cardTitle.includes(query) ||
				cardDescription.includes(query) ||
				cardTags.includes(query);

			cardElement.style.display = matches ? 'block' : 'none';
		});
	}, [searchQuery]);

	// Calculate filtered count
	const filteredCount = searchQuery.trim()
		? posts.filter(
				(post) => {
					const query = searchQuery.toLowerCase();
					return (
						post.title.toLowerCase().includes(query) ||
						post.description.toLowerCase().includes(query) ||
						post.tags.some((tag) => tag.toLowerCase().includes(query))
					);
				}
			).length
		: posts.length;

	return (
		<div className="live-search">
			<input
				type="text"
				placeholder="Search posts by title, description, or tags..."
				value={searchQuery}
				onChange={handleSearch}
				className="search-input"
			/>
			{searchQuery && (
				<div className="search-results-count">
					Found {filteredCount} {filteredCount === 1 ? 'post' : 'posts'}
				</div>
			)}
		</div>
	);
}
