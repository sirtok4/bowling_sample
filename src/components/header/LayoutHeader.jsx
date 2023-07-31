import React, { useEffect, useReducer, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Header2 from "./Header2";
/*---------Using reducer mange the active or inactive menu----------*/
const initialState = { activeMenu: "" };

function reducer(state, action) {
  switch (action.type) {
    case "homeOne":
      return { activeMenu: "homeOne" };
    case "suits":
      return { activeMenu: "suits" };
    case "blog":
      return { activeMenu: "blog" };
    case "pages":
      return { activeMenu: "pages" };
    case "hotel-facilities":
      return { activeMenu: "hotel-facilities" };
    default:
      return { activeMenu: "" };
  }
}
function LayoutHeader({price}) {
  const [showMobileMenu, setMobileMenu] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();
  const currentRoute = router.pathname;
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  const handleMobileMenu = () => {
    if (showMobileMenu === false || showMobileMenu === 0) {
      setMobileMenu(1);
    } else {
      setMobileMenu(false);
    }
  };
  const isSticky = (e) => {
    const header = document.querySelector("header");
    const scrollTop = window.scrollY;
    scrollTop >= 100
      ? header.classList.add("sticky")
      : header.classList
      ? header.classList.remove("sticky")
      : header.classList.add("sticky");
  };
  return <Header2 price={price} />
}

export default LayoutHeader;
