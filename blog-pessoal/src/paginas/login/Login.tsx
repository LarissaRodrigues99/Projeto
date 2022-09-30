import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import React from "react";
import "./Login.css";

function Login(){
    return(
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Grid alignItems="center" xs={6}>
                        <Box paddingX={20}>
                            <form>
                                <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="textos"> Entrar </Typography>
                                <TextField id="usuário" label="usuário" variant="outlined" name="usuário" margin="normal" fullWidth />
                                <TextField id="senha" label="senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth />
                                <Box marginTop={2} textAlign="center">
                                    <Link to="/home" className="text-decorator-none">
                                        <Button type="submit" variant="contained" color="primary">
                                            Logar
                                        </Button>
                                    </Link>
                                </Box>
                            </form>
                                <Box display="flex" justifyContent="center" marginTop={2}>
                                    <Box>
                                        <Typography variant="subtitle1" gutterBottom align="center">Não tem conta? </Typography>
                                    </Box>
                                    <Typography variant="subtitle1" gutterBottom align="center" style={{fontWeight:"bold"}}> cadastre-se </Typography>
                                </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6} className="imagem">

                    </Grid>
                </Grid>
    );
}

export default Login;