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
      <div class='asidecontainer'>
        <div  class='inputheader'>
          <text>INPUT DATA</text>
        </div>
        <form class='form' onSubmit>
            <div>
              <label>Clear Span </label>
              <input type="number" required pattern='[0-9].{4}' />
            </div>
            <div>
              <label> Width of Carriage way </label>
              <input type="number" required pattern='[0-9].{4}'/>
            </div>
            <div>
              <label> Width of Bearing </label>
              <input type="number" required pattern='[0-9].{4}' />
            </div>
            <div>
              <label> Grade of Concrete </label>
              <input type="number" required pattern='[0-9].{4}' />
            </div>
            <div>
              <label> Loading Standards </label>
              <input type="number" required pattern='[0-9].{4}' />
            </div>
            <div>
              <label> Grade of steel</label>
              <input type="number" required pattern='[0-9].{4}' />
            </div>
            <div>
              <text style={{marginRight:'10px'}}>
                  Footpath Dimensions :
              </text>
            </div>
            <div>
              <label > Width </label>
              <input type="number" required pattern='[0-9].{4}' />
            </div>
            <div>
              <label> Depth</label>
              <input type="number"required pattern='[0-9].{4}' />
            </div>
        </form>
          <div className='button'>
            <button   type='submit' >Save</button>
            <button  type='reset' >Reset</button>
            <button type='preview'>Preview</button>
          </div>
      </div>
    <div className='conatiner3'> 
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
     </div> 
)     <div className='output_container'>
   
            <text>Output</text>
   
      </div>
      </div>
  </div>
  
</div>
  )
}

export default InputSection

