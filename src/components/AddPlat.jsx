import React from 'react'
import '../styles/addPlat.css'



const AddPlat = () => {

    return (
        <div className='addPlat'>
            <div className='addContainer'>
                
                <div className="addPlat_container">
                    
                    <div className="addPlat_info">
                        <h3>Plat Name</h3>
                        <input type="text" placeholder="Enter Plat Name" />
                        
                        <h3>Plat Price</h3>
                        <input type="text" placeholder="Enter Plat Price" />
                        <h3>Plat Categorie</h3>
                        <input type="text" placeholder="Enter Plat Categorie" />
                    </div>
                    <div className="addPlat_image">
                        <h3>Plat Image</h3>
                        <input type="file" placeholder="Enter Plat Image" />
                    </div>
                    <button>Add</button>
                </div>
                
                <div className='addPlatToDisc_container'>
                
                    <div className="addPlatToDisc">
                        <h3>Plat Name</h3>
                        <input type="text" placeholder="Enter Plat Name" />
                        <h3>New Price</h3>
                        <input type="text" placeholder="Enter New Price" />
                    </div>
                    <button>Add</button>
                </div>
            </div>
        </div>
    )
}

export default AddPlat;