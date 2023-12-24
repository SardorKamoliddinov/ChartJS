import React from "react";

const Footer = () => {
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
          <p style={{padding: "10px 0"}}>Манзил: 100001, Тошкент ш., Ислом Каримов кўчаси, 6</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
