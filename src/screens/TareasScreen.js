import React ,{useState}from "react";
import { DataGrid, GridRowsProp, GridColDef } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  },
}));


export default function TareasScreen() {
  
  const [nombre, setNombre] = React.useState("");
  const [descripcion, setDescripcion] = React.useState("");
  const shortid = require('shortid');
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  /* llamar a la api service para obtener todas las categorias */ 
  const jsonrow = {
    "id": 1,
    "nombre": "categoria1",
    "descripcion": "descripcion1",
    "_links": {
      "self": {
        "href": "http://127.0.0.1:8050/v1/categorias/1"
      },
      "categorias": {
        "href": "http://127.0.0.1:8050/v1/categorias"
      }
    }
  };

  const agregarRow = e => {
    console.log("click Agregar");
    e.preventDefault();
    if (!nombre.trim()) {
      console.log("Nombre vacio");
      return;
    }
    if (!descripcion.trim()) {
      console.log("Descripcion vacio");
      return;
    }
    
    setRows([...rows, 
      {  id: shortid.generate(),nombre, descripcion }
    ]);

    console.log(rows);
    
  };


  const [modoEdicion, setModoEdicion] = React.useState(false);
  const [id, setId] = React.useState("");

  
  const editar = item => {
    setModoEdicion(true);
    setNombre(item.nombre);
    setDescripcion(item.descripcion)
    setId(item.id);

  };

  //guradar cambios
  const editarRow = e => {
    console.log("click editar");
    e.preventDefault();
    if (!nombre.trim()) {
      console.log("Nombre vacio");
      return;
    }

    const arrayEditado = rows.map(item =>
      item.id === id ? { id, nombre, descripcion } : item
    );
    
    setRows(arrayEditado);
    setModoEdicion(false);
    setNombre("");
    setDescripcion("");
    setId("");
    
  };

  

    const onClickEditar = () => {
      //recorro los seleccionados
      
      setModoEdicion(true);
      const registro = selection;
      setNombre(registro.nombre);
      setDescripcion(registro.descripcion);
      setId(registro.id);
    };


  //-------------------------FIN CRUD ---------------------------//

    const columns= [
      { field: 'id', headerName: 'Id', width: 100 },
      { field: 'nombre', headerName: 'Nombre', width: 150 },
      { field: 'descripcion', headerName: 'Descripcion', width: 150 },
      
    
    ];
    
    

      



    const [rows, setRows] = useState([]);
    const [deletedRows, setDeletedRows] = useState([]);
 
      const [selection, setSelection] = React.useState();
      
      
      const handlePurge = () => {
        console.log("antes eliminar");
        console.log(deletedRows);
        setRows(
          rows.filter((r) => deletedRows.filter((sr) => sr.id === r.id).length < 1)
        );

      };

      const handleRowSelection = (e) => {
        console.log(e);
        console.log("ANTES");
        console.log(deletedRows);

        if (e.isSelected ===true){
          console.log("SI");
          setSelection(e.data);
          const nuevoArray = rows.filter((r) => r.id === e.data.id);
          setDeletedRows([...deletedRows, nuevoArray[0]]);

        }else{
          console.log("NO");
          setDeletedRows(deletedRows.filter((r) => r.id != e.data.id));
          
        }
        console.log("despues");
        console.log(deletedRows);
        
      };

      


  return (
  <React.Fragment>
      <Grid container className={classes.root} spacing={2} padding={1} maxWidth="sm" 
      direction="row"
      justify="center"
      alignItems="center">
     
      <Grid item xs={6}>
        <Paper className={classes.control}>
          <Grid container>
            <Grid item>
              <FormLabel>Tareas</FormLabel>
              <form className={classes.root} noValidate autoComplete="off" onSubmit={modoEdicion ? editarRow : agregarRow}>
              <h4 className="text-center">
                    Accion Actual: <span>"{modoEdicion ? "Editando Registro "+ id : "Agregar Nuevo"}"</span>
              </h4>
                  
              <TextField
                      type="text"
                      label="Ingrese Nombre"
                      onChange={e => setNombre(e.target.value)}
                      value={nombre}
                    />
              <TextField
                      type="text"
                      label="Descripcion"
                      onChange={e => setDescripcion(e.target.value)}
                      value={descripcion}
                    />
                    {modoEdicion ? (
                      <Button variant="contained" color="default" type="submit">
                        Guardar cambios
                      </Button>
                    ) : (
                      <Button variant="contained" color="default" type="submit">
                        Agregar
                      </Button>
                    )}
                    
                   
            </form>
            </Grid>
          </Grid>
        </Paper>
        </Grid>



        <Grid item xs={8}>
        <Paper className={classes.control}>
          <Grid container>
            <Grid item xs={12}>              
            <Button variant="contained" color="secondary" onClick={handlePurge}>
                  Eliminar
            </Button>
            <Button variant="contained" color="default" onClick={onClickEditar}>
              Editar
            </Button>
          </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <div style={{ height: 400, width: '100%' }}>
                <DataGrid  
                  onRowSelected={handleRowSelection}
                  rows={rows} 
                  columns={columns} 
                  pageSize={10} 
                  checkboxSelection />
              </div>
          </Grid>
        </Grid>
        </Paper>
        </Grid>




    </Grid>
    
      </React.Fragment>
  );
}
