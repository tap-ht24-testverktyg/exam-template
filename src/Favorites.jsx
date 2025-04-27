import { useBookStore } from "./data/store"

const Favorites = () => {
	const stars = useBookStore(state => state.myList)

	return (
		<div className="favorites">
			{stars.length === 0
			? <p> Här kommer dina favoritböcker att visas. </p>
			: stars.map(book => (
				<div className="book" key={book.id}>
					{book.title}, {book.author}
				</div>
			))}
		</div>
	)
}
export default Favorites
