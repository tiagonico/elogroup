import React from 'react';
import './verLeads.css'
import { TextField, Grid, AppBar, Toolbar, Container, Paper, Button } from '@material-ui/core'

class VerLeads extends React.Component {
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
                            <h2>Painel de Leads</h2>
                        </Grid>
                    </Grid>

                    <Grid>

                        <a href="/novoLead" >
                            <Button class="MuiButton-root botaoRegistrar" >Novo Lead</Button>
                        </a>

                    </Grid>

                </Paper>
            </Container >


        )
    }
}
export default VerLeads