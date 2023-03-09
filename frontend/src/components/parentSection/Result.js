import React from 'react'
import './parentStyles.css'
import data_img from './1_input_data.jpg'
import data_img1 from './2_effective.png'
import data_img2 from './3_bending.png'
import data_img3 from './4_livebending.png'
import data_img4 from './5_load.jpg'
import data_img5 from './6_shear.jpg'
import data_img6 from './7_rename.png'

const Result = () => {
  return (

    <>
    <div class='steps'>
      <img src={data_img} alt="1" />
      <img src={data_img1} alt="2" />
      <img src={data_img2} alt="3" />
      <img src={data_img3} alt="4" />
      <img src={data_img4} alt="5" />
      <img src={data_img5} alt="6" />
      <img src={data_img6} alt="7" />
    </div>
    <div className='result_container'>
    
      <text>ISOMETRIC VIEW</text>
      <text>CALCULATION</text>
    </div>
    </>
  )
}

export default Result