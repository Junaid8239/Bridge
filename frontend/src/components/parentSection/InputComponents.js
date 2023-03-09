
import React from 'react'
import './parentStyles.css'

export default function InputComponents() {
  
  // const [clearSpan, setclearSpan] = useState("");
  // const handleOnsubmit =(event) =>{
  //   event.preventDeafult();
  // };
  // const handleClearspan = (event) =>{
  //   setclearSpan(event.target.value);
    
  // };
  return (
    <>
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
 
    </>
  
  )
}
