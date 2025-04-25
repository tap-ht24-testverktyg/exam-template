import { useState } from 'react'
import './App.css'
import Catalog from './Catalog'
import Favorites from './Favorites'

const App = () => {
	const [page, setPage] = useState('-')

	let content = null
	if( page === 'cat' ) {
		content = <Catalog />
	} else if( page === 'favs' ) {
		content = <Favorites />
	}
	return (
	<div className="app">
		<header>
			<h1> Läslistan </h1>
			<nav>
				<button onClick={() => setPage('cat')}> Katalog </button>
				<button onClick={() => setPage('favs')}> Mina böcker </button>
			</nav>
		</header>
		<main>
			Välkommen!

			{content}
		</main>
	</div>
)}

export default App
