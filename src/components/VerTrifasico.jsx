import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import swal from 'sweetalert'
import { TextField } from '@mui/material'

const VerTrifasico = () => {
    const url = window.location.href;
    const prueba = url.split('/')
    const id = prueba.pop()

    const [data, setData] = useState([])

    const [fecha, setFecha] = useState('');
    const [ot, setOt] = useState('');
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [tipo, setTipo] = useState('');
    const [num_placa, setNumplaca] = useState('');
    const [num_int_empresa, setNumIntEmpresa] =useState('');
    const [hp, setHp] = useState('');
    const [kw, setKw] = useState('');
    const [kw_v, setKwV] = useState('');
    const [kw_i, setKwI] = useState('');
    const [frec, setFrec] = useState('');
    const [rpm, setRpm] = useState('');
    const [clase_term, setClaseTerm] = useState('');
    const [observ, setObserv] =useState('');
    const [peso,setPeso] = useState('');
    const [color, setColor] = useState('');
    const [anio,setAnio] = useState('');
    const [con_bornera,setConBornera] = useState('');
    const [con_bobinas,setConBobinas] = useState('');
    const [cant_grupos, setCantGrupos] = useState('');
    const [num_bobinas_serie, setNumBobSerie] = useState('');
    const [paso,setPaso] = useState('');
    const [num_espiras, setNumEspiras] = useState('');
    const [cant_alambres, setCantAlambres] = useState('');
    const [diam_conduct, setDiamConduct] =useState('');
    const [peso_cu, setPesoCu] = useState('');
    const [abert_molde, setAbertMolde] =useState('');
    const [ranuras, setRanuras] = useState('');
    const [largo_cab_conex, setLargoCabConex] =useState('');
    const [largo_cab_op, setLargoCabOp] = useState('');
    const [lado_salida_conex, setLadoSalidaConex] = useState('');
    const [lado_bornera, setLadoBornera] = useState('');
    const [largo_nucleo,setLargoNucleo] = useState('');
    const [largo_culata, setLargoCulata] = useState('');
    const [diam_nucleo,setDiamNucleo] = useState('');
    const [tipo_aislac, setTipoAislac] = useState('');
    const [espesor, setEspesor] = useState('');
    const [res_fases_uv, setResFAsesUV] = useState('');
    const [res_fases_vw, setResFAsesVW] = useState('');
    const [res_fases_wu, setResFAsesWU] = useState('');
    const [fecha_reparacion, setFechaReparacion] = useState('');
    const [nombre,setNombre] = useState('');
    const [ventilador,setVentilador] = useState('');
    const [eje,setEje] = useState('');
    const [ext, setExt] = useState('');
    const [rodam_acc, setRodamACC] = useState('');
    const [rodam_op, setRodamOP] = useState('');
    const [consumo_vacio, setConsumoVacio] = useState('')
    const [megado_masa_uv, setMegadoMasaUV] = useState('')
    const [megado_masa_vw, setMegadoMasaVW] = useState('')
    const [megado_masa_wu, setMegadoMasaWU] = useState('')
    const [observ_reforma, setObservReforma] = useState('')

    useEffect(()=>{
        Axios.get(`http://201.231.80.136:4000/ver/${id}`)
        .then(data=>{
            setData(data.data)
            let fecha = data.data[0].fecha
            let fechaBien = fecha.split('T')[0]
            setFecha(fechaBien)
            setOt(data.data[0].ot)
            setMarca(data.data[0].marca)
            setModelo(data.data[0].modelo)
            setTipo(data.data[0].tipo)
            setNumplaca(data.data[0].num_placa)
            setNumIntEmpresa(data.data[0].num_int_empresa)
            setHp(data.data[0].hp)
            setKw(data.data[0].kw)
            setKwV(data.data[0].kw_v)
            setKwI(data.data[0].kw_i)
            setFrec(data.data[0].frec)
            setRpm(data.data[0].rpm)
            setClaseTerm(data.data[0].clase_term)
            setObserv(data.data[0].observ)
            setPeso(data.data[0].peso)
            setColor(data.data[0].color)
            setAnio(data.data[0].anio)
            setConBornera(data.data[0].con_bornera)
            setConBobinas(data.data[0].con_bobinas)
            setCantGrupos(data.data[0].cant_grupos)
            setNumBobSerie(data.data[0].num_bobinas_serie)
            setPaso(data.data[0].paso)
            setNumEspiras(data.data[0].num_espiras)
            setCantAlambres(data.data[0].cant_alambres)
            setDiamConduct(data.data[0].diam_conduct)
            setPesoCu(data.data[0].peso_cu)
            setAbertMolde(data.data[0].abert_molde)
            setRanuras(data.data[0].ranuras)
            setLargoCabConex(data.data[0].largo_cab_conex)
            setLargoCabOp(data.data[0].largo_cab_op)
            setLadoSalidaConex(data.data[0].lado_salida_conex)
            setLadoBornera(data.data[0].lado_bornera)
            setLargoNucleo(data.data[0].largo_nucleo)
            setLargoCulata(data.data[0].largo_culata)
            setDiamNucleo(data.data[0].diam_nucleo)
            setTipoAislac(data.data[0].tipo_aislac)
            setEspesor(data.data[0].espesor)
            setResFAsesUV(data.data[0].res_fases_uv)
            setResFAsesVW(data.data[0].res_fases_vw)
            setResFAsesWU(data.data[0].res_fases_wu)
            let fechaReparacion = data.data[0].fecha_reparacion;
            let fechaReparacionBien = fechaReparacion.split('T')[0]
            setFechaReparacion(fechaReparacionBien)
            setNombre(data.data[0].nombre)
            setVentilador(data.data[0].ventilador)
            setEje(data.data[0].eje)
            setExt(data.data[0].ext)
            setRodamACC(data.data[0].rodam_acc)
            setRodamOP(data.data[0].rodam_op)
            setConsumoVacio(data.data[0].consumo_vacio)
            setMegadoMasaUV(data.data[0].megado_masa_uv)
            setMegadoMasaVW(data.data[0].res_fases_vw)
            setMegadoMasaWU(data.data[0].megado_masa_wu)
            setObservReforma(data.data[0].observ_reforma)
        })
        .catch(error=>{
            if(error){
                swal({
                    title : 'Ups...',
                    text : 'Ocurrio un error al cargar el motor',
                    icon : 'error',
                    button : 'Aceptar'
                })
            }
        })
    },[id])

    const handleEdit = (e) => {
        e.preventDefault()
        
        const form = e.target;
        const formData = new FormData(form)
        let formJson = Object.fromEntries(formData.entries());
        formJson.id = id
        
        Axios.post('http://201.231.80.136:4000/editar',formJson)
        .then(respuesta=>{
            if(respuesta){
                swal({
                    title : 'Exito!',
                    text : 'Se edito correctamente',
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
                    text : 'Ocurrio un error al intentar editar el motor',
                    icon : 'error',
                    button : 'Aceptar'
                })
            }
        })
    }

    if(data.length > 0){
        return(
            <section>
                <div className='hero'>
                    <h1>VER / EDITAR</h1>
                </div>
                <form onSubmit={handleEdit}>
                    <label>
                        Fecha: <TextField onChange={e=>setFecha(e.target.value)} value={fecha} id="outlined-basic" variant="outlined" required type="date" name='fecha' className='fecha'/>
                    </label>
                    <TextField onChange={e=>setOt(e.target.value)} value={ot} id="outlined-basic" variant="outlined" required type="text" name='ot' label='OT'/>
                    <TextField onChange={e=>setMarca(e.target.value)} value={marca} id="outlined-basic" variant="outlined" required type="text" name='marca' label='Marca'/>
                    <TextField onChange={e=>setModelo(e.target.value)} value={modelo} id="outlined-basic" variant="outlined" required type="text" name='modelo' label='Modelo'/>
                    <TextField onChange={e=>setTipo(e.target.value)} value={tipo} id="outlined-basic" variant="outlined" required type="text" name='tipo' label='Tipo'/>
                    <TextField onChange={e=>setNumplaca(e.target.value)} value={num_placa} id="outlined-basic" variant="outlined" required type="text" name='num_placa' label='Num Placa'/>
                    <TextField onChange={e=>setNumIntEmpresa(e.target.value)} value={num_int_empresa} id="outlined-basic" variant="outlined" required type="text" name='num_int_empresa' label='Num Int Empresa'/>
                    <TextField onChange={e=>setHp(e.target.value)} value={hp} id="outlined-basic" variant="outlined" required type="text" name='hp' label='HP'/>
                    <TextField onChange={e=>setKw(e.target.value)} value={kw} id="outlined-basic" variant="outlined" required type="text" name='kw' label='KW'/>
                    <TextField onChange={e=>setKwV(e.target.value)} value={kw_v} id="outlined-basic" variant="outlined" required type="text" name='kw_v' label='KW_V'/>
                    <TextField onChange={e=>setKwI(e.target.value)} value={kw_i} id="outlined-basic" variant="outlined" required type="text" name='kw_i' label='KW_I'/>
                    <TextField onChange={e=>setFrec(e.target.value)} value={frec} id="outlined-basic" variant="outlined" required type="text" name='frec' label='FREC'/>
                    <TextField onChange={e=>setRpm(e.target.value)} value={rpm} id="outlined-basic" variant="outlined" required type="text" name='rpm' label='RPM'/>
                    <TextField onChange={e=>setClaseTerm(e.target.value)} value={clase_term} id="outlined-basic" variant="outlined" required type="text" name='clase_term' label='CLASE TERM'/>
                    <TextField onChange={e=>setObserv(e.target.value)} value={observ} id="outlined-basic" variant="outlined" required type="text" name='observ' label='OBSERV'/>
                    <TextField onChange={e=>setPeso(e.target.value)} value={peso} id="outlined-basic" variant="outlined" required type="text" name='peso' label='PESO'/>
                    <TextField onChange={e=>setColor(e.target.value)} value={color} id="outlined-basic" variant="outlined" required type="text" name='color'label='COLOR'/>
                    <TextField onChange={e=>setAnio(e.target.value)} value={anio} id="outlined-basic" variant="outlined" required type="text" name='anio' label='AÑO'/>
                
                    <TextField onChange={e=>setConBornera(e.target.value)} value={con_bornera} id="outlined-basic" variant="outlined" required type="text" name='con_bornera' label='Conexion en bornera'/>
                    <TextField onChange={e=>setConBobinas(e.target.value)} value={con_bobinas} id="outlined-basic" variant="outlined" required type="text" name='con_bobinas' label='Conexion de bornera'/>
                    <TextField onChange={e=>setCantGrupos(e.target.value)} value={cant_grupos} id="outlined-basic" variant="outlined" required type="text" name='cant_grupos' label='Cantidad de grupos'/>
                    <TextField onChange={e=>setNumBobSerie(e.target.value)} value={num_bobinas_serie} id="outlined-basic" variant="outlined" required type="text" name='num_bobinas_serie' label='Num de bobinas en serie'/>
                    <TextField onChange={e=>setPaso(e.target.value)} value={paso} id="outlined-basic" variant="outlined" required type="text" name='paso' label='Paso'/>
                    <TextField onChange={e=>setNumEspiras(e.target.value)} value={num_espiras} id="outlined-basic" variant="outlined" required type="text" name='num_espiras' label='Num de espiras'/>
                    <TextField onChange={e=>setCantAlambres(e.target.value)} value={cant_alambres} id="outlined-basic" variant="outlined" required type="text" name='cant_alambres' label='Cant de alambres'/>
                    <TextField onChange={e=>setDiamConduct(e.target.value)} value={diam_conduct} id="outlined-basic" variant="outlined" required type="text" name='diam_conduct' label='Diam de Conduct'/>
                    <TextField onChange={e=>setPesoCu(e.target.value)} value={peso_cu} id="outlined-basic" variant="outlined" required type="text" name='peso_cu' label='Peso del C.U'/>
                    <TextField onChange={e=>setAbertMolde(e.target.value)} value={abert_molde} id="outlined-basic" variant="outlined" required type="text" name='abert_molde' label='Abert. Molde'/>
                    <TextField onChange={e=>setRanuras(e.target.value)} value={ranuras} id="outlined-basic" variant="outlined" required type="text" name='ranuras' label='Ranuras'/>


                    <TextField onChange={e=>setLargoCabConex(e.target.value)} value={largo_cab_conex} id="outlined-basic" variant="outlined" required type="text" name='largo_cab_conex' label='Largo Cab. Conex.'/>
                    <TextField onChange={e=>setLargoCabOp(e.target.value)} value={largo_cab_op} id="outlined-basic" variant="outlined" required type="text" name='largo_cab_op' label='Largo Cab. OP'/>
                    <TextField onChange={e=>setLadoSalidaConex(e.target.value)} value={lado_salida_conex} id="outlined-basic" variant="outlined" required type="text" name='lado_salida_conex' label='Lado de salida de conex.'/>
                    <TextField onChange={e=>setLadoBornera(e.target.value)} value={lado_bornera} id="outlined-basic" variant="outlined" required type="text" name='lado_bornera' label='Lado de bornera'/>
                    <TextField onChange={e=>setLargoNucleo(e.target.value)} value={largo_nucleo} id="outlined-basic" variant="outlined" required type="text" name='largo_nucleo' label='Largo de Nucleo'/>
                    <TextField onChange={e=>setLargoCulata(e.target.value)} value={largo_culata} id="outlined-basic" variant="outlined" required type="text" name='largo_culata' label='Largo de Culata'/>
                    <TextField onChange={e=>setDiamNucleo(e.target.value)} value={diam_nucleo} id="outlined-basic" variant="outlined" required type="text" name='diam_nucleo' label='Diam. de Nucleo'/>
                    <TextField onChange={e=>setTipoAislac(e.target.value)} value={tipo_aislac} id="outlined-basic" variant="outlined" required type="text" name='tipo_aislac' label='Tipo AISLAC'/>
                    <TextField onChange={e=>setEspesor(e.target.value)} value={espesor} id="outlined-basic" variant="outlined" required type="text" name='espesor' label='Espesor'/>
                    <h4>Resistencia entre fases</h4>
                    <TextField onChange={e=>setResFAsesUV(e.target.value)} value={res_fases_uv} id="outlined-basic" variant="outlined" required type="text" name='res_fases_uv' label='U-V'/>
                    <TextField onChange={e=>setResFAsesVW(e.target.value)} value={res_fases_vw} id="outlined-basic" variant="outlined" required type="text" name='res_fases_vw' label='V-W'/>
                    <TextField onChange={e=>setResFAsesWU(e.target.value)} value={res_fases_wu} id="outlined-basic" variant="outlined" required type="text" name='res_fases_wu' label='W-U'/>

                    <label>
                        Fecha Reparacion: <TextField onChange={e=>setFechaReparacion(e.target.value)} value={fecha_reparacion} id="outlined-basic" variant="outlined" required type="date" name='fecha_reparacion' className='fecha'/>
                    </label>
                    
                    <TextField onChange={e=>setNombre(e.target.value)} value={nombre} id="outlined-basic" variant="outlined" required type="text" name='nombre' label='Nombre'/>
                    <TextField onChange={e=>setVentilador(e.target.value)} value={ventilador} id="outlined-basic" variant="outlined" required type="text" name='ventilador' label='Ventilador'/>
                    <TextField onChange={e=>setEje(e.target.value)} value={eje} id="outlined-basic" variant="outlined" required type="text" name='eje' label='Eje'/>
                    <TextField onChange={e=>setExt(e.target.value)} value={ext} id="outlined-basic" variant="outlined" required type="text" name='ext' label='Ext'/>
                    <TextField onChange={e=>setRodamACC(e.target.value)} value={rodam_acc} id="outlined-basic" variant="outlined" required type="text" name='rodam_acc' label='Rodam. ACC.'/>
                    <TextField onChange={e=>setRodamOP(e.target.value)} value={rodam_op} id="outlined-basic" variant="outlined" required type="text" name='rodam_op' label='Rodam. OP.'/>
                    <TextField onChange={e=>setConsumoVacio(e.target.value)} value={consumo_vacio} id="outlined-basic" variant="outlined" required type="text" name='consumo_vacio' label='Consumo en vacio'/>
                    <h4>Megado entre fases</h4>
                    <TextField onChange={e=>setMegadoMasaUV(e.target.value)} value={megado_masa_uv} id="outlined-basic" variant="outlined" required type="text" name='megado_masa_uv' label='U-V'/>
                    <TextField onChange={e=>setMegadoMasaVW(e.target.value)} value={megado_masa_vw} id="outlined-basic" variant="outlined" required type="text" name='megado_masa_vw' label='W-V'/>
                    <TextField onChange={e=>setMegadoMasaWU(e.target.value)} value={megado_masa_wu} id="outlined-basic" variant="outlined" required type="text" name='megado_masa_wu' label='W-U'/>

                    <TextField onChange={e=>setObservReforma(e.target.value)} value={observ_reforma} id="outlined-basic" variant="outlined" required type="text" name='observ_reforma' label='Observaciones/Reforma'/>
                    <button type='submit'>Editar</button>
                </form>
            </section>
        )
    }else{
        return(
            <h1>No se encontro motor</h1>
        )
    }
}

export default VerTrifasico