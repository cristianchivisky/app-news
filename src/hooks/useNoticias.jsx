import { useContext } from "react";
import NoticiasContext from "../context/NoticiasProvider";

// Hook personalizado para acceder al contexto de noticias
const useNoticias = () => {
    return useContext(NoticiasContext);
}
 
export default useNoticias;