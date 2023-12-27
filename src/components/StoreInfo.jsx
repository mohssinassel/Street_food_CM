import React, { useState } from "react";
import "../styles/personalInfo.css";
import ProgressBar from "../components/ProgressBar";
import { Link } from "react-router-dom";
import "../styles/storeInfo.css";
import { LuPencilLine } from "react-icons/lu";
import { MdDelete } from "react-icons/md";

const StoreInfo = () => {
    const [showAddInfoPlat, setShowAddInfoPlat] = useState(false);
    const [plats, setPlats] = useState([]);
  const [platDetails, setPlatDetails] = useState({ name: '', price: '' ,category: '',
  image: null,});
  const handleAddPlatClick = () => {
    setShowAddInfoPlat(!showAddInfoPlat);
    setIsEditMode(false);
    setPlatDetails({
      name: '',
      price: '',
      category: '',
      image: null,
    });
  };
  const [isEditMode, setIsEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
    const [activeStep, setActiveStep] = useState("store");
    const handleConfirmClick = () => {
        if (isEditMode) {
          const updatedPlats = [...plats];
          updatedPlats[editIndex] = platDetails;
          setPlats(updatedPlats);
          setIsEditMode(false);
          setEditIndex(null);
        } else {
          setPlats([...plats, platDetails]);
        }
        setShowAddInfoPlat(false);
        setPlatDetails({
          name: '',
          price: '',
          category: '',
          image: null,
        });
      };
      const handleImageChange = (e) => {
        const file = e.target.files[0];
        setPlatDetails({ ...platDetails, image: file });
      };
      const handleDeleteClick = (index) => {
        const updatedPlats = [...plats];
        updatedPlats.splice(index, 1);
        setPlats(updatedPlats);
      };
      const handleModifyClick = (index) => {
        const platToModify = plats[index];
        setPlatDetails({ ...platToModify });
        setShowAddInfoPlat(true);
        setIsEditMode(true);
        setEditIndex(index);
      };
    return (
        <div>
            <div >
            <ProgressBar activeStep={activeStep} />
            </div>
            <div className="persoInfoDiv">
                <h1>Store Info</h1>
                <h4>It's time to introduce your store! Share key details about your business that will Attract peaple</h4>
                <span className="horizontal-line"></span>
                <div className="personalInfo">
                    <div className="personalInfo_container">
                        <div className="personalInfo_info">
                            <h3>Store Name</h3>
                            <div className="FullNameContainer">
                            <input type="text" placeholder="Enter First Name" className="PersonalNormalInput"/>
                            
                            </div>
                        </div>
                        <div className="personalInfo_info">
                            <h3>Description</h3>
                            <div className="FullNameContainer">
                            <textarea type="email" placeholder="Enter Description of your Store"  className="PersonalNormalInput inputDescription"/>
                            </div>
                        </div>
                        <div className="personalInfo_info">
                            <h3>Operating Hours</h3>
                            <div className="FullNameContainer">
                            FROM
                            <input type="text" placeholder="" className="NumberInput"/>
                            TO
                            <input type="text" placeholder="" className="NumberInput"/>
                            </div>
                        </div>
                        <div className="personalInfo_info">
                            <h3>Pass Fun</h3>
                            <select className="PersonalNormalInput">
                            <option value="yes">YES</option>
                            <option value="no">NO</option>
                            </select>
                        </div>
                        <div className="personalInfo_info menu_info">
                            <h3>Menu</h3>
                            <div className="MenuStoreContainerMain">
                                <div className="MenuStoreContainer">
                                <button className="addPlatToStore" onClick={handleAddPlatClick} >
                                    Add Plat</button>
                                </div>
                                
                                <div className="addedPlats">
                                {plats.map((plat, index) => (
                                <div key={index} className="addedPlatItem">
                                    {plat.image && (
                                        <div className="imgContainerPlat">
                                            <img src={URL.createObjectURL(plat.image)} alt="Plat" className="addedPlatImage" />
                                        </div>
                                        )}
                                    <span>{plat.name}</span>
                                    <span>{plat.price}</span>
                                    <span> {plat.category}</span>
                                    <div className="modifyAndDelete"><LuPencilLine className="icon_modif_plat" onClick={() => handleModifyClick(index)} />
                                    <MdDelete className="icon_modif_plat" onClick={() => handleDeleteClick(index)}/></div>
                                </div>
                                ))}
                                </div>

                                <div className={`addInfoPlat ${showAddInfoPlat ? 'show' : ''}`}>
                                    <div className="addInfoPlatDiv">
                                        <input type="text" placeholder="Enter Plat Name" className="PersonalNormalInput menuInputs" value={platDetails.name}
              onChange={(e) => setPlatDetails({ ...platDetails, name: e.target.value })}/>
                                        <input type="text" placeholder="Enter Price" className="PersonalNormalInput menuInputs" value={platDetails.price}
              onChange={(e) => setPlatDetails({ ...platDetails, price: e.target.value })}/>
                                    </div>
                                    <div className="addInfoPlatDiv">
                                        <input type="text" placeholder="Enter Category" className="PersonalNormalInput menuInputs" value={platDetails.category}
              onChange={(e) => setPlatDetails({ ...platDetails, category: e.target.value })}/>
                                        <input type="file"  className="PersonalNormalInput forImage menuInputs" onChange={handleImageChange}/>
                                    </div>
                                    <div>
                                        <button className=" confirmeAdd" onClick={handleConfirmClick}   >Confirme</button>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>

                        
                    </div>
                </div>
                <div className="containerBtn">
                <Link  to="/becomeVendor/location" className="continuBtn Btn2Personal" onClick={() => setActiveStep("Location")}>Continue</Link>
                </div>
            </div>

        </div>
    )
}
export default StoreInfo;