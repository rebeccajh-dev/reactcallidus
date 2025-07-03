import "./App.css"
import Topo from "./components/Topo";
import Rodape from "./components/Rodape";
import Livro from "./components/Livro"
import Frontend from "./components/Frontend";
import Programação from "./components/Programação";
import Design from "./components/Design";
import Catalogo from "./components/Catalogo";
import NotFound from "./components/NotFound";
import Home from "./components/Home"
import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes, useParams } from "react-router-dom";

//componente para manipular a rota do livro
const LivroRouteHandler = ({livros}) => {
  const {livroSlug} = useParams();
  const livro = livros.find(l => l.slug === livroSlug);

  if(!livro) return <NotFound/>;

  return <Livro livro={livro}/>
};

const App = () => {
  const [livros, setLivros] = useState([]);
  const[erro, setErros] = useState(null);

  useEffect(() => {
    const carregarLivros = async () => {
      try{
        const response = await axios.get("/api/todosOsLivros.json");
        setLivros(response.data);
      }catch(error){
        console.error("Erro ao carregar livros:", error);
        setErros("Falha ao carregar os çivros. Tente novamente masi tarde!");
      }
    };
    carregarLivros();
    },[]);

  return (
    <>
      <Topo />
      <main className="principal">
        {erro && <p className="erro">{erro}</p>}
        <Routes>
          <Route path="/" element={<Home livros={livros}/>}/>
          <Route path="/frontend" element={<Frontend livros={livros}/>}/>
          <Route path="/programação" element={<Programação livros={livros}/>}/>
          <Route path="/design" element={<Design livros={livros}/>}/>
          <Route path="/catalago" element={<Catálogo livros={livros}/>}/>
          <Route path="/livro/:livrosSlug"
            element={<LivroRouteHandler livros = {livros}/>}
            />
            <Route path="/notfound" element={<NotFound/>}/>
        </Routes>
      </main>
      <Rodape />
    </>
  );
}

export default App;
