import React, { Fragment, useState } from 'react';



const BaseScreen = (props) =>{
    //variables
    const [valor, setValor] = useState('');

    //metodos
    const handleNombrefuncion = event => {
        console.log(valor);
     };


  return (
    <Fragment>

    </Fragment>
  );
}
export default BaseScreen;