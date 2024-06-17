import React, { useState } from 'react';
import useNoticias from '../hooks/useNoticias';
import Grid from '@mui/material/Grid';
import  Typography  from '@mui/material/Typography';
import { Pagination, Container } from '@mui/material';
import Noticias from './Noticia';
import SearchAppBar from './Navbar';

const ListadoNoticias = () => {
    const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias();
    const [filteredNoticias, setFilteredNoticias] = useState(noticias);
    const totalPaginas = Math.ceil(totalNoticias / 21); // Calcula el número total de páginas

    // Función para filtrar noticias según el término de búsqueda
    const handleSearch = (searchTerm) => {
        const filtered = noticias.filter(noticia => 
            noticia.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredNoticias(filtered);
    };

    // Actualiza las noticias filtradas
    React.useEffect(() => {
        setFilteredNoticias(noticias);
    }, [noticias]);
    
    return (  
        <>
            <SearchAppBar onSearch={handleSearch} /> {/* Barra de búsqueda */}
            <Container maxWidth="lg">
                <Typography
                    textAlign={'center'}
                    margin={5}
                    variant='h3'
                    component={'h2'}
                >
                    Latest News
                </Typography>
                <Grid container spacing={2} >
                    {filteredNoticias.map(noticia => (
                            <Noticias
                                key={noticia.url}
                                noticia={noticia}
                            /> 
                        ))}
                </Grid>
                <Pagination
                    count={totalPaginas}
                    page={pagina}
                    onChange={handleChangePagina}
                    color='primary'
                    size='large'
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '30px'
                    }}
                />
            </Container>
        </>

    );
}
 
export default ListadoNoticias;