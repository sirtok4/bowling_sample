import React, { useState } from "react";
import Link from "next/link";
import Select from "react-select";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  EffectFade,
} from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);
function Banner4() {
  const [showMobileMenu, setMobileMenu] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [startDate1, setStartDate1] = useState(false);
  const [startDate2, setStartDate2] = useState(false);
  const heroBannerSlide = {
    slidesPerView: "auto",
    speed: 1500,
    loop: true,
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    roundLengths: true,
    parallax: true,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next-g",
      prevEl: ".swiper-button-prev-g",
    },
    fadeEffect: {
      crossFade: true,
    },

    autoplay: {
      delay: 4000,
    },
  };
  const SideBannerSlider = {
    slidesPerView: "auto",
    speed: 1500,
    loop: true,
    spaceBetween: 10,
    roundLengths: true,
    autoplay: {
      delay: 2000,
    },
  };
  const options = [
    { value: "Person 1", label: "Person 1" },
    { value: "Person 2", label: "Person 2" },
    { value: "Person 3", label: "Person 3" },
    { value: "Person 4", label: "Person 4" },
    { value: "Person 5", label: "Person 5" },
    { value: "Person 6", label: "Person 6" },
  ];
  const roomOptions = [
    { value: "Room 1", label: "Room 1" },
    { value: "Room 2", label: "Room 2" },
    { value: "Room 3", label: "Room 3" },
    { value: "Room 4", label: "Room 4" },
    { value: "Room 5", label: "Room 5" },
  ];
  const handleMobileMenu = () => {
    if (showMobileMenu === false || showMobileMenu === 0) {
      setMobileMenu(1);
    } else {
      setMobileMenu(false);
    }
  };
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      width: state.selectProps.width,
      borderBottom: "1px dotted pink",
      color: state.selectProps.menuColor,
      padding: 5,
      zIndex: 2,
    }),
    control: (provided) => ({
      ...provided,
      height: 16,
      width: "100%",
      maxWidth: "450px",

      marginTop: "8px",
      border: "0px solid red",
      fontSize: 15,
      fontWeight: "500",
      backgroundColor: "#fff",
      outline: "none",
      boxShadow: "none",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#1C171D",
      fontWeight: "500",
    }),

    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#3caa9f",
      padding: 0,
    }),
  };
  return (
    <>
      <div className="hero-style4 d-flex align-items-center">
        <div className={ showMobileMenu === 1?  "author-side-bar slide":"author-side-bar"}>
          <div className="close-btn" onClick={handleMobileMenu}>
            <i className="bi bi-x-lg" />
          </div>
          <div className="sidebar-logo">
            <Link href="#">
              <a>
                <img src="assets/images/header-logo2.svg" alt="" />
              </a>
            </Link>
          </div>
          <p>168/170, Avenue 01, Mirpur DOHS, Bangladesh</p>
          <Swiper {...SideBannerSlider} className="swiper banner-author-slider">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="athor-slider-wrrap">
                  <p>
                    Curabitur magna nisija,gorbayopai egestas quisen est in,
                    finibornak ando duckgolamin gorakin bolval nunc sitaa amet
                    doing wellaipokani odiotadin andi gone interdum.
                  </p>
                  <div className="author-name-review d-flex justify-content-between flex-wrap">
                    <div className="author-name">
                      <h4>David Josef</h4>
                      <span>Guest</span>
                    </div>
                    <ul className="stars d-flex align-items-center justify-content-center">
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="athor-slider-wrrap">
                  <p>
                    Curabitur magna nisija,gorbayopai egestas quisen est in,
                    finibornak ando duckgolamin gorakin bolval nunc sitaa amet
                    doing wellaipokani odiotadin andi gone interdum.
                  </p>
                  <div className="author-name-review d-flex justify-content-between flex-wrap">
                    <div className="author-name">
                      <h4>Galib Al Nahian</h4>
                      <span>Guest</span>
                    </div>
                    <ul className="stars d-flex align-items-center justify-content-center">
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
          <div className="hotline pt-50">
            <div className="hotline-icon">
              <svg
                width={26}
                height={26}
                viewBox="0 0 26 26"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.5488 16.106C20.0165 15.5518 19.3745 15.2554 18.694 15.2554C18.0191 15.2554 17.3716 15.5463 16.8173 16.1005L15.0833 17.8291C14.9406 17.7522 14.7979 17.6809 14.6608 17.6096C14.4632 17.5108 14.2766 17.4175 14.1175 17.3187C12.4932 16.2871 11.0171 14.9426 9.6013 13.2031C8.91536 12.3361 8.45441 11.6063 8.11968 10.8655C8.56965 10.4539 8.9867 10.0259 9.39277 9.61431C9.54642 9.46066 9.70007 9.30152 9.85372 9.14787C11.0061 7.9955 11.0061 6.50291 9.85372 5.35054L8.35564 3.85246C8.18553 3.68234 8.00993 3.50674 7.8453 3.33115C7.51606 2.99092 7.17034 2.63972 6.81366 2.31047C6.28137 1.78368 5.64483 1.50381 4.97535 1.50381C4.30588 1.50381 3.65836 1.78368 3.10961 2.31047C3.10412 2.31596 3.10412 2.31596 3.09864 2.32145L1.23289 4.20365C0.530497 4.90605 0.129911 5.7621 0.0421114 6.75533C-0.089588 8.35768 0.382335 9.85027 0.744508 10.827C1.63348 13.2251 2.96145 15.4475 4.94243 17.8291C7.34594 20.699 10.2378 22.9653 13.5413 24.5622C14.8034 25.1603 16.4881 25.8682 18.3703 25.9889C18.4855 25.9944 18.6062 25.9999 18.716 25.9999C19.9836 25.9999 21.0482 25.5445 21.8823 24.639C21.8878 24.628 21.8987 24.6226 21.9042 24.6116C22.1896 24.2659 22.5188 23.9531 22.8645 23.6184C23.1005 23.3934 23.3419 23.1574 23.5779 22.9105C24.1212 22.3453 24.4065 21.6868 24.4065 21.0118C24.4065 20.3314 24.1157 19.6783 23.5614 19.1296L20.5488 16.106ZM22.5133 21.8843C22.5078 21.8843 22.5078 21.8898 22.5133 21.8843C22.2993 22.1148 22.0798 22.3233 21.8439 22.5538C21.4872 22.894 21.125 23.2507 20.7848 23.6513C20.2305 24.2439 19.5775 24.5238 18.7215 24.5238C18.6392 24.5238 18.5514 24.5238 18.4691 24.5183C16.8393 24.414 15.3247 23.7775 14.1888 23.2342C11.0829 21.7307 8.35564 19.596 6.08931 16.8907C4.21808 14.6354 2.96694 12.5501 2.13833 10.3112C1.62799 8.94484 1.44142 7.88026 1.52373 6.87606C1.57861 6.23402 1.82554 5.70174 2.281 5.24628L4.15223 3.37504C4.42112 3.12262 4.70647 2.98543 4.98633 2.98543C5.33204 2.98543 5.6119 3.19396 5.7875 3.36956C5.79299 3.37504 5.79847 3.38053 5.80396 3.38602C6.1387 3.69881 6.45697 4.02257 6.79171 4.36828C6.96182 4.54388 7.13742 4.71948 7.31302 4.90056L8.8111 6.39865C9.39277 6.98032 9.39277 7.51809 8.8111 8.09976C8.65196 8.2589 8.49831 8.41804 8.33918 8.57169C7.87823 9.04361 7.43923 9.48261 6.96182 9.91063C6.95085 9.92161 6.93987 9.92709 6.93438 9.93807C6.46246 10.41 6.55026 10.8709 6.64903 11.1837C6.65452 11.2002 6.66001 11.2167 6.6655 11.2331C7.05511 12.177 7.60385 13.0659 8.43795 14.125L8.44344 14.1305C9.95798 15.9962 11.5548 17.4504 13.3163 18.5644C13.5413 18.7071 13.7718 18.8223 13.9913 18.932C14.1888 19.0308 14.3754 19.1241 14.5345 19.2229C14.5565 19.2339 14.5784 19.2503 14.6004 19.2613C14.787 19.3546 14.9626 19.3985 15.1436 19.3985C15.5991 19.3985 15.8845 19.1131 15.9777 19.0198L17.8545 17.1431C18.041 16.9566 18.3374 16.7316 18.6831 16.7316C19.0233 16.7316 19.3032 16.9456 19.4733 17.1322C19.4788 17.1376 19.4788 17.1376 19.4842 17.1431L22.5078 20.1667C23.0731 20.7265 23.0731 21.3026 22.5133 21.8843Z" />
                <path d="M14.0512 6.18495C15.4889 6.4264 16.7949 7.10685 17.8375 8.14947C18.8802 9.19209 19.5551 10.4981 19.8021 11.9358C19.8624 12.298 20.1752 12.5504 20.5319 12.5504C20.5758 12.5504 20.6142 12.5449 20.6581 12.5395C21.0642 12.4736 21.3331 12.0895 21.2672 11.6834C20.9709 9.94387 20.1478 8.35799 18.8911 7.10136C17.6345 5.84473 16.0486 5.0216 14.3091 4.72528C13.903 4.65943 13.5244 4.92832 13.4531 5.3289C13.3817 5.72949 13.6451 6.1191 14.0512 6.18495Z" />
                <path d="M25.9707 11.4691C25.4823 8.60468 24.1324 5.99813 22.0581 3.92387C19.9838 1.8496 17.3773 0.49968 14.5128 0.011294C14.1122 -0.0600432 13.7336 0.214331 13.6623 0.614917C13.5964 1.02099 13.8653 1.39963 14.2714 1.47096C16.8285 1.90447 19.1607 3.11721 21.0155 4.96649C22.8702 6.82125 24.0775 9.15343 24.511 11.7106C24.5714 12.0728 24.8841 12.3252 25.2408 12.3252C25.2847 12.3252 25.3231 12.3197 25.367 12.3142C25.7676 12.2539 26.042 11.8697 25.9707 11.4691Z" />
              </svg>
            </div>
            <div className="hotline-info">
              <span>Call Us Now</span>
              <h6>
                <a href="tel:+8801701111000">+880 170 1111 000</a>
              </h6>
            </div>
          </div>
          <div className="email d-flex align-items-center pt-20">
            <div className="email-icon">
              <svg
                width={26}
                height={26}
                viewBox="0 0 26 26"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_461_205)">
                  <path d="M23.5117 3.30075H2.38674C1.04261 3.30075 -0.0507812 4.39414 -0.0507812 5.73827V20.3633C-0.0507812 21.7074 1.04261 22.8008 2.38674 22.8008H23.5117C24.8558 22.8008 25.9492 21.7074 25.9492 20.3633V5.73827C25.9492 4.39414 24.8558 3.30075 23.5117 3.30075ZM23.5117 4.92574C23.6221 4.92574 23.7271 4.94865 23.8231 4.98865L12.9492 14.4131L2.07526 4.98865C2.17127 4.9487 2.27629 4.92574 2.38668 4.92574H23.5117ZM23.5117 21.1757H2.38674C1.93844 21.1757 1.57421 20.8116 1.57421 20.3632V6.70547L12.4168 16.1024C12.57 16.2349 12.7596 16.3008 12.9492 16.3008C13.1388 16.3008 13.3285 16.2349 13.4816 16.1024L24.3242 6.70547V20.3633C24.3242 20.8116 23.96 21.1757 23.5117 21.1757Z" />
                </g>
              </svg>
            </div>
            <div className="email-info">
              <span>Email Now</span>
              <h6>
                <a href="mailto:example@gmail.com">example@gmail.com</a>
              </h6>
            </div>
          </div>
        </div>
        <div className="hero-social">
          <div className="hotline">
            <div className="hotline-icon">
              <svg
                width={26}
                height={26}
                viewBox="0 0 26 26"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.5488 16.106C20.0165 15.5518 19.3745 15.2554 18.694 15.2554C18.0191 15.2554 17.3716 15.5463 16.8173 16.1005L15.0833 17.8291C14.9406 17.7522 14.7979 17.6809 14.6608 17.6096C14.4632 17.5108 14.2766 17.4175 14.1175 17.3187C12.4932 16.2871 11.0171 14.9426 9.6013 13.2031C8.91536 12.3361 8.45441 11.6063 8.11968 10.8655C8.56965 10.4539 8.9867 10.0259 9.39277 9.61431C9.54642 9.46066 9.70007 9.30152 9.85372 9.14787C11.0061 7.9955 11.0061 6.50291 9.85372 5.35054L8.35564 3.85246C8.18553 3.68234 8.00993 3.50674 7.8453 3.33115C7.51606 2.99092 7.17034 2.63972 6.81366 2.31047C6.28137 1.78368 5.64483 1.50381 4.97535 1.50381C4.30588 1.50381 3.65836 1.78368 3.10961 2.31047C3.10412 2.31596 3.10412 2.31596 3.09864 2.32145L1.23289 4.20365C0.530497 4.90605 0.129911 5.7621 0.0421114 6.75533C-0.089588 8.35768 0.382335 9.85027 0.744508 10.827C1.63348 13.2251 2.96145 15.4475 4.94243 17.8291C7.34594 20.699 10.2378 22.9653 13.5413 24.5622C14.8034 25.1603 16.4881 25.8682 18.3703 25.9889C18.4855 25.9944 18.6062 25.9999 18.716 25.9999C19.9836 25.9999 21.0482 25.5445 21.8823 24.639C21.8878 24.628 21.8987 24.6226 21.9042 24.6116C22.1896 24.2659 22.5188 23.9531 22.8645 23.6184C23.1005 23.3934 23.3419 23.1574 23.5779 22.9105C24.1212 22.3453 24.4065 21.6868 24.4065 21.0118C24.4065 20.3314 24.1157 19.6783 23.5614 19.1296L20.5488 16.106ZM22.5133 21.8843C22.5078 21.8843 22.5078 21.8898 22.5133 21.8843C22.2993 22.1148 22.0798 22.3233 21.8439 22.5538C21.4872 22.894 21.125 23.2507 20.7848 23.6513C20.2305 24.2439 19.5775 24.5238 18.7215 24.5238C18.6392 24.5238 18.5514 24.5238 18.4691 24.5183C16.8393 24.414 15.3247 23.7775 14.1888 23.2342C11.0829 21.7307 8.35564 19.596 6.08931 16.8907C4.21808 14.6354 2.96694 12.5501 2.13833 10.3112C1.62799 8.94484 1.44142 7.88026 1.52373 6.87606C1.57861 6.23402 1.82554 5.70174 2.281 5.24628L4.15223 3.37504C4.42112 3.12262 4.70647 2.98543 4.98633 2.98543C5.33204 2.98543 5.6119 3.19396 5.7875 3.36956C5.79299 3.37504 5.79847 3.38053 5.80396 3.38602C6.1387 3.69881 6.45697 4.02257 6.79171 4.36828C6.96182 4.54388 7.13742 4.71948 7.31302 4.90056L8.8111 6.39865C9.39277 6.98032 9.39277 7.51809 8.8111 8.09976C8.65196 8.2589 8.49831 8.41804 8.33918 8.57169C7.87823 9.04361 7.43923 9.48261 6.96182 9.91063C6.95085 9.92161 6.93987 9.92709 6.93438 9.93807C6.46246 10.41 6.55026 10.8709 6.64903 11.1837C6.65452 11.2002 6.66001 11.2167 6.6655 11.2331C7.05511 12.177 7.60385 13.0659 8.43795 14.125L8.44344 14.1305C9.95798 15.9962 11.5548 17.4504 13.3163 18.5644C13.5413 18.7071 13.7718 18.8223 13.9913 18.932C14.1888 19.0308 14.3754 19.1241 14.5345 19.2229C14.5565 19.2339 14.5784 19.2503 14.6004 19.2613C14.787 19.3546 14.9626 19.3985 15.1436 19.3985C15.5991 19.3985 15.8845 19.1131 15.9777 19.0198L17.8545 17.1431C18.041 16.9566 18.3374 16.7316 18.6831 16.7316C19.0233 16.7316 19.3032 16.9456 19.4733 17.1322C19.4788 17.1376 19.4788 17.1376 19.4842 17.1431L22.5078 20.1667C23.0731 20.7265 23.0731 21.3026 22.5133 21.8843Z" />
                <path d="M14.0512 6.18495C15.4889 6.4264 16.7949 7.10685 17.8375 8.14947C18.8802 9.19209 19.5551 10.4981 19.8021 11.9358C19.8624 12.298 20.1752 12.5504 20.5319 12.5504C20.5758 12.5504 20.6142 12.5449 20.6581 12.5395C21.0642 12.4736 21.3331 12.0895 21.2672 11.6834C20.9709 9.94387 20.1478 8.35799 18.8911 7.10136C17.6345 5.84473 16.0486 5.0216 14.3091 4.72528C13.903 4.65943 13.5244 4.92832 13.4531 5.3289C13.3817 5.72949 13.6451 6.1191 14.0512 6.18495Z" />
                <path d="M25.9707 11.4691C25.4823 8.60468 24.1324 5.99813 22.0581 3.92387C19.9838 1.8496 17.3773 0.49968 14.5128 0.011294C14.1122 -0.0600432 13.7336 0.214331 13.6623 0.614917C13.5964 1.02099 13.8653 1.39963 14.2714 1.47096C16.8285 1.90447 19.1607 3.11721 21.0155 4.96649C22.8702 6.82125 24.0775 9.15343 24.511 11.7106C24.5714 12.0728 24.8841 12.3252 25.2408 12.3252C25.2847 12.3252 25.3231 12.3197 25.367 12.3142C25.7676 12.2539 26.042 11.8697 25.9707 11.4691Z" />
              </svg>
            </div>
            <div className="hotline-info">
              <span>Call Us Now</span>
              <h6>
                <a href="tel:+8801701111000">+880 170 1111 000</a>
              </h6>
            </div>
          </div>
          <div className="deshboar" onClick={handleMobileMenu} >
            <svg
              width={50}
              height={50}
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx={25} cy={25} r="24.5" stroke="#3caa9f" />
              <path
                d="M15.9984 14.0644C15.2379 14.2319 14.5418 14.7948 14.2281 15.5038C14.0004 16.0065 13.9961 16.0968 14.009 19.2163L14.0219 22.0995L14.1379 22.4175C14.4172 23.1823 15.0144 23.771 15.7707 24.0159L16.0844 24.119H19.0707H22.057L22.3707 24.0159C23.1398 23.7624 23.7629 23.1394 24.0164 22.3702L24.1195 22.0565V19.0702V16.0839L24.0164 15.7702C23.7715 15.014 23.1828 14.4167 22.418 14.1374L22.1 14.0214L19.1781 14.0128C16.875 14.0085 16.2004 14.0171 15.9984 14.0644ZM21.9281 15.8003C22.1344 15.8948 22.2676 16.0323 22.3578 16.2429C22.4566 16.4835 22.4566 21.6569 22.3578 21.8976C22.2676 22.1081 22.1344 22.2456 21.9281 22.3401C21.7648 22.4132 21.5887 22.4218 19.0793 22.4218C16.759 22.4218 16.3808 22.4132 16.2433 22.3573C16.0328 22.2671 15.8953 22.1339 15.8008 21.9276C15.7277 21.7644 15.7191 21.5882 15.7191 19.0788C15.7191 16.7585 15.7277 16.3804 15.7836 16.2429C15.8738 16.0323 16.007 15.8948 16.2133 15.8003C16.3765 15.7272 16.5484 15.7187 19.0707 15.7187C21.593 15.7187 21.7648 15.7272 21.9281 15.8003Z"
                fill="#3caa9f"
                stroke="white"
                strokeWidth="0.5"
              />
              <path
                d="M27.8795 14.0687C26.9299 14.2706 26.1264 15.0827 25.9244 16.0409C25.8299 16.4835 25.8299 21.6569 25.9244 22.0995C26.1264 23.0663 26.9342 23.8741 27.901 24.0761C28.3436 24.1706 33.517 24.1706 33.9596 24.0761C34.9264 23.8741 35.7342 23.0663 35.9361 22.0995C36.0307 21.6569 36.0307 16.4835 35.9361 16.0409C35.7342 15.0741 34.9264 14.2663 33.9596 14.0644C33.5299 13.9741 28.3006 13.9741 27.8795 14.0687ZM33.865 15.8476C33.9553 15.9077 34.0799 16.0323 34.1443 16.1226L34.2604 16.2901V19.0702V21.8503L34.1443 22.0179C34.0799 22.1081 33.9553 22.2327 33.865 22.2929L33.7061 22.4003H30.9303H28.1502L27.9826 22.2843C27.8924 22.2198 27.7678 22.0952 27.7076 22.005L27.6002 21.846L27.5873 19.169C27.5787 17.4116 27.5916 16.4319 27.6217 16.3245C27.6732 16.1226 27.9654 15.8218 28.1545 15.7659C28.2318 15.7401 29.4436 15.7272 30.999 15.7315L33.7061 15.7401L33.865 15.8476Z"
                fill="#3caa9f"
                stroke="white"
                strokeWidth="0.5"
              />
              <path
                d="M15.9984 25.9237C15.2379 26.0913 14.5418 26.6542 14.2281 27.3632C14.0004 27.8659 13.9961 27.9562 14.009 31.0757L14.0219 33.9589L14.1379 34.2769C14.4172 35.0417 15.0144 35.6304 15.7707 35.8753L16.0844 35.9784H19.0707H22.057L22.3707 35.8753C23.1398 35.6218 23.7629 34.9987 24.0164 34.2296L24.1195 33.9159V30.9296V27.9433L24.0164 27.6296C23.7715 26.8733 23.1828 26.2761 22.418 25.9968L22.1 25.8808L19.1781 25.8722C16.875 25.8679 16.2004 25.8765 15.9984 25.9237ZM21.9281 27.6597C22.1344 27.7542 22.2676 27.8917 22.3578 28.1022C22.4566 28.3429 22.4566 33.5163 22.3578 33.7569C22.2676 33.9675 22.1344 34.105 21.9281 34.1995C21.7648 34.2726 21.5887 34.2812 19.0793 34.2812C16.759 34.2812 16.3808 34.2726 16.2433 34.2167C16.0328 34.1265 15.8953 33.9933 15.8008 33.787C15.7277 33.6237 15.7191 33.4476 15.7191 30.9382C15.7191 28.6179 15.7277 28.2397 15.7836 28.1022C15.8738 27.8917 16.007 27.7542 16.2133 27.6597C16.3765 27.5866 16.5484 27.578 19.0707 27.578C21.593 27.578 21.7648 27.5866 21.9281 27.6597Z"
                fill="#3caa9f"
                stroke="white"
                strokeWidth="0.5"
              />
              <path
                d="M27.8795 25.928C26.9299 26.13 26.1264 26.9421 25.9244 27.9003C25.8299 28.3429 25.8299 33.5163 25.9244 33.9589C26.1264 34.9257 26.9342 35.7335 27.901 35.9354C28.3436 36.03 33.517 36.03 33.9596 35.9354C34.9264 35.7335 35.7342 34.9257 35.9361 33.9589C36.0307 33.5163 36.0307 28.3429 35.9361 27.9003C35.7342 26.9335 34.9264 26.1257 33.9596 25.9237C33.5299 25.8335 28.3006 25.8335 27.8795 25.928ZM33.865 27.7069C33.9553 27.7671 34.0799 27.8917 34.1443 27.9819L34.2604 28.1495V30.9296V33.7097L34.1443 33.8772C34.0799 33.9675 33.9553 34.0921 33.865 34.1522L33.7061 34.2597H30.9303H28.1502L27.9826 34.1437C27.8924 34.0792 27.7678 33.9546 27.7076 33.8644L27.6002 33.7054L27.5873 31.0284C27.5787 29.271 27.5916 28.2913 27.6217 28.1839C27.6732 27.9819 27.9654 27.6812 28.1545 27.6253C28.2318 27.5995 29.4436 27.5866 30.999 27.5909L33.7061 27.5995L33.865 27.7069Z"
                fill="#3caa9f"
                stroke="white"
                strokeWidth="0.5"
              />
            </svg>
          </div>
          <div className="social-icon">
            <ul className="d-flex align-items-center">
              <li>
                <a href="https://www.facebook.com/">
                  <i className="bx bxl-facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/">
                  <i className="bx bxl-twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.pinterest.com/">
                  <i className="bx bxl-pinterest-alt" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <i className="bx bxl-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Swiper {...heroBannerSlide} className="swiper banner4">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="slider-bg-1">
                <div className="banner2-content">
                  <div className="banner-title">
                    <h1>Get Here The Coolest Room &amp; Suits.</h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slider-bg-2">
                <div className="banner2-content">
                  <div className="banner-title">
                    <h1>Get Here The Coolest Room &amp; Suits.</h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
        <div className="swiper-btn d-flex align-items-center">
          <div className="btns swiper-button-prev-g">
            <svg
              width={26}
              height={13}
              viewBox="0 0 26 13"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.26821 12.5247C7.57342 12.4319 7.74572 12.1194 7.66696 11.807C7.64727 11.7142 6.82514 10.8695 5.21536 9.26803L2.79823 6.86094L14.1996 6.85117L25.6059 6.83652L25.7437 6.73399C25.8176 6.68028 25.916 6.54357 25.9554 6.43127C26.0194 6.25062 26.0145 6.21156 25.9407 6.0602C25.8964 5.96743 25.7979 5.85025 25.7241 5.80143C25.5961 5.71842 25.0693 5.71354 14.1947 5.69889L2.79823 5.68913L5.19075 3.30645C6.51008 1.99793 7.6128 0.865182 7.63742 0.791944C7.76049 0.474579 7.63742 0.176744 7.3322 0.0497979C6.9876 -0.0917957 7.05652 -0.150386 3.8468 3.03791C1.82843 5.03976 0.843853 6.05044 0.824161 6.14321C0.80447 6.21645 0.80447 6.33363 0.824161 6.41175C0.843853 6.49964 1.8235 7.50544 3.81727 9.49263C6.34763 12.0071 6.9876 12.6077 7.11067 12.5686C7.12052 12.5686 7.18944 12.5442 7.26821 12.5247Z" />
            </svg>
          </div>
          <div className="btns swiper-button-next-g">
            <svg
              width={26}
              height={14}
              viewBox="0 0 26 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.0947 0.759911C18.7901 0.852686 18.6181 1.16519 18.6967 1.47769C18.7164 1.57046 19.5369 2.4152 21.1437 4.01677L23.5562 6.42402L12.1765 6.43379L0.791783 6.44844L0.654204 6.55098C0.580501 6.60469 0.48223 6.74141 0.442921 6.85372C0.379045 7.03438 0.383959 7.07344 0.457662 7.22481C0.501884 7.31759 0.600155 7.43477 0.673858 7.4836C0.80161 7.56661 1.32736 7.57149 12.1814 7.58614L23.5562 7.59591L21.1682 9.97874C19.8514 11.2873 18.7508 12.4202 18.7262 12.4934C18.6034 12.8108 18.7262 13.1086 19.0309 13.2356C19.3748 13.3772 19.306 13.4358 22.5096 10.2473C24.5242 8.24532 25.5069 7.23457 25.5266 7.1418C25.5462 7.06856 25.5462 6.95137 25.5266 6.87324C25.5069 6.78535 24.5291 5.77948 22.5391 3.79216C20.0136 1.27749 19.3748 0.676902 19.252 0.715965C19.2421 0.715965 19.1733 0.74038 19.0947 0.759911Z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="form-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-10">
              <div className="multi-main-searchber">
                <div className="row align-items-center">
                  <div className="col-lg-9">
                    <div className="row gx-2 gy-4">
                      <div className="col-lg-3 col-md-6">
                        <div className="searchbox-input date-picker-input">
                          <ReactDatePicker
                            title="reset date"
                            selected={startDate1}
                            onChange={(date) => setStartDate1(date)}
                            placeholderText="Check In"
                            className="calenda"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="searchbox-input date-picker-input">
                          <ReactDatePicker
                            title="reset date"
                            selected={startDate2}
                            onChange={(date) => setStartDate2(date)}
                            placeholderText="Check Out"
                            className="calenda"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="searchbox-input two">
                          <Select
                            className="person-select"
                            theme={(theme) => ({
                              ...theme,
                              borderRadius: 0,
                              padding: 0,
                              colors: {
                                ...theme.colors,
                                primary25: "#f6f6f6",
                                primary: "#3caa9f",
                              },
                              zIndex: 10,
                            })}
                            styles={customStyles}
                            components={{
                              IndicatorSeparator: () => null,
                            }}
                            width="180px"
                            menuColor="#333"
                            defaultValue={selectedOption2}
                            options={roomOptions}
                            placeholder="Rooms"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="searchbox-input two three">
                          <Select
                            theme={(theme) => ({
                              ...theme,
                              borderRadius: 0,
                              padding: 0,
                              colors: {
                                ...theme.colors,
                                primary25: "#f6f6f6",
                                primary: "#3caa9f",
                              },
                              zIndex: 10,
                            })}
                            styles={customStyles}
                            components={{
                              IndicatorSeparator: () => null,
                            }}
                            width="180px"
                            menuColor="#333"
                            defaultValue={selectedOption2}
                            options={options}
                            placeholder="Person"
                            className="person-select"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 px-0">
                    <div className="main-form-submit">
                      <Link href="/room-suits1">
                        <a className="btn--primary4 eg-btn">Check Now</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner4;
