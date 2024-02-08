
import React from 'react'
import { Menu } from './components/menu/Menu'

export const Profile = () => {
  return (
    <div className='container'>
 <div className='row mt-5'>
    <div>
        <Menu/>
    </div>
        <div className="col-sm-12 col-md-6">
    <h3>Datos Personales</h3>
        </div>

        <div className="col-sm-12 col-md-6">
    <h3>Formulario</h3>
        </div>

    </div>
    </div>
   
  )
}
