import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
import {FaCartPlus, FaSearch, FaUserAlt} from "react-icons/fa"
const options = {
  burgerColorHover:"maroon",
  logo,
  logoWidth:"20vmax",
  navColor1: "black",
  logoHoverSize: "10px",
  logoHoverColor: "maroon",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "tomato",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "maroon",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "green",
  searchIconColor: "red",
  cartIconColor: "blue",
  profileIconColorHover: "maroon",
  searchIconColorHover: "maroon",
  cartIconColorHover: "maroon",
  cartIconMargin: "1vmax",
  profileIcon:true,
  ProfileIconElement: FaUserAlt,
  searchIcon:true,
  SearchIconElement: FaSearch,
  cartIcon:true,
  CartIconElement: FaCartPlus,
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;