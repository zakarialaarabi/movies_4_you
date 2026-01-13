import { useState, useEffect } from 'react'
import './App.css'
import Search from './components/Search'
const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method : 'GET',
  headers : {
    accept : 'application/json',
    Authorization : `Bearer ${API_KEY}`
  }
}
function App () {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [moviesList,setMoviesList] = useState([]);
  const [isLoading,setIsLoading] = useState(false);

  const fetchMovies = async() =>{
    setIsLoading(true);
    setErrorMessage('');

    try {
      const endpoint = `${API_BASE_URL}/search/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed fetching Data");
      }
      const data = await response.json();
      if (data.Response === 'false') {
        setErrorMessage (data.Error || 'failed to fetch movies');
        setMoviesList([]);
        return;
      }
      setMoviesList(data.results || []);
    } catch (error) {
      console.error(`Error fetching movies : ${error}`)
      setErrorMessage('Error fetching movies, Please try agian later.')
    }finally{
      setIsLoading(false);
    }
  };

  useEffect(()=>{
    fetchMovies();
  },[])
return (
<div>
  <main>
  <div className="pattern" />
  <header className="hero">
    <img src="../hero-img.png" alt="" />
    <h1>
      Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle
    </h1>
    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
  </header>
  <section className="all-movies">
    <h2>All Movies</h2>
    {isLoading ? (
      <p className='text-white'>Loading...</p>
    ):errorMessage ? (
      <p className='text-red-500'>{errorMessage}</p>
    ):(
      <ul>
        {moviesList.map((movie) => (
          <p key={movie.id} className="text-white">{movie.title}</p>
        ))}
      </ul>
    )}
  </section>
  <div>

  </div>
  
    

</main>

</div>
)

}
export default App
