import React from 'react';
import './novoLead.css'
import { Grid, AppBar, Toolbar, Container, Paper, Button, TextField, TableRow, TableCell, TableHead, Table, TableBody, TableContainer, Checkbox } from '@material-ui/core'



function createData(name) {
    return { name };
}

const rows = [
    createData('RPA'),
    createData('Produto Digital'),
    createData('Analytics'),
    createData('BPM'),
];


class NovoLead extends React.Component {

    render() {

        // const headCells = [
        //     { id: 'name', numeric: false, disablePadding: true, label: 'Oportunidades' }
        // ];

        function teste() {

            var checkboxRPA = document.getElementById("RPA").checked
            var checkboxProdutoDigital = document.getElementById("Produto Digital").checked
            var checkboxAnalytics = document.getElementById("Analytics").checked
            var checkboxBPM = document.getElementById("BPM").checked
            var textNome = document.getElementById("textNome").value
            var textTelefone = document.getElementById("textTelefone").value
            var textEmail = document.getElementById("textEmail").value

            //if ()

            console.log("checkboxRPA: " + checkboxRPA)
            console.log("checkboxProdutoDigital: " + checkboxProdutoDigital)
            console.log("checkboxAnalytics: " + checkboxAnalytics)
            console.log("checkboxBPM: " + checkboxBPM)
            console.log("textNome: " + textNome)
            console.log("textTelefone: " + textTelefone)
            console.log("textEmail: " + textEmail)
        }

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
                            <h2>Novo Lead</h2>
                        </Grid>
                    </Grid>




                    <form action="./verLeads">
                        <Grid>
                            <Grid className="body-left-container my-margin-top">
                                <Grid>
                                    <TextField required className="inputRegistrar" id="textNome" name="textNome" label="Nome" />
                                </Grid>
                                <Grid>
                                    <TextField type="phone" required className="inputRegistrar" id="textTelefone" name="textTelefone" label="Telefone" />
                                </Grid>
                                <Grid>
                                    <TextField type="text" required className="inputRegistrar" id="textEmail" name="textEmail" label="Email" />
                                </Grid>

                            </Grid>

                            <Grid className="body-left-container">


                                <Grid>

                                    <TableContainer className="my-table-container">
                                        <Table className="my-table" aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell> </TableCell>
                                                    <TableCell required>Oportunidades</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {rows.map((row) => (
                                                    <TableRow key={row.name}>
                                                        <TableCell padding="checkbox">
                                                            <Checkbox
                                                                id={row.name}
                                                            // indeterminate={numSelected > 0 && numSelected < rowCount}
                                                            // checked={rowCount > 0 && numSelected === rowCount}
                                                            // onChange={onSelectAllClick}
                                                            // inputProps={{ 'aria-label': 'select all desserts' }}
                                                            />
                                                        </TableCell>
                                                        <TableCell component="th" scope="row">
                                                            {row.name}
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>

                                    <Button onClick={teste} variant="contained" color="primary" >TESTE</Button>

                                    <Button variant="contained" color="primary" type="submit" >Salvar</Button>

                                </Grid>


                            </Grid>
                        </Grid>

                    </form>


                </Paper>
            </Container >


        )
    }
}
export default NovoLead