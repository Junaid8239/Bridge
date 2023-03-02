
import React from 'react'
import './parentStyles.css'
import data_img from './1_input_data.jpg'
import data_img1 from './2_effective.png'
import data_img2 from './3_bending.png'
import data_img3 from './4_livebending.png'
import data_img4 from './5_load.jpg'
import data_img5 from './6_shear.jpg'
import data_img6 from './7_rename.png'
export default function InputComponents() {
  
  // const [clearSpan, setclearSpan] = useState("");
  // const handleOnsubmit =(event) =>{
  //   event.preventDeafult();
  // };
  // const handleClearspan = (event) =>{
  //   setclearSpan(event.target.value);
    
  // };
  return (
    
   <div class='container'>
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
            
            <button class="button button1" type='submit' >Save</button>
            <button class="button button2" type='reset' >Reset</button>
            <button class="button button3" type='preview'>Preview</button>
            
</form>
       
    </div>
    <div class='inputnumber'>
      <div class='steps'>
      <img src={data_img} alt="1" />
      <img src={data_img1} alt="2" />
      <img src={data_img2} alt="3" />
      <img src={data_img3} alt="4" />
      <img src={data_img4} alt="5" />
      <img src={data_img5} alt="6" />
      <img src={data_img6} alt="7" />
      </div>

    </div>  
   </div>
   
  
  )
}
