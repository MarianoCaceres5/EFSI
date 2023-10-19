import React from "react";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { DataPortfolioContext } from "../../context/DataPortfolioContext";
import { FavoritesContext } from "../../context/FavoritesContext";
import './style.css'

export default function Creation() {

  let { dataPortfolio } = useContext(DataPortfolioContext);
  let { favorites, addCreation, deleteCreation } = useContext(FavoritesContext);
  const { creationId } = useParams();
  const [creation, setCreation] = useState({});

  const loadCreation = () => {
    dataPortfolio.map(data => {
      if (data.id.toString() === creationId.toString()) {
        setCreation(data);
      }
    })
  }

  useEffect(() => {
    loadCreation();
  }, []);

  if (creation) {
    return (
      <>
        <div className="creationContainer">
          <img src={creation.img} alt="" style={{margin: '20px' }} />
          <div className="dataContainer">
            <h1>{creation.description}</h1>
            <h3 style={{width: '100%'}}>{creation.date}</h3>
            {favorites.find((favorite) => favorite.id.toString() === creationId.toString()) ? (
              <button onClick={() => deleteCreation(creation)}>Delete from favorites</button>
            ):(
              <button onClick={() => addCreation(creation)}>Add to favorites</button>
            )}
            
          </div>
        </div>
      </>
    )
  } else {
    return (
      <></>
    )
  }
}
