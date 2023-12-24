import React from "react";

const Navbar = () => {
  return (
    <>
      <div
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="logo">
          <img
            src="https://cbu.uz/bitrix/templates/main/img/logo-oz.svg"
            alt=""
          />
        </div>
        <div className="text">
          <h1>МБнинг Марказий аппарати</h1>
          <p style={{ padding: "10px 0" }}>
            Алоқа телефон рақами (+998 71) 212-62-05
          </p>
          <p>Ишонч телефони (+998 71) 212-62-05</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
