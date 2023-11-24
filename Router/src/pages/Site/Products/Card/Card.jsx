

import React from 'react';
import { Link } from 'react-router-dom'; 
import './Card.css';

const Card = ({ item }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img
        className="card-img-top"
        src="https://www.lifewire.com/thmb/0joqidjza7Hij2Hz-7MQ3cGyvYw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/impossible-double-diamonds-585239361-5a56a4787d4be800377a85b8.jpg"
        alt="Card cap"
      />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.unitPrice}</p>
        <Link to={`/${item.id}`} className="btn btn-primary">
          Details
        </Link>
        <br /><br />
        <Link to={`/favorites/${item.id}`} className="btn btn-primary">
          Go Favorites
        </Link>
      </div>
    </div>
  );
};

export default Card;
