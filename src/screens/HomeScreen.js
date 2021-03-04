import React, { Fragment, useState } from 'react';

const HomeScreen = (props) =>{
    //variables
    const [valor, setValor] = useState('');

    //metodos
    const handleNombrefuncion = event => {
        console.log(valor);
     };


  return (
    <Fragment>
        <h1>HOME</h1>
    </Fragment>
  );
}
export default HomeScreen;