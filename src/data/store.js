import { create } from "zustand";
import { funnyBooks } from "./initial";
import { produce } from "immer";

const useBookStore = create(set => ({
	books: funnyBooks,
	myList: [],

	toggleStar: book => set(state => ({
		myList: listToggle(state.myList, book)
	}))
}))

function listToggle(list, obj) {
	// console.log('listtoggle ', list, obj)
	const index = list.findIndex(x => x.id === obj.id)
	if( index < 0 ) {
		return [ ...list, obj ]
	} else {
		return list.filter(o => o.id !== obj.id)
	}
}

export { useBookStore }
