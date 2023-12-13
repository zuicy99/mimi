import React from "react";
import "../../styles/feel/feel.css";
const Feel = () => {
  return (
    <div>
      <div className="category">
        <img src="./images/navintro.svg" alt="" className="first" />
        첫 화면
        <img src="./images/navintro1.svg" alt="" className="" />
        감정 상태
        <img src="./images/navintro2.svg" alt="" className="" />
        캘린더
        <img src="./images/navintro3.svg" alt="" className="" />
        차트
        <img src="./images/navintro4.svg" alt="" className="" />
        ABOUT
      </div>

      <div className="title">
        현재 감정 상태를 선택해주세요
        <img src="./images/layer.svg" alt="" className="" />
        매우 좋음
        <img src="./images/layer1.svg" alt="" className="" />
        좋음
        <img src="./images/layer2.svg" alt="" className="" />
        보통
        <img src="./images/layer3.svg" alt="" className="" />
        나쁨
        <img src="./images/layer4.svg" alt="" className="" />
        매우 나쁨
      </div>
      <div>
        <img src="./images/exciting.svg" alt="" className="" />
        <img src="./images/good.svg" alt="" className="" />
        <img src="./images/grateful.svg" alt="" className="" />
        <img src="./images/happy.svg" alt="" className="" />
        <img src="./images/hopeful.svg" alt="" className="" />
        <img src="./images/joyful.svg" alt="" className="" />
        <img src="./images/love.svg" alt="" className="" />
        <img src="./images/proud.svg" alt="" className="" />
        <img src="./images/yummy.svg" alt="" className="" />
      </div>
    </div>
  );
};

export default Feel;
