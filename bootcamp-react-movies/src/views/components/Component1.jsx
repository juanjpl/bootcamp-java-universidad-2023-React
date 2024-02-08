
import React, { useEffect } from 'react'
import { AppContextProvider } from '../context/ViewContext'
import { Component2 } from './Component2'
import { Component3 } from './Component3'
import { useNavigate } from 'react-router-dom'

export const Component1 = () => {

  const history = useNavigate();

  useEffect(() => {
  
  
   setTimeout(()=>{
    //history('/home')
   },2000)
  }, [])
  
  return (
    <div>
        <AppContextProvider>
            <Component2/>
            <Component3/>
        </AppContextProvider>
    </div>
  )
}
