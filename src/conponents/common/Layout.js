import { React, useContext, useEffect, useState } from "react";
import MyContext from "../../Context";

const Layout = ({ children, handleNextClick, handlePrevClick }) => {
  const {
    navigation,
    setnavigation,
    uploadedImage,
    userDetails,
    nextBtnShakingAnime,
    setnextBtnShakingAnime,
    settypewriterEffect,
  } = useContext(MyContext);
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Check if any input element is currently focused
      const isInputFocused = document.activeElement.tagName === "INPUT";
      if (e.key === "Enter") {
        {
          navigation !== "/ReportCompleted" && handleNextClick();
        }
      }
      if (!isInputFocused) {
        if (e.key === "ArrowRight" || e.key === "Enter") {
          {
            navigation !== "/ReportCompleted" && handleNextClick();
          }
        } else if (e.key === "ArrowLeft" || e.key === "Backspace") {
          {
            navigation !== "/" && handlePrevClick();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    navigation,
    userDetails,
    uploadedImage,
    nextBtnShakingAnime,
    setnextBtnShakingAnime,
    settypewriterEffect,
  ]);

  const [TranslateAnimationPrev, setsetTranslateAnimationPrev] = useState(
    "xl:translate-x-[-100px] 3xl:translate-x-[-120px] md:translate-x-[-80px] xsm:translate-x-[-60px]"
  );
  const [TranslateAnimationNext, setsetTranslateAnimationNext] = useState(
    "xl:translate-x-[100px] 3xl:translate-x-[120px] md:translate-x-[80px] xsm:translate-x-[60px]"
  );
  const [Navbar, setNavbar] = useState(
    localStorage.getItem("navbarWidth") || 0
  );
  useEffect(() => {
    let newWidth = 0;
    if (navigation == "/PersonalData") {
      newWidth = 6.2;
    } else if (navigation == "/ImageUpload") {
      newWidth = 48;
    } else if (navigation == "/InfoChecking") {
      newWidth = 50;
    } else if (navigation == "/ReportFormatting") {
      newWidth = 69;
    } else if (navigation == "/ReportCompleted") {
      newWidth = 90;
    }
    setNavbar(newWidth);
    localStorage.setItem("navbarWidth", newWidth.toString());
  }, [navigation]);
  useEffect(() => {
    setsetTranslateAnimationPrev("translate-x-[0px]");
    setsetTranslateAnimationNext("translate-x-[0px]");
  }, []);

  return (
    <div
      className={`${
        navigation === "/ReportCompleted" &&
        "relative  xl:h-[100vh] md:h-full xsm:h-[100%] w-full"
      } overflow-hidden pixelated `}
    >
      <div className="pixelated-div absolute z-[-50] w-full h-full">
        <img
          src={uploadedImage}
          alt=""
          className={
            navigation == "/ReportCompleted"
              ? " w-full pixelated-image"
              : "hidden"
          }
        />
      </div>
      <div
        className={`${
          navigation === "/"
            ? "xl:h-[10vh]  xsm:pb-[46px] "
            : " xl:h-[10.5vh] xsm:pb-[20px] md:pb-[15px]"
        } ${
          navigation === "/ReportCompleted"
            ? "border-[#FFF]  border-opacity-[0.2] "
            : "border-[#7D828E/15]"
        } border-solid ${
          navigation === "/"
            ? " md:absolute"
            : "xl:border-b-[1.5px] xsm:border-b-[1px]"
        } xsm:flex xl:hidden w-full     justify-center md:pt-[21px] xsm:pt-[30px] `}
      >
        <div
          className={` bg-white PPNeue500   md:max-w-[507.7px] xsm:max-w-[300px] justify-center w-full 3xl:h-[50px] xsm:h-[44px] flex `}
        >
          <div className="flex items-center md:py-[17px] md:px-[18px] xsm:py-[20px] xsm:px-[20px] border-b-[1px] border-t-[1px]   border-l-[1px]  border-r-[1px] border-solid border-[#1212121A] cursor-pointer">
            <img src="/img/HeaderBars.svg" alt="" />
          </div>
          <div className="flex items-center  md:pl-[21px] md:pr-[23px] xsm:pl-[20px] xsm:pr-[15px] xsm:pt-[8px] xsm:pb-[10px]  border-b-[1px]   border-t-[1px] border-r-[1px]   border-solid border-[#1212121A] cursor-pointer">
            <img
              src="/img/QOVES.svg"
              alt=""
              className={` md:w-[71px] md:h-[15px]  xsm:w-[81px] xsm:h-[26px]`}
            />
          </div>
          <div className="flex items-center  md:pl-[21px] md:pr-[22px] md:py-[11px] xsm:pl-[20px] xsm:pr-[20px] xsm:py-[13px] border-b-[1px]  border-t-[1px]  border-r-[1px]  border-solid border-[#1212121A] cursor-pointer">
            <div className="flex md:gap-[6.8px] xsm:gap-[9px] items-center">
              <img
                src="/img/HeaderLock.svg"
                alt=""
                className={`md:w-[10px] md:h-[14px] xsm:w-[13px] xsm:h-[18px] mb-[1.5px]`}
              />
              <p className=" md:text-[16px] md:leading-[18px] xsm:text-[16px] xsm:leading-[18px] font-[500] PPNeue500">
                Cart (0)
              </p>
            </div>
          </div>
          <div className=" md:flex xsm:hidden items-center px-[16px] py-[11px]  border-b-[1px]  border-t-[1px] border-solid border-[#1212121A] cursor-pointer">
            <p className="text-[14px] leading-[18px]  font-[500]">
              Free facial assessment
            </p>
          </div>
          <div className="md:flex xsm:hidden items-center py-[16px]  pr-[16px] border-b-[1px] border-t-[1px]  border-r-[1px] border-solid border-[#1212121A] cursor-pointer">
            <div className="w-[1px] h-[24px]  bg-[#1212121A]"></div>
            <img
              src="/img/HeaderArrowxl.svg"
              alt=""
              className="flex pl-[16px]"
            />
          </div>
        </div>
      </div>
      <div
        className={` w-full  ${
          navigation === "/" ? "h-[10vh]" : " xl:h-[10vh] md:h-[7.8vh] "
        } xsm:hidden xl:flex xl:border-b-[1.5px] md:border-b-[1px]  border-solid ${
          navigation === "/ReportCompleted"
            ? "border-[#FFF]  border-opacity-[0.2]"
            : "border-[#7D828E/15]"
        } 3xl:pt-[21px] xl:pt-[10px] `}
      >
        <div className="xl:bg-white PPNeue500  3xl:w-fit xl:w-fit justify-center w-full 3xl:h-[50px] xl:h-[40px] flex mx-auto">
          <div className="flex items-center 3xl:py-[18px] 3xl:px-[22px] xl:py-[17px] xl:px-[18px]  3xl:border-b-[1.5px] xl:border-b-[1px]  xl:border-t-[1px] 3xl:border-t-[1.5px]  xl:border-l-[1px]  3xl:border-l-[1.5px]  3xl:border-r-[1.5px] xl:border-r-[1px] border-solid border-[#1212121A] cursor-pointer">
            <img src="/img/HeaderBars.svg" alt="" />
          </div>
          <div className="flex items-center 3xl:pl-[16px] 3xl:pr-[18px] xl:pl-[21px] xl:pr-[23px]  xl:border-b-[1px]  3xl:border-b-[1.5px]  3xl:border-t-[1.5px]  xl:border-t-[1px] xl:border-r-[1px]  3xl:border-r-[1.5px]  border-solid border-[#1212121A] cursor-pointer">
            <img
              src="/img/QOVES.svg"
              alt=""
              className={`3xl:w-[81px] 3xl:h-[26px] xl:w-[71px] xl:h-[15px]`}
            />
          </div>
          <div className="flex items-center 3xl:pl-[21px] 3xl:pr-[22px] 3xl:py-[11px]  xl:pl-[21px] xl:pr-[22px] xl:py-[11px]   3xl:border-b-[1.5px]  3xl:border-t-[1.5px]  3xl:border-r-[1.5px]  xl:border-b-[1px]  xl:border-t-[1px]  xl:border-r-[1px]  border-solid border-[#1212121A] cursor-pointer">
            <div className="flex 3xl:gap-[9px] xl:gap-[6.8px] items-center">
              <img
                src="/img/HeaderLock.svg"
                alt=""
                className={`3xl:w-[13px] 3xl:h-[18px] xl:w-[10px] xl:h-[14px] mb-[2px]`}
              />
              <p className="3xl:text-[18px] 3xl:leading-[21px] xl:text-[14px] xl:leading-[18px] font-[500]">
                Cart (0)
              </p>
            </div>
          </div>
          <div className="flex items-center 3xl:px-[16px] 3xl:py-[11px]  xl:px-[16px] xl:py-[11px] 3xl:border-b-[1.5px]  3xl:border-t-[1.5px] xl:border-b-[1px]  xl:border-t-[1px] border-solid border-[#1212121A] cursor-pointer">
            <p className="3xl:text-[18px] 3xl:leading-[21px] xl:text-[14px] xl:leading-[18px]  font-[500]">
              Free facial assessment
            </p>
          </div>
          <div className="flex items-center 3xl:py-[16px] 3xl:pr-[16px] xl:py-[16px]  xl:pr-[16px]  3xl:border-b-[1.5px]  3xl:border-t-[1.5px]  3xl:border-r-[1.5px]  xl:border-b-[1px]  xl:border-t-[1px]  xl:border-r-[1px] border-solid border-[#1212121A] cursor-pointer">
            <div className="w-[1px] h-[24px] 3xl:mr-[16px] bg-[#1212121A]"></div>
            <img
              src="/img/HeaderArrow.svg"
              alt=""
              className="3xl:flex xl:hidden"
            />
            <img
              src="/img/HeaderArrowxl.svg"
              alt=""
              className="3xl:hidden xl:flex xl:pl-[16px]"
            />
          </div>
        </div>
      </div>
      <div className={` w-full flex md:flex-row xsm:flex-col justify-center `}>
        <div
          className={` xl:max-w-[9.375%] xl:flex xsm:hidden  3xl:pl-[20px] xl:pl-[15px] w-full  xl:border-r-[1px] 3xl:border-r-[1.5px] ${
            navigation === "/ReportCompleted"
              ? "border-[#FFF]  border-opacity-[0.2]"
              : "border-[#7D828E/15]"
          } flex items-center  `}
        >
          <button
            onClick={navigation !== "/" && handlePrevClick}
            className={`group ${TranslateAnimationPrev} ease-linear duration-[0.6s] flex justify-start items-center h-[24px]  xl:pl-[7px]  3xl:gap-[7px] xl:gap-[10px] max-w-[68px] w-full `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              className={` 3xl:w-[11.333px] 3xl:h-[8px] xl:h-[7px] xl:w-[10px] group-hover:xl:scale-[2.3] group-hover:3xl:scale-[2.5] ease-in duration-300`}
              height="10"
              viewBox="0 0 14 10"
              fill="none"
            >
              <path
                d="M13.3333 5H2M2 5L6 1M2 5L6 9"
                stroke={
                  navigation == "/" || navigation == "/ReportCompleted"
                    ? "#b5b3b3"
                    : "#121212"
                }
                stroke-width="1.5"
              />
            </svg>
            <p
              className={`${
                navigation == "/" || navigation == "/ReportCompleted"
                  ? "text-[#b5b3b3]"
                  : ""
              } PPNeue500 3xl:text-[14px] xl:text-[11px] font-[500] 3xl:leading-[21px] xl:leading-[13px] uppercase group-hover:3xl:translate-x-[18px] group-hover:xl:translate-x-[14px] ease-in duration-300 `}
            >
              prev
            </p>
          </button>{" "}
        </div>
        <div
          className={`3xl:max-w-[80.4%] xl:max-w-[80.4%] md:max-w-[100%] w-full  ${
            navigation === "/"
              ? "xl:h-auto viewport1 "
              : navigation === "/PersonalData"
              ? "xl:h-auto  viewport2 "
              : navigation === "/ImageUpload"
              ? "xl:h-[79vh]  viewport3  "
              : navigation === "/InfoChecking"
              ? "xl:h-auto  viewport4 "
              : navigation === "/ReportFormatting" && "xl:h-auto  viewport5 "
          }   ${
            navigation === "/ReportCompleted" &&
            "xl:h-auto  viewport6  xsm:h-[77.6vh]"
          }`}
        >
          {children}
        </div>
        <div
          className={` xl:max-w-[9.375%] xl:flex xsm:hidden w-full 3xl:pr-[23px] xl:pr-[15px]  3xl:border-l-[1.5px] xl:border-l-[1px] ${
            navigation === "/ReportCompleted"
              ? "border-[#FFF]  border-opacity-[0.2]"
              : "border-[#7D828E/15]"
          } flex items-center justify-end  `}
        >
          <button
            className={`${
              nextBtnShakingAnime == 2 && "shake"
            } group flex justify-end items-center h-[24px] 3xl:gap-[7px] xl:gap-[10px] xl:pr-[9px] max-w-[68px] w-full ${TranslateAnimationNext} ease-linear duration-[0.6s] `}
            onClick={handleNextClick}
          >
            <p
              className={`${
                Object.values(userDetails).some((value) => value === "") &&
                navigation == "/PersonalData" &&
                "text-[#b5b3b3] duration-0  transition-none"
              } ${
                uploadedImage == "" &&
                navigation == "/ImageUpload" &&
                "text-[#b5b3b3] duration-0  transition-none"
              } PPNeue500 3xl:text-[14px] xl:text-[11px] font-[500] 3xl:leading-[21px] xl:leading-[13px] uppercase  ${
                !Object.values(userDetails).some((value) => value === "") &&
                navigation == "/PersonalData" &&
                "group-hover:3xl:translate-x-[-18px] group-hover:xl:translate-x-[-14px] duration-[0.3s]"
              } ${
                !uploadedImage == "" &&
                navigation == "/ImageUpload" &&
                "group-hover:3xl:translate-x-[-18px] group-hover:xl:translate-x-[-14px] "
              }${
                navigation == "/" ||
                navigation == "/InfoChecking" ||
                navigation == "/ReportFormatting" ||
                navigation == "/ReportCompleted"
                  ? "group-hover:3xl:translate-x-[-18px] group-hover:xl:translate-x-[-14px]"
                  : ""
              } ${
                navigation == "/ReportCompleted" && "text-[#b5b3b3]"
              } ease-in duration-300`}
            >
              next
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`3xl:w-[11.333px] 3xl:h-[8px] xl:h-[7px] xl:w-[10px] ${
                (uploadedImage == "" && navigation == "/ImageUpload") ||
                (!Object.values(userDetails).some((value) => value === "")
                  ? "group-hover:xl:scale-[2.3] group-hover:3xl:scale-[2.5]"
                  : "")
              }${
                navigation == "/" &&
                "group-hover:xl:scale-[2.3] group-hover:3xl:scale-[2.5]"
              } ease-in duration-300`}
              viewBox="0 0 14 10"
              fill="none"
            >
              <path
                d="M0.666667 5H12M12 5L8 1M12 5L8 9"
                stroke={
                  (Object.values(userDetails).some((value) => value === "") &&
                    navigation == "/PersonalData") ||
                  (uploadedImage == "" && navigation == "/ImageUpload") ||
                  navigation == "/ReportCompleted"
                    ? "#b5b3b3"
                    : "#121212"
                }
                stroke-width="1.5"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={` ${navigation === "/" ? "" : ""} ${
          navigation === "/ReportCompleted"
            ? "border-[#FFF] bg-transparent"
            : "bg-white border-[#7D828E/15] "
        } w-full  bg-transparent  xsm:flex justify-between items-center xl:hidden  md:px-[24px] md:pt-[22px] md:pb-[18px]  ${
          navigation === "/"
            ? "xsm:pt-[13px] xsm:pb-[13px] xsm:px-[13px]"
            : "xsm:pt-[14px] xsm:pb-[13px] xsm:px-[20px]"
        }  border-t-[1px] border-solid  md:border-opacity-[0.2] xsm:border-opacity-[0.15] xl:border-opacity-[0.15] flex justify-between`}
      >
        <div
          onClick={navigation !== "/" && handlePrevClick}
          className={`group flex items-center  gap-[6px] md:h-[24px] `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[7px] w-[10px] group-hover:xsm:scale-[2.6] group-hover:md:scale-[2.8] ease-in duration-300"
            viewBox="0 0 11 9"
            fill="none"
          >
            <path
              d="M11 4.5H1M1 4.5L4.52941 1M1 4.5L4.52941 8"
              stroke="#121212"
            />
          </svg>
          <button className="flex justify-start   max-w-[68px] w-full">
            <p className="text-[13px] font-[500] leading-[13px] uppercase  group-hover:md:translate-x-[14px] group-hover:xsm:translate-x-[10px] ease-in duration-300 PPNeue500">
              prev
            </p>
          </button>
        </div>
        <div
          className="group flex items-center md:h-[24px] gap-[6px] cursor-pointer"
          onClick={handleNextClick}
        >
          <p className="text-[13px] font-[500] leading-[13px] uppercase group-hover:md:translate-x-[-18px] group-hover:xsm:translate-x-[-14px] ease-in duration-300 PPNeue500">
            next
          </p>
          <button className="flex justify-end items-center  gap-[10px] xl:pr-[9px] max-w-[68px] w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[7px] w-[10px] group-hover:xsm:scale-[2.6] group-hover:md:scale-[2.8] ease-in duration-300"
              viewBox="0 0 14 10"
              fill="none"
            >
              <path
                d="M0.666667 5H12M12 5L8 1M12 5L8 9"
                stroke="#121212"
                stroke-width="1.5"
              />
            </svg>
          </button>
        </div>
      </div>
      {navigation !== "/" && (
        <div
          className={`w-full  bg-transparent md:bottom-0 md:border-t-[1px] 3xl:border-t-[1.5px] border-solid ${
            navigation === "/ReportCompleted"
              ? "border-[#FFF]  border-opacity-[0.2] xsm:pb-[9px]"
              : "border-[#7D828E/15]"
          }  xsm:pb-[9px] 3xl:h-[10.5vh] xl:h-[10.5vh] md:pb-[16px]  3xl:px-[24px] xl:px-[16px] md:pl-[24px] md:pr-[24px] xsm:pl-[14px] xsm:pr-[14px] 3xl:pt-[30px] xl:pt-[15px] md:pt-[22px]  flex flex-col 3xl:gap-[11px] xl:gap-[10px] xsm:gap-[6px] md:gap-[15px] xsm:border-t-[1px] xsm:pt-[19px]    `}
        >
          <div
            className={`relative  xl:max-w-[99.8%] md:max-w-[99.8%] xsm:max-w-[100%] w-full  ${
              navigation === "/ReportCompleted"
                ? "bg-[#FFF]"
                : "bg-[#7D828E] bg-opacity-[0.1]"
            } 3xl:h-[24px] xl:h-[18px] md:h-[22px] xsm:h-[22px] `}
          >
            {navigation !== "/ReportCompleted" && (
              <div>
                <div className="absolute  3xl:right-[7.2%] xl:right-[15%] md:right-[20.7%] xsm:right-[35.73%] 3xl:w-[1.5px] xsm:w-[1px] 3xl:h-[23px] xl:h-[18px]  xsm:h-[22px]  bg-[#758084] opacity-[0.2]"></div>
                <div className="absolute xl:right-[50.4%] md:right-[52.4%] 3xl:w-[1.5px] md:w-[1px] 3xl:h-[23px] xl:h-[18px] md:h-[22px] xsm:h-[22px] bg-[#758084] opacity-[0.2]"></div>
              </div>
            )}
            <div
              className={` w-full  ${
                navigation === "/ReportCompleted"
                  ? "bg-[#FFF]"
                  : "bg-[#7D828E] "
              } 3xl:h-[24px] xl:h-[18px] md:h-[22px]  xsm:h-[22px] flex items-center`}
              style={{
                maxWidth: `${Navbar}%`, // Apply the width
                transition: "max-width 1.2s ease-out", // Add a transition effect
              }}
            >
              <p
                className={`text-[13px] font-[400] leading-[16px]  ${
                  navigation !== "/ReportCompleted"
                    ? "text-[#FFF]"
                    : "text-[#7D828E] "
                } 3xl:pl-[10px] xl:pl-[6px] md:pl-[6px] xsm:pl-[7px]`}
              >
                {" "}
                {navigation === "/ReportCompleted"
                  ? "100%"
                  : navigation === "/PersonalData"
                  ? "13%"
                  : navigation === "/ImageUpload"
                  ? "48%"
                  : navigation === "/InfoChecking"
                  ? "50%"
                  : navigation === "/ReportFormatting" && "59%"}
              </p>
            </div>
          </div>
          <div className="md:max-w-[99.8%] xsm:max-w-[100%] w-full  3xl:h-[20px] xl:h-[14px] md:h-[14px] xsm:h-[20px] 3xl:text-[13px] xl:text-[10px] md:text-[12px] xsm:text-[11px] font-[400] 3xl:leading-[16px] xl:leading-[12px] xsm:leading-[13px] flex justify-between">
            <div
              className={`xl:max-w-[152px] md:max-w-[252px] w-full 3xl:h-[20px] xl:h-[14px] flex items-center justify-start gap-[9px]  ${
                navigation === "/ReportCompleted"
                  ? "text-[#FFF] opacity-[0.8]"
                  : "text-[#7D828E] "
              }`}
            >
              <span>[ 001 ]</span>
              <span className=" uppercase">personal data</span>
            </div>
            <div
              className={`xl:max-w-[190px] md:max-w-[210px] w-full 3xl:h-[20px] xl:h-[14px] flex items-center 3xl:justify-center xl:justify-center  xsm:justify-end 3xl:pl-[8px] xl:pl-[60px] gap-[9px]  ${
                navigation === "/ReportCompleted"
                  ? "text-[#FFF] opacity-[0.8]"
                  : "text-[#7D828E] "
              }`}
            >
              <span className="">[ 002 ]</span>
              <span className=" uppercase   md:pr-[14px]">upload image</span>
            </div>
            <div
              className={`xl:max-w-[101px] md:max-w-[221px] xsm:hidden  md:flex w-full 3xl:h-[20px] xl:h-[14px] flex items-center xl:justify-end  md:justify-center gap-[9px]  ${
                navigation === "/ReportCompleted"
                  ? "text-[#FFF] opacity-[0.8]"
                  : "text-[#7D828E] "
              }`}
            >
              <span>[ 003 ]</span>
              <span className=" uppercase">finish</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
