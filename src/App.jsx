import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";
import CharacterList from "./components/CharacterList";
import Footer from "./components/Footer";

function App(){
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function fetchData() {  
      try {
        setLoading(true); 
        
        const response = await axios.get(`https://dragonball-api.com/api/characters?page=${page}&limit=10`);
        
        setCharacters(response.data.items); 
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Error al conectar con el servidor de Dragon Ball.");
        setLoading(false);
      }
    }

    fetchData();
  }, [page]);

  if (loading) return <div className="loading-screen">Cargando guerreros Z...</div>;
  if (error) return <div className="error-test">{error}</div>;


  return (
    <div  className="app-container">
    <div>
    <Navbar />
    <Pagination page={page} setPage={setPage} />
    <CharacterList characters={characters}/>
    </div>

      <Footer />
    </div>
    )
}

export default App;