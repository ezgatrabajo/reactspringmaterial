import React, { Fragment, useState } from 'react';

const ProductosScreen = (props) =>{
    //variables
    const [valor, setValor] = useState('');

    //metodos
    const handleNombrefuncion = event => {
        console.log(valor);
     };


  return (
    <Fragment>
        <h1>Productos</h1>
    </Fragment>
  );
}
export default ProductosScreen;