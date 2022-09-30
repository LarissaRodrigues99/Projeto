import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import "./Footer.css";
import LinkedInIcon from '@material-ui/icons/LinkedIn';


function Footer () {
    return(
        <>
        <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box display="flex" flexDirection="column" alignItems="center" className="box1">
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className="textos">Siga-nos nas redes sociais </Typography>
                        </Box>
                            <a href="https://www.linkedin.com/in/larissa-rodrigues-b44869181/" target="_blank">
                                <LinkedInIcon className="redes"/>
                            </a>
                        </Box>
                    <Box className="box2">
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className="textos" >© 2022 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom className="textos" align="center">brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;