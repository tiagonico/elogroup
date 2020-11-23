import React from 'react';
import './home.css'
import { TextField, Grid, AppBar, Toolbar, Container, Paper, Button, FormControl } from '@material-ui/core'



class Home extends React.Component {

    routeChange = () => {
        var regularExpression = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
        var senha = document.getElementById("textSenha").value
        var confirmaSenha = document.getElementById("textConfirmaSenha").value

        if (senha !== confirmaSenha) {
            alert("A confirmação da senha deve ser igual a senha.")

        }
        else if (!regularExpression.test(senha)) {
            alert("A senha deve conter pelo menos uma letra, um número, um caracter especial e no mínimo 8 dígitos.")

        }
        else {
            this.props.history.push("./verLeads");
        }
        
    }

    render() {

        return (

            <Container className="my-container">
                <Paper className="my-paper">

                    <Grid>
                        <AppBar position="static">
                            <Toolbar className="barra">

                                <img className="logo" src="https://elogroup.com.br/wp-content/uploads/2020/09/logo-EloGroup-branco.png" alt="logo"></img>
                            </Toolbar>
                        </AppBar>
                    </Grid>
                    <form name="form1" id="form1">
                        <Grid className="my-margin-top30-bottom30">
                            <Grid>
                                <TextField required className="inputRegistrar" id="textUsuario" name="textUsuario" label="Usuário" />
                            </Grid>
                            <Grid>
                                <TextField type="password" required className="inputRegistrar" id="textSenha" name="textSenha" label="Password" />
                            </Grid>
                            <Grid>
                                <TextField type="password" required className="inputRegistrar" id="textConfirmaSenha" name="textConfirmaSenha" label="Confirmação Password" />
                            </Grid>
                        </Grid>

                        <FormControl>
                            <Button href="#" variant="contained" color="primary" onClick={this.routeChange} type="submit" id="my-input">Registrar</Button>
                        </FormControl>
                    </form>

                </Paper>
            </Container >


        )
    }
}
export default Home