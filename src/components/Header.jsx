import React from "react";
import { Link, useNavigate } from "react-router";

const Header = ({authenticate,setAuthenticate}) => {


  //로그인일때 =>로그아웃text , 로그아웃일때=> 로그인text
  const navigate = useNavigate();
  
  const goToLogin = ( ) =>{
    if(authenticate){
      setAuthenticate(false)
      navigate("/")
    }else{
      navigate("/login");
    }
  }


  return (
    <div className="header-box">
      <div className="header-box-logo">
        {/* 메인페이지 이동*/}
        <Link to={"/"}>
          <img
            src="https://cdn.bonif.co.kr/resources/web/css/images/logo_gnb.png"
            alt="이미지"
          />
        </Link>
      </div>
      <div className="header-box-nav">
        <ul className="header-box-nav-list">
          <li>
            <Link to={"/"}>메인</Link>
          </li>
          <br />
          <li>
            <Link to={"/goods"}>메뉴 소개</Link>
          </li>
        </ul>
      </div>
      <div className="header-box-util">
        <button onClick={goToLogin}>{authenticate?"로그아웃":"로그인"}</button>
      </div>
    </div>
  );
};

export default Header;
