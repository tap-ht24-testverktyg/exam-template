import { useBookStore } from "./data/store"

const Catalog = () => {
	const books = useBookStore(state => state.books)
	const toggleStar = useBookStore(state => state.toggleStar)

	return (
		<div className="catalog">
			{books.map(b => (
				<div className="book" key={b.id}>
					{b.title}, {b.author}
					<button onClick={() => toggleStar(b)}>⭐</button>
				</div>
			))}
		</div>
	)
}
export default Catalog
