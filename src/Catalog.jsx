import { useBookStore } from "./data/store"

const Catalog = () => {
	const books = useBookStore(state => state.books)
	const toggleStar = useBookStore(state => state.toggleStar)

	return (
		<div className="catalog">
			{books.map(b => (
				<div className="book" key={b.id}>
					"{b.title}", {b.author}
					<div className="star"
						data-testid={'star-'+b.title}
						role="button"
						onClick={() => toggleStar(b)}
						>⭐</div>
				</div>
			))}
		</div>
	)
}
export default Catalog
