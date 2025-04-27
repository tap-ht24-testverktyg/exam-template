import { create } from "zustand";
import { funnyBooks } from "./initial";
import { listToggle, makeId } from "./utils";
// import { produce } from "immer";

const useBookStore = create(set => ({
	books: funnyBooks,
	myList: [],

	addBook: (book) => set(state => ({
		books: [ ...state.books, {
			id: makeId(state.books),
			title: book.title,
			author: book.author
		}]
	})),

	toggleStar: book => set(state => ({
		myList: listToggle(state.myList, book)
	}))
}))


export { useBookStore }
