import "../styles/Stores.css";
import food from "../images/food-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import StarRating from "./StarRating";
import React, {useState} from "react";
function Stores() {
  const stores = [
    {
      logo_store: "",
      nom_store: "Le Délice du Souk",
      proprietaire: "Fatima Zahra",
      ville: "Casablanca",
      localisation: "latitude, longitude",
      liste_menu: ["Tajine", "Brochettes", "Couscous", "Pastilla"],
      notation: 4.5,
    },
    {
      logo_store: "",
      nom_store: "Marrakech Grill",
      proprietaire: "Karim Hassan",
      ville: "Tanger",
      localisation: "latitude, longitude",
      liste_menu: [
        "Chawarma",
        "Hamburger",
        "Brochettes mixtes",
        "Thé à la menthe",
      ],
      notation: 4.2,
    },
    {
      logo_store: "",
      nom_store: "Riad El Medina",
      proprietaire: "Amina Khalil",
      ville: "Rabat",
      localisation: "latitude, longitude",
      liste_menu: ["Harira", "Pastilla", "Kefta", "Makouda"],
      notation: 4.7,
    },
    {
      logo_store: "",
      nom_store: "Casa Shawarma Express",
      proprietaire: "Ahmed El Mansouri",
      ville: "Casablanca",
      localisation: "latitude, longitude",
      liste_menu: ["Shawarma", "Falafel", "Hummus", "Salades variées"],
      notation: 4.6,
    },
    {
      logo_store: "",
      nom_store: "Tacos Time",
      proprietaire: "Nadia Benjelloun",
      ville: "Tanger",
      localisation: "latitude, longitude",
      liste_menu: ["Tacos", "Burgers", "Fajitas", "Boissons fraîches"],
      notation: 4.3,
    },
    {
      logo_store: "",
      nom_store: "Kebab Royale",
      proprietaire: "Youssef Amrani",
      ville: "Rabat",
      localisation: "latitude, longitude",
      liste_menu: ["Kebab", "Pizzas", "Pâtes", "Glaces"],
      notation: 4.8,
    },
  ];


  const [searchTerm, setSearchTerm] = useState(""); // État pour stocker la valeur de la recherche
  // ... (votre liste de stores)
  const [filterTerm, setFilterTerm] = useState("");

  // Fonction pour mettre à jour l'état de la recherche
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleFilter = (filter) => {
    setFilterTerm(filter);
  };

  // // Filtrage des stores en fonction du terme de recherche
  // const filteredStores = stores.filter((store) => {
  //   return (
  //     store.ville.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     store.nom_store.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     store.liste_menu.join(" ").toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  // });
  const filteredStores = stores.filter((store) => {
    return (
      (store.ville.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.nom_store.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.liste_menu.join(" ").toLowerCase().includes(searchTerm.toLowerCase()))
      && 
      (filterTerm === "" || store.ville.toLowerCase() === filterTerm.toLowerCase())
    );
  });
  return (
    <>
      <div className="stores_container">
        <div className="head">
            <h1
            style={{
                textAlign: "center",
                marginTop: "30px",
                marginBottom: "30px",
            }}
            >
            Street Food Stores
            </h1>
            <div className="search">
                <div className="search_input">
                    <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search for..."
                    value={searchTerm}
                    onChange={handleSearch}
                    />
                </div>
                <div className="filter_btns">
                <button onClick={() => handleFilter("")}>All</button>

                    <button onClick={() => handleFilter("Casablanca")}>Casablanca</button>
                    <button onClick={() => handleFilter("Rabat")}>Rabat</button>
                    <button onClick={() => handleFilter("Tanger")}>Tanger</button>
                </div>
            </div>
        </div>
        <div className="stores">
            {filteredStores.map((store) => (
                <div className="store" key={store.nom_store}>
                <div className="store_logo">
                    <img
                    src={food}
                    alt="foodImage"
                    style={{
                        width: "300px",
                        height: "400px",
                        objectFit: "cover",
                        borderRadius: "10px",
                    }}
                    />
                </div>
                <div className="store_info">
                    <h3 style={{ marginTop: "10px" }}>{store.nom_store}</h3>
                    <p>
                    <StarRating rating={store.notation} />
                    </p>
                    <p>{store.ville}</p>
                    <p style={{ marginTop: "5px" }}>
                    <a href="#">Localisation</a>
                    </p>
                    <p style={{ color: "gray", marginTop: "5px" }}>
                    {store.liste_menu.join(" | ")}
                    </p>
                </div>
                </div>
            ))}
        </div>
          
      </div>
    </>
  );
}
export default Stores;
