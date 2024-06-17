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
    const totalPaginas = Math.ceil(totalNoticias / 21)

    const handleSearch = (searchTerm) => {
        const filtered = noticias.filter(noticia => 
            noticia.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredNoticias(filtered);
    };
    
    React.useEffect(() => {
        setFilteredNoticias(noticias);
    }, [noticias]);
    
    return (  
        <>
            <SearchAppBar onSearch={handleSearch} />
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