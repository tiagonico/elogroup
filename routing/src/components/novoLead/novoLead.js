import React from 'react';
import './novoLead.css'
import { Grid, AppBar, Toolbar, Container, Paper, Button } from '@material-ui/core'

class NovoLead extends React.Component {
    render() {
        return (

            <Container>
                <Paper className="my-paper">


                    <Grid>
                        <Grid className="header-left-container">
                            <AppBar position="static">
                                <Toolbar class="barra">

                                    <img class="logo" src="https://elogroup.com.br/wp-content/uploads/2020/09/logo-EloGroup-branco.png" alt="logo"></img>
                                </Toolbar>
                            </AppBar>
                        </Grid>
                        <Grid className="header-right-container">
                            <h2>Novo Lead</h2>
                        </Grid>
                    </Grid>
{/* 
                     <Grid>
                        <TextField required className="inputRegistrar" id="textUsuario" name="textUsuario" label="Usuário" />
                    </Grid>
                    <Grid>
                        <TextField type="password" required className="inputRegistrar" id="textSenha" name="textSenha" label="Password" />
                    </Grid>
                    <Grid>
                        <TextField type="password" required className="inputRegistrar" id="textConfirmaSenha" name="textConfirmaSenha" label="Confirmação Password" />
                    </Grid> */}

                    <Grid> 

                        <a href="/verLeads" >
                            <Button class="MuiButton-root botaoRegistrar" >ver Leads</Button>
                        </a>

                    </Grid>
                </Paper>
            </Container >


        )
    }
}
export default NovoLead