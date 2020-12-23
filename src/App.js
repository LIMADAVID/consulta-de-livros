import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Axios from 'axios';

function App() {

	const [book, setBook] = useState('');
	const [result, setResult] = useState([]);
	const [apiKey, setApiKey] = useState('AIzaSyB-3CNeTRvK0fvxnwnFj-Apor3A4d-d_AA');

	function handleChange(event) {
		const book = event.target.value;
		
		setBook(book);
	}

	function handleSubmit(event) {
		event.preventDefault();
		
		Axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+apiKey+"&maxResults=40")
		.then(data => {
			setResult(data.data.items);			
		})
	}

	return (
		<div className="Container">
			<h1>Consulta de livros</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<input type="text" onChange={handleChange} className="form-control mt-10" placeholder="Procurar livros" autoComplete="off" />

				</div>
				<button type="submit" className="btn btn-danger">Pesquisar</button>
			</form>

			{result.map(book => (
				<a target="_blank" href={book.volumeInfo.previewLink}>
					<img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
				</a>
			))}
		</div>
	);
}

export default App;
