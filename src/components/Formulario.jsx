import { FormControl, InputLabel, Select, MenuItem } from  '@mui/material'
import useNoticias from '../hooks/useNoticias';

const CATEGORIAS = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Business' },
    { value: 'entertainment', label: 'Entertainment'},
    { value: 'health', label: 'Health'},
    { value: 'sports', label: 'Sports'},
    { value: 'technology', label: 'Technology'},
    { value: 'science', label: 'Science'},
 ]

const Formulario = () => {
    const { categoria, handleChangeCategoria } = useNoticias()

    return (
        <>
            <form >
                <FormControl 
                    size="small"
                    style={{ width: '200px' }}
                    sx={{mb: { xs: 1, sm: 1 },
                        '& .MuiInputLabel-root': { color: 'white' },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'white',
                            },
                            '&:hover fieldset': {
                                borderColor: 'white',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'white',
                            },
                        },
                        '& .MuiInputBase-input': {
                            color: 'white',
                        },
                        '& .MuiSvgIcon-root': {
                            color: 'white',
                        },
                    }}
                >
                    <InputLabel size="small">Catagory</InputLabel>
                    <Select
                    label='Category'
                    size="small"
                    onChange={handleChangeCategoria}
                    value={categoria}
                    >
                    {
                        CATEGORIAS.map( categoria => (
                            <MenuItem 
                            key={categoria.value} 
                            value={categoria.value}
                            >
                            {categoria.label}
                            </MenuItem>
                        ))
                    }
                    </Select>
                </FormControl>
            </form>
        </>
     );
}
 
export default Formulario;
