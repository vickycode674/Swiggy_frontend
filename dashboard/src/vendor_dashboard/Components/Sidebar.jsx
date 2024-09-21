

const Sidebar = ({ShowFirmHandler, showproductHandler}) => {
  return (
    <div className="sideBarSection">
        <ul>
           <li onClick={ShowFirmHandler} style={{ cursor: 'pointer' }}>Add Firm</li>   
           <li onClick={ showproductHandler}  style={{cursor: 'pointer' }}>Add Product </li>
           <li>All Products</li>
           <li>User Details</li> 
        </ul> 
      
    </div>
  )
}

export default Sidebar;
