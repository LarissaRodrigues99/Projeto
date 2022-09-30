/* eslint-disable react/jsx-no-undef */
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import {Box} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Navbar () {
    return(
        <>
        <AppBar position="static">
                <Toolbar variant="dense">
                    <Box className="cursor" >
                        <Typography variant="h5" color="inherit"> Blog Pessoal </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit"> Tela Inicial </Typography>
                        </Box>
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit"> Postagens </Typography>
                        </Box>
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit"> Temas </Typography>
                        </Box>
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit"> Cadastrar Tema </Typography>
                        </Box>
                        <Link to="/login" className="text-decorator-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="primary" > Logout </Typography>
                            </Box>
                        </Link>
                        
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;