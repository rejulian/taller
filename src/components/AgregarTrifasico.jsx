import { TextField} from '@mui/material';
import React from 'react'
import Axios from 'axios'
import swal from 'sweetalert'
import '../css/App.css'

const AgregarTrifasicos = () => {

    const handleSubmit = e =>{
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form)

        const formJson = Object.fromEntries(formData.entries());

        Axios.post('http://201.231.80.136:4000/agregar',formJson)
        .then(respuesta=>{
            if(respuesta){
                swal({
                    title : 'Exito!',
                    text : 'Se agrego correctamente',
                    icon : 'success',
                    button : 'Aceptar'
                })
            } 
        }
        )
        .catch(error=>{
            if(error){
                swal({
                    title : 'Ups...',
                    text : 'Ocurrio un error al intentar guardar el motor',
                    icon : 'error',
                    button : 'Aceptar'
                })
            }
        })
    }

  return (
      <section>
        <div className='hero'>
            <h1>Agregar Motores Trifasicos</h1>
        </div>
        
        <form onSubmit={handleSubmit}>
            <label>
                Fecha: <TextField id="outlined-basic" variant="outlined" required type="date" name='fecha' className='fecha'/>
            </label>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='ot' label='OT'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='marca' label='Marca'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='modelo' label='Modelo'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='tipo' label='Tipo'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='num_placa' label='Num Placa'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='num_int_empresa' label='Num Int Empresa'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='hp' label='HP'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='kw' label='KW'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='kw_v' label='KW_V'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='kw_i' label='KW_I'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='frec' label='FREC'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='rpm' label='RPM'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='clase_term' label='CLASE TERM'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='observ' label='OBSERV'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='peso' label='PESO'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='color'label='COLOR'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='anio' label='AÑO'/>
        
            <TextField id="outlined-basic" variant="outlined" required type="text" name='con_bornera' label='Conexion en bornera'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='con_bobinas' label='Conexion de bornera'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='cant_grupos' label='Cantidad de grupos'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='num_bobinas_serie' label='Num de bobinas en serie'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='paso' label='Paso'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='num_espiras' label='Num de espiras'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='cant_alambres' label='Cant de alambres'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='diam_conduct' label='Diam de Conduct'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='peso_cu' label='Peso del C.U'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='abert_molde' label='Abert. Molde'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='ranuras' label='Ranuras'/>


            <TextField id="outlined-basic" variant="outlined" required type="text" name='largo_cab_conex' label='Largo Cab. Conex.'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='largo_cab_op' label='Largo Cab. OP'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='lado_salida_conex' label='Lado de salida de conex.'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='lado_bornera' label='Lado de bornera'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='largo_nucleo' label='Largo de Nucleo'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='largo_culata' label='Largo de Culata'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='diam_nucleo' label='Diam. de Nucleo'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='tipo_aislac' label='Tipo AISLAC'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='espesor' label='Espesor'/>
            <h4>Resistencia entre fases</h4>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='res_fases_uv' label='U-V'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='res_fases_vw' label='V-W'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='res_fases_wu' label='W-U'/>

            <label>
                Fecha Reparacion: <TextField id="outlined-basic" variant="outlined" required type="date" name='fecha_reparacion' className='fecha'/>
            </label>
            
            <TextField id="outlined-basic" variant="outlined" required type="text" name='nombre' label='Nombre'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='ventilador' label='Ventilador'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='eje' label='Eje'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='ext' label='Ext'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='rodam_acc' label='Rodam. ACC.'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='rodam_op' label='Rodam. OP.'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='consumo_vacio' label='Consumo en vacio'/>
            <h4>Megado entre fases</h4>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='megado_masa_uv' label='U-V'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='megado_masa_vw' label='W-V'/>
            <TextField id="outlined-basic" variant="outlined" required type="text" name='megado_masa_wu' label='W-U'/>

            <TextField id="outlined-basic" variant="outlined" required type="text" name='observ_reforma' label='Observaciones/Reforma'/>
            <button type='submit'>Enviar</button>

        </form>
      </section>
  )
}

export default AgregarTrifasicos