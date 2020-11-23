import React from 'react';
import './verLeads.css'
import {  Grid, AppBar, Toolbar, Container, Paper, Button } from '@material-ui/core'

class VerLeads extends React.Component {
    render() {
        return (

            <Container>
                <Paper className="my-paper">

                    <Grid>
                        <Grid className="header-left-container">
                            <AppBar position="static">
                                <Toolbar className="barra">

                                    <img className="logo" src="https://elogroup.com.br/wp-content/uploads/2020/09/logo-EloGroup-branco.png" alt="logo"></img>
                                </Toolbar>
                            </AppBar>
                        </Grid>
                        <Grid className="header-right-container">
                            <h2>Painel de Leads</h2>
                        </Grid>
                    </Grid>

                    <Grid>

                        
                        <Button variant="contained" color="primary" href="/novoLead" >Novo Lead</Button>

                    </Grid>

                </Paper>
            </Container >


        )
    }
}
export default VerLeads