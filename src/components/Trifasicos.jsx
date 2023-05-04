import React, { useState } from 'react'
import '../css/Trifasicos.css'
import { TextField } from '@mui/material'
import Axios from 'axios'
import { ListOfMotor } from './ListMotor'

const Trifasicos = () => {
    const [selectValue, setSelectValue] = useState('')
    const [inputValue, setInputValue] = useState('')
    const [motores, setMotores] = useState([])


    const handleChangeSelect = e =>{
        setSelectValue(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        Axios.get(`http://201.231.80.136:4000/buscar/${selectValue}/${inputValue}`)
        .then(data=> {
            setMotores(data.data)
        })
    }

  return (
    <section>
        <main>
            <form>
                <select className='form__select'defaultValue="buscar_por" onChange={handleChangeSelect}>
                    <option disabled value="buscar_por">Buscar por...</option>
                    <option value="ot">Orden de trabajo</option>
                    <option value="marca">Marca</option>
                    <option value="modelo">Modelo</option>
                    <option value="num_placa">Num. de placa</option>
                    <option value="num_int_empresa">Num. int. empresa</option>
                    <option value="hp">HP</option>
                </select>
                {
                    selectValue != ''
                    ? <TextField onChange={e=>setInputValue(e.target.value)} className='input' id="outlined-basic" variant="outlined" type="text" name={selectValue} label={`Ingrese dato`} required/>
                    : null
                }
                <button type='submit' style={{cursor:inputValue != '' ? 'pointer' : 'not-allowed', backgroundColor:inputValue != '' ? 'black' : 'gray'}} disabled={inputValue != '' ? false : true} onClick={handleSubmit}>Buscar</button>
            </form>

            <section className='lista'>
                <ListOfMotor motores={motores}/>
            </section>
        </main>
    </section>
  )
}

export default Trifasicos