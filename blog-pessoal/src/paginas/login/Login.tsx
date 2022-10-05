import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { login} from "../../services/Service";
import { Box } from "@mui/material";
import "./Login.css";
import UserLogin from "../../models/UserLogin";

function Login(){

        let navigate = useNavigate();
    const [token, setToken] = useLocalStorage("token");
    const [userLogin, setUserLogin]= useState<UserLogin>(
        {
            id: 0,
            usuario: "",
            senha: "",
            token: ""
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
        console.log(userLogin)
    }

        useEffect(()=>{
            if(token!==""){
            navigate("/home")
            }
        }, [token])
        

        async function onSubmit(e: ChangeEvent<HTMLFormElement>){
                e.preventDefault();
                try{
                        await login(`usuarios/logar`, userLogin, setToken)
                        alert("Usuário logado com sucesso!");
                }
                catch(erro){
                    alert ("Dados do usuário inconsistentes. Erro ao logar!");

                }
        }

    return(
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Grid alignItems="center" xs={6}>
                        <Box paddingX={20}>
                            <form onSubmit={onSubmit}>
                                <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="textos"> Entrar </Typography>
                                <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}  id="usuário" label="usuário" variant="outlined" name="usuario" margin="normal" fullWidth />
                                <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="senha" label="senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth />
                                <Box marginTop={2} textAlign="center">
                                        <Button type="submit" variant="contained" color="primary">
                                            Logar
                                        </Button>
                                
                                </Box>
                            </form>
                                <Box display="flex" justifyContent="center" marginTop={2}>
                                    <Box>
                                        <Typography variant="subtitle1" gutterBottom align="center">Não tem conta? </Typography>
                                    </Box>
                                    <Link to = "/cadastrousuario">
                                    <Typography variant="subtitle1" gutterBottom align="center" style={{fontWeight:"bold"}}> cadastre-se </Typography>
                                    </Link>
                                    
                                </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6} className="imagem">

                    </Grid>
                </Grid>
    );
}

export default Login;