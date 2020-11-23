import React from 'react';
import './home.css'
import { TextField, Grid, AppBar, Toolbar, Container, Paper, Button,FormControl} from '@material-ui/core'
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

class Home extends React.Component {

    
    
    render() {

        function verificaCampos() {

            var regularExpression = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
            var senha = document.getElementById("textSenha").value
            var confirmaSenha = document.getElementById("textConfirmaSenha").value

            if(senha !== confirmaSenha){
                alert("A confirmação da senha deve ser igual a senha.")
                return false;
            }
            else if(!regularExpression.test(senha)){
                alert("A senha deve conter pelo menos uma letra, um número, um caracter especial e no mínimo 8 dígitos.")
                return false;
            }
            

        }

        return (

            <Container className="my-container">
                <Paper className="my-paper">

                    <Grid>
                        <AppBar position="static">
                            <Toolbar class="barra">

                                <img class="logo" src="https://elogroup.com.br/wp-content/uploads/2020/09/logo-EloGroup-branco.png" alt="logo"></img>
                            </Toolbar>
                        </AppBar>
                    </Grid>
                    <form action="./verLeads" name="form1" id="form1">
                        <Grid>



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
                            <Button onClick={verificaCampos} type="submit" id="my-input" class="MuiButton-root botaoRegistrar">Registrar</Button>
                        </FormControl>
                    </form>

                </Paper>
            </Container >


        )
    }
}
export default Home