import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="mainNavbar">
        <div>
          <img
            src="https://cbu.uz/bitrix/templates/main/img/logo-oz.svg"
            alt="NBU_logo"
          />
        </div>
        <div>
          <h1>МБнинг Марказий аппарати</h1>
          <p className="paragraph">Алоқа телефон рақами (+998 71) 212-62-05</p>
          <p>Ишонч телефони (+998 71) 212-62-05</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
