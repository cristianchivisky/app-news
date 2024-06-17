import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const NoticiasContext = createContext() // Crea el contexto para noticias

const NoticiasProvider = ({ children }) => {
    const [categoria, setCategoria] = useState('general')
    const [noticias, setNoticias] = useState([])
    const[ pagina, setPagina] = useState(1)
    const[ totalNoticias, setTotalNoticias] = useState(0)

    // Consulta la API cuando cambia la categoría
    useEffect(() => {
        const consultarApi = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
    
            const { data } = await axios(url)
            setNoticias(data.articles) // Almacena las noticias obtenidas
            console.log(data)
            setTotalNoticias(data.totalResults) // Almacena el total de resultados
            setPagina(1) // Resetea la página a 1
        }
        consultarApi()
    },[categoria])

    // Consulta la API cuando cambia la página o la categoría
    useEffect(() => {
        const consultarApi = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}&page=${pagina}`
    
            const { data } = await axios(url)
            setNoticias(data.articles)
            console.log(data)
            setTotalNoticias(data.totalResults)
        }
        consultarApi()
    }, [pagina, categoria])

    // Actualiza la categoría
    const handleChangeCategoria = e => {
        setCategoria(e.target.value)
    }

    // Actualiza la página
    const handleChangePagina = (e, valor) => {
        setPagina(valor)
    }

    return ( 
        <NoticiasContext.Provider
            value={{
                categoria,
                noticias,
                totalNoticias,
                pagina,
                handleChangeCategoria,
                handleChangePagina
            }}
        >
            {children} {/* Renderiza los componentes hijos */}
        </NoticiasContext.Provider>
     );
}
 
export {
    NoticiasProvider
} 

export default NoticiasContext;
    