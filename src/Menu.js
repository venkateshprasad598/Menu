import React from "react";

const Menu = ({ id, title, category, price, img, desc }) => {
  return (
    <div className="menu">
      <main>
        <img src={img} alt={title} className="menu__img" />
        <div className="menu__heading">
          <h3>{title}</h3>
          <h5 className="menu__price">${price}</h5>
        </div>
        <div className="menu__underline"></div>
        <p className="menu__text">{desc}</p>
      </main>
    </div>
  );
};

export default Menu;
