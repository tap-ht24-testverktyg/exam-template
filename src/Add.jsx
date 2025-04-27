import { useState } from "react"
import { useBookStore } from "./data/store"

const Add = () => {
	const [form, setForm] = useState({ title: '', author: '' })
	const addBook = useBookStore(state => state.addBook)

	return (
		<div className="form">
			<label> Titel </label>
			<input type="text"
				onChange={e => setForm({ ...form, title: e.target.value })}
				/>

			<label> Författare </label>
			<input type="text"
				onChange={e => setForm({ ...form, author: e.target.value })}
				/>

			<button type="submit"
				disabled={!form.title || !form.author}
				onClick={() => addBook(form)}
				> Lägg till ny bok </button>
		</div>
	)
}
export default Add
