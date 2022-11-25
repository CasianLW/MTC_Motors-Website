import React from "react";
import { motion } from "framer-motion";
import MTCcar from "../assets/80sGround.png";
import MTCcarWhite from "../assets/Basic_white.png";
import MTCcarBlue from "../assets/70sSky.png";
const UnderConstruction = () => {
  const [rotate, setRotate] = React.useState(false);

  return (
    <header className="bg-[#090909] h-[100vh] w-[100vw] text-white pt-10 md:pt-20 overflow-x-hidden overflow-y-hidden">
      <svg
        className="mx-auto w-full"
        width="190"
        height="24"
        viewBox="0 0 190 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.2 23L24.168 0.599993H21.544L12.328 16.344L2.984 0.599993H0.360001V23H3.432V6.77599L11.528 20.28H13L21.096 6.67999L21.128 23H24.2Z"
          fill="white"
        />
        <path
          d="M35.3705 23H38.5385V3.38399H46.2185V0.599993H27.6905V3.38399H35.3705V23Z"
          fill="white"
        />
        <path
          d="M59.4072 23.256C62.8952 23.256 65.9033 22.04 67.9513 19.736L65.8713 17.72C64.1433 19.544 62.0312 20.408 59.5672 20.408C54.5112 20.408 50.7673 16.76 50.7673 11.8C50.7673 6.83999 54.5112 3.19199 59.5672 3.19199C62.0312 3.19199 64.1433 4.02399 65.8713 5.84799L67.9513 3.83199C65.9033 1.52799 62.8953 0.343994 59.4393 0.343994C52.6233 0.343994 47.5672 5.17599 47.5672 11.8C47.5672 18.424 52.6232 23.256 59.4072 23.256Z"
          fill="white"
        />
        <path
          d="M104.95 23L104.918 0.599993H102.294L93.078 16.344L83.734 0.599993H81.11V23H84.182V6.77599L92.278 20.28H93.75L101.846 6.67999L101.878 23H104.95Z"
          fill="white"
        />
        <path
          d="M118.489 23.192C123.577 23.192 127.289 19.576 127.289 14.52C127.289 9.46399 123.577 5.87999 118.489 5.87999C113.401 5.87999 109.657 9.46399 109.657 14.52C109.657 19.576 113.401 23.192 118.489 23.192ZM118.489 20.504C115.225 20.504 112.76 18.136 112.76 14.52C112.76 10.904 115.225 8.56799 118.489 8.56799C121.753 8.56799 124.185 10.904 124.185 14.52C124.185 18.136 121.753 20.504 118.489 20.504Z"
          fill="white"
        />
        <path
          d="M140.113 19.8C139.473 20.312 138.609 20.6 137.713 20.6C136.017 20.6 135.057 19.576 135.057 17.752V8.56799H139.921V6.03999H135.057V2.32799H131.985V6.03999H129.105V8.56799H131.985V17.88C131.985 21.304 133.937 23.192 137.361 23.192C138.737 23.192 140.145 22.808 141.073 22.008L140.113 19.8Z"
          fill="white"
        />
        <path
          d="M151.488 23.192C156.576 23.192 160.288 19.576 160.288 14.52C160.288 9.46399 156.576 5.87999 151.488 5.87999C146.4 5.87999 142.656 9.46399 142.656 14.52C142.656 19.576 146.4 23.192 151.488 23.192ZM151.488 20.504C148.224 20.504 145.76 18.136 145.76 14.52C145.76 10.904 148.224 8.56799 151.488 8.56799C154.752 8.56799 157.184 10.904 157.184 14.52C157.184 18.136 154.752 20.504 151.488 20.504Z"
          fill="white"
        />
        <path
          d="M167.481 8.88799V6.03999H164.537V23H167.609V14.552C167.609 10.84 169.657 8.82399 172.953 8.82399C173.177 8.82399 173.401 8.82399 173.657 8.85599V5.87999C170.681 5.87999 168.569 6.90399 167.481 8.88799Z"
          fill="white"
        />
        <path
          d="M182.432 23.192C186.944 23.192 189.76 21.24 189.76 18.168C189.76 11.576 179.008 14.84 179.008 10.84C179.008 9.49599 180.32 8.50399 183.008 8.50399C184.672 8.50399 186.368 8.85599 187.904 9.84799L189.216 7.41599C187.744 6.45599 185.248 5.87999 183.04 5.87999C178.688 5.87999 175.968 7.92799 175.968 10.968C175.968 17.72 186.688 14.424 186.688 18.232C186.688 19.672 185.504 20.536 182.656 20.536C180.448 20.536 178.144 19.8 176.704 18.776L175.424 21.208C176.832 22.328 179.616 23.192 182.432 23.192Z"
          fill="white"
        />
      </svg>
      <div className="flex mx-auto pt-60 w-fit items-center z-10">
        <motion.div
          className="w-fit"
          // animate={{ rotate: "360" }}
          // initial={{ rotate: "0" }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2 }}

          // transition={Infinity}
        >
          <svg
            className="md:w-[45px] w-[24px]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
            />
          </svg>
        </motion.div>

        <h1 className="text-center pl-2 text-lg md:text-2xl ">
          Website under construction...
        </h1>
      </div>
      <div className="overflow-hidden  w-full   absolute bottom-0 h-[110vh] grid">
        <motion.div
          className="w-fit  grid-area: 1 / 1 / 2 / 2; "
          initial={{ x: "-100%", y: "-27%", scale: 0 }}
          animate={{ x: "200%", y: "285%", scale: 1 }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <img src={MTCcar} alt="MTC Car" />
        </motion.div>
        <motion.div
          className="w-fit  grid-area: 1 / 1 / 2 / 2;"
          initial={{ x: "-100%", y: "-40%", scale: 0 }}
          animate={{ x: "160%", y: "185%", scale: 1 }}
          transition={{ repeat: Infinity, duration: 4, delay: 1 }}
        >
          <img src={MTCcarWhite} alt="MTC Car White" />
        </motion.div>
        <motion.div
          className="w-fit  grid-area: 1 / 1 / 2 / 2;"
          initial={{ x: "-100%", y: "-40%", scale: 0 }}
          animate={{ x: "80%", y: "80%", scale: 1 }}
          transition={{ repeat: Infinity, duration: 4, delay: 2.5 }}
        >
          <img src={MTCcarBlue} alt="MTC Car Blue" />
        </motion.div>
      </div>
    </header>
  );
};
export default UnderConstruction;
