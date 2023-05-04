export const ListOfMotor = ({motores}) => {

    const handleClick = id =>{
        location.href = `/motor/${id}`
    }

    return (
      <ul className='motor__container'>
          {motores.map(motor=>(
            <li key={motor.id}>
                <div className='info'>
                    <div>
                        <p><strong>N. de placa:</strong></p>
                        <p>{motor.num_placa}</p>
                    </div>
                    <div>
                        <p><strong>N. Int. Empresa:</strong></p>
                        <p>{motor.num_int_empresa}</p>
                    </div>
                    <button onClick={()=>handleClick(motor.id)} className='btn-ver'>Ver</button>
                </div>
                <hr />
            </li> 
          ))}
      </ul> 
    )
  }
  