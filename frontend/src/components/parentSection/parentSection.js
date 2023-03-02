import React from 'react'
import InputComponents from './InputComponents'
import OutputComponents from './OutputComponenets'
import NavComponent from './NavComponent'
import Result from './Result'
import "./parentStyles.css"

const InputSection = () => {
  return (
    <div >
       <NavComponent/>
        <InputComponents/>
        
        <Result/>
        <OutputComponents/>
    </div>
  )
}

export default InputSection

