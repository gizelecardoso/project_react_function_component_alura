import React from 'react';
import {TextField, Button, Switch, FormControlLabel} from "@material-ui/core";

function FormularioCadastro (){
  return (
    <form>
      <TextField id="nome" label="Nome" variant="outlined" fullWidth margin="normal"/>
      <TextField id="sobrenome" label="Sobrenome" variant="outlined" fullWidth margin="normal"/>
      <TextField id="cpf" label="CPF" variant="outlined" fullWidth margin="normal"/>

      <FormControlLabel 
        label="promoções" 
        control={<Switch name="promocoes" defaultChecked color="primary"></Switch>}
      />

      <FormControlLabel 
        label="novidades" 
        control={<Switch name="novidades" defaultChecked color="primary"></Switch>}
      />
      
      <Button variant="contained" color="primary">
        Cadastrar
      </Button>

    </form>
  )
}
 
export default FormularioCadastro;