/* eslint-disable react/jsx-no-undef */
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import {Box} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToken } from "../../../store/tokens/Actions";
import { TokenState } from "../../../store/tokens/TokensReducer";
import {toast} from "react-toastify";

function Navbar () {

    const token = useSelector<TokenState, TokenState ["tokens"]>(
        (state) => state.tokens
    );
    const dispatch = useDispatch();
    let navgate=useNavigate();

    function goLogout(){
        dispatch(addToken(""));
        toast.info("Usuário deslogado", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navgate("/login")
    }

    var navbarComponent;

    if(token != ""){
        navbarComponent = <AppBar position="static">
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
    }

    return(
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;