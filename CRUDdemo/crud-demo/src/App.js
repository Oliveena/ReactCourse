import { useState } from 'react';
import './App.css';

const ACCESS_KEY = 'yv_vh-Or9IZ7vdAem57C-ja_QajfhlAnal1DZ3dTLuc'; 

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [noData, setNoData] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}`
    );

    const data = await response.json();

    if (data.results.length === 0) {
      setNoData(true);
      setImages([]);
    } else {
      setNoData(false);
      setImages(data.results);
    }
  };

  return (
    <div className="App">
      <h2>Search Unsplash Photos</h2>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search for photos..."
        />
        <button type="submit">Search</button>
      </form>

      {noData && <p>No data found</p>}

      <div className="image-grid">
        {images.map((img) => (
          <img
            key={img.id}
            src={img.urls.thumb}
            alt={img.alt_description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
