import React from "react"
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import './Footer.css'

function Footer(){
    return(
        <>
        <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className= 'barra-footer'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.facebook.com" target="_blank">
                                <FacebookIcon className = 'facebook-icon'  />
                            </a>
                            <a href="https://www.github.com" target="_blank">
                                <GitHubIcon className = 'github-icon'/>
                            </a>
                            <a href="https://www.linkedin.comc" target="_blank">
                                <LinkedInIcon className = 'linkedin-icon'/>
                            </a>
                        </Box>
                    </Box>
                    <Box className = 'barra-footer-bottom'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2023 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center"></Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
export default Footer;