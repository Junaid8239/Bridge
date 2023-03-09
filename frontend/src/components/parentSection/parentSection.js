import React from 'react'
import InputComponents from './InputComponents'
import OutputComponents from './OutputComponenets'
import NavComponent from './NavComponent'
import Result from './Result'
import data_img from './1_input_data.jpg'
import data_img1 from './2_effective.png'
import data_img2 from './3_bending.png'
import data_img3 from './4_livebending.png'
import data_img4 from './5_load.jpg'
import data_img5 from './6_shear.jpg'
import data_img6 from './7_rename.png'
import "./parentStyles.css"

const InputSection = () => {
  return (
<div>
  <div class='container'>
    <nav className='nav'>
      <p>File</p>
      <p>Help</p>
      <p>Reference</p>
    </nav>
    <div className='container2'>
    <InputComponents/>
    <div className='conatiner3'> 
    <Result/>
    </div>
    
     <OutputComponents/>
      </div>
  </div>
  
</div>
  )
}

export default InputSection

