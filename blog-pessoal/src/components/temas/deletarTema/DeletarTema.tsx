    import React, { useEffect, useState } from 'react'
    import { Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
    import './DeletarTema.css';
    import { useNavigate, useParams } from 'react-router-dom';
    import { buscaId} from '../../../services/Service';
    import Tema from '../../../models/Tema';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { toast } from 'react-toastify';


    function DeletarTema() {
    
        let navigate=useNavigate();
        const {id} = useParams<{id: string}>();
        const token = useSelector<TokenState, TokenState["tokens"]>(
            (state)=>state.tokens
        );
        const [tema, setTema] = useState<Tema>()
    

        useEffect(() => {
            if (token === "") {
                toast.error("Você precisa estar logado", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
                navigate("/login")
        
            }
        }, [token])

        useEffect(() => {
            if(id !== undefined){
                findById(id)
            }
        }, [id])

            async function findById(id: string) {
                buscaId(`/temas/${id}`, setTema, {
                    headers: {
                    'Authorization': token
                    }
                })
            }

            function sim() {
                navigate('/temas')
                deleteId(`/temas/${id}`, {
                headers: {
                'Authorization': token
                }
                });
                toast.success("Tema deletado com sucesso", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
                    }
                    
                function nao() {
                    navigate('/temas')
                }
            
    return (
        <>
        <Box m={2}>
            <Card variant="outlined">
            <CardContent>
                <Box justifyContent="center">
                <Typography color="textSecondary" gutterBottom>
                    Deseja deletar o Tema:
                </Typography>
                <Typography color="textSecondary">
                    tema
                </Typography>
                </Box>
            </CardContent>
            <CardActions>
                <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                <Box mx={2}>
                    <Button variant="contained" className="marginLeft" size='large' color="primary">
                    Sim
                    </Button>
                </Box>
                <Box mx={2}>
                    <Button variant="contained" size='large' color="secondary">
                    Não
                    </Button>
                </Box>
                </Box>
            </CardActions>
            </Card>
        </Box>
        </>
    );
    }
    export default DeletarTema;

function deleteId(arg0: string, arg1: { headers: { Authorization: string; }; }) {
    throw new Error('Function not implemented.');
}
