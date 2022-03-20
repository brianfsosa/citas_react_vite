import Paciente from './Paciente'
function ListadoPacientes({pacientes, setPaciente, eliminarPaciente}) {

    
  return (
    <div className='md:w-1/2 lg:w-3/5 '>

        {pacientes && pacientes.length ? 
        <>
            <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
            <p className='text-xl mt-5 mb-9 text-center'>
                Administra tus {''}
                <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
            </p>
            <div className='md:h-screen overflow-y-scroll mt-0 pt-0'>
                
                    {pacientes.map((paciente) => (
                    <Paciente paciente={paciente} setPaciente ={setPaciente} key={paciente.id} eliminarPaciente={eliminarPaciente}></Paciente>
                ))}
            </div>

      </>:
      <>
        <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
      <p className='text-xl mt-5 mb-9 text-center'>
          Comienza a agregar tus {''}
          <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
      </p>
      </>
      }
      
      
        
    </div>
  )
}

export default ListadoPacientes
