import { useState } from "react"
import { useBookStore } from "./data/store"

const Add = () => {
	const [form, setForm] = useState({ title: '', author: '' })
	const addBook = useBookStore(state => state.addBook)

	const handleSubmit = () => {
		addBook(form)
		setForm({ title: '', author: '' })
	}

	return (
		<div className="form">
			<label> Titel </label>
			<input type="text"
				data-testid="add-input-title"
				onChange={e => setForm({ ...form, title: e.target.value })}
				value={form.title}
				/>

			<label> Författare </label>
			<input type="text"
				data-testid="add-input-author"
				onChange={e => setForm({ ...form, author: e.target.value })}
				value={form.author}
				/>

			<button type="submit"
				data-testid="add-submit"
				disabled={!form.title || !form.author}
				onClick={handleSubmit}
				> Lägg till ny bok </button>
		</div>
	)
}
export default Add
