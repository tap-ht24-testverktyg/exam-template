import { useState } from 'react'
import './App.css'
import Catalog from './Catalog'
import Favorites from './Favorites'
import Add from './Add'

const App = () => {
	const [page, setPage] = useState('-')

	let content = null
	if( page === 'cat' ) {
		content = <Catalog />
	} else if( page === 'favs' ) {
		content = <Favorites />
	} else if( page === 'add' ) {
		content = <Add />
	}
	return (
	<div className="app">
		<header>
			<h1> Läslistan </h1>
			<nav>
				<button disabled={page === 'cat'} onClick={() => setPage('cat')}> Katalog </button>
				<button disabled={page === 'add'} onClick={() => setPage('add')}> Lägg till bok </button>
				<button disabled={page === 'favs'} onClick={() => setPage('favs')}> Mina böcker </button>
			</nav>
		</header>
		<main>
			Välkommen!
			<div className="hero">
				<img src="/book-club.png" alt="Bokklubb på café" />
			</div>

			{content}
		</main>
	</div>
)}

export default App
