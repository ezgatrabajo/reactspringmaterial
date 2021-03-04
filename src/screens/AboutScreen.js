import React, { Fragment, useState } from 'react';



const AboutScreen = (props) =>{
    //variables
    const [valor, setValor] = useState('');

    //metodos
    const handleNombrefuncion = event => {
        console.log(valor);
     };


  return (
    <Fragment>
        <h1>PAGINA</h1>
    </Fragment>
  );
}
export default AboutScreen;