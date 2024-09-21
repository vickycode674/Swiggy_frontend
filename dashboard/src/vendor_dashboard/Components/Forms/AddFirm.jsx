import React from 'react'

const AddFirm = () => {
  return (
    <div className='firmSection'>
        <form className="tableForm">

            <h3>Add Firm</h3>
            <label>Firm Name</label> 
            <input type="text" /><br />



            <label >Area </label>  
            <input type="text" /><br />

            {/* <label>Category</label>  
            <input type='text' /><br /> */}
            <div className="checkInp">
              <label >Category</label>
              <div className="inputsContainer">
              <div className="checkboxContainer">
                <label> veg</label>
                <input type="checkbox" value="Veg" />
              </div>

              <div className="checkboxContainer">
                <label>Non - veg</label>
                <input type="checkbox" value="Non-Veg" />
              </div>
              </div>

            </div>

            <div className="checkInp">
              <label >Region</label>
              <div className="inputsContainer">
              <div className="checkboxContainer">
                <label> South Indian</label>
                <input type="checkbox" value="Veg" />
              </div>

              <div className="checkboxContainer">
                <label>North Indian</label>
                <input type="checkbox" value="Non-Veg" />
              </div>

              <div className="checkboxContainer">
                <label>chinese</label>
                <input type="checkbox" value="Non-Veg" />
              </div>

              <div className="checkboxContainer">
                <label>Bakery</label>
                <input type="checkbox" value="Non-Veg" />
              </div>
              </div>

            </div>


            <label>Offer</label>   
            <input type='text' /><br />

            <label>Firm Image</label> 
            <input type='file' /> <br />
        
        <div className="btn-submit">
            <button>Submit</button>
        </div>

        </form>
      
    </div>
  )
}

export default AddFirm
