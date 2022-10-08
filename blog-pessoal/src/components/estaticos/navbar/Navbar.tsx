/* eslint-disable react/jsx-no-undef */
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import {Box} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";

function Navbar () {

    const [token,setToken] = useLocalStorage("token")
    let navgate=useNavigate();

    function goLogout(){
        setToken("")
        alert("Usuário deslogado")
        navgate("/login")
    }

    return(
        <>
        <AppBar position="static">
                <Toolbar variant="dense">
                    <Box className="cursor" >
                        <Typography variant="h5" color="inherit"> Blog Pessoal </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Link to="/home" className="text-decorator-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit"> Tela Inicial </Typography>
                            </Box>
                        </Link>
                        <Link to="/postagem" className="text-decorator-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit"> Postagens </Typography>
                            </Box>
                        </Link>
                        <Link to="/temas" className="text-decorator-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit"> Temas </Typography>
                            </Box>
                        </Link>
                        <Link to="/fotmularioTema" className="text-decorator-none">
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit"> Cadastrar Tema </Typography>
                        </Box>
                        </Link>
                        
                        <Box mx={1} className="cursor" onClick={goLogout}>
                            <Typography variant="h6" color="inherit" > Logout </Typography>
                        </Box>
                        
                        
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;