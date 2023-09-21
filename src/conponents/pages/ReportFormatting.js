import React from "react";
import Layout from "../common/Layout";
import Typewriter from "typewriter-effect";

const ReportFormatting = (props) => {
  const reportDivs = [
    {
      src: "/img/FormattingDiv1.png",
      classes:
        "absolute 3xl:w-[60px] 3xl:h-[60px] xl:w-[40px] md:w-[66px] md:h-[66px] xsm:w-[50px] xsm:h-[50px] xl:h-[40px] top-0 xl:left-[84px] md:left-[128px] xsm:left-0 ",
    },
    {
      src: "/img/FormattingDiv2.png",
      classes:
        "absolute 3xl:w-[60px] 3xl:h-[60px] xl:w-[40px] md:w-[66px] md:h-[66px] xsm:w-[50px] xsm:h-[50px] xl:h-[40px] 3xl:top-[60px] xl:top-[40px] 3xl:left-[143px] xl:left-[124px] md:left-[188px] md:top-[60px] xsm:top-[51px] xsm:left-[48px]",
    },
    {
      src: "/img/FormattingDiv3.png",
      classes:
        "absolute 3xl:w-[60px] 3xl:h-[60px] xl:w-[40px] md:w-[66px] md:h-[66px] xsm:w-[50px] xsm:h-[50px] xl:h-[40px] 3xl:top-[110px] xl:top-[70px]  md:top-[90px] 3xl:right-[272px] xl:right-[200px] md:right-[20px] xsm:right-[40px] xsm:top-[130px] ",
    },
    {
      src: "/img/FormattingDiv4.png",
      classes:
        "absolute 3xl:w-[60px] 3xl:h-[60px] xl:w-[40px] md:w-[66px] md:h-[66px] xsm:w-[50px] xsm:h-[50px] xl:h-[40px] xl:bottom-0 md:bottom-[250px] left-[0px] xsm:bottom-[100px]",
    },
    {
      src: "/img/FormattingDiv5.png",
      classes:
        "absolute 3xl:w-[60px] 3xl:h-[60px] xl:w-[40px] md:w-[66px] md:h-[66px] xsm:w-[50px] xsm:h-[50px] xl:h-[40px] 3xl:bottom-[80px] xl:bottom-[50px] 3xl:left-[313px] xl:left-[200px] md:bottom-[145px] xsm:bottom-[15px]  md:left-[220px] xsm:left-[85px]",
    },
    {
      src: "/img/FormattingDiv6.png",
      classes:
        "absolute 3xl:w-[60px] 3xl:h-[60px] xl:w-[40px] md:w-[66px] md:h-[66px] xsm:w-[0px] xsm:h-[0px] xl:h-[40px] 3xl:bottom-[100px] xl:bottom-[65px] 3xl:right-[302px] xl:right-[220px] md:bottom-[0px]  md:right-[0px]",
    },
    {
      src: "/img/FormattingDiv7.png",
      classes:
        "absolute 3xl:w-[60px] 3xl:h-[60px] xl:w-[40px] md:w-[66px] md:h-[66px] xsm:w-[50px] xsm:h-[50px] xl:h-[40px] 3xl:bottom-[60px] xl:bottom-[40px] 3xl:right-[60px] xl:right-[40px]  md:bottom-[130px] xsm:bottom-[50px]  md:right-[260px] xsm:right-[50px]",
    },
    {
      src: "/img/FormattingDiv8.png",
      classes:
        "absolute 3xl:w-[60px] 3xl:h-[60px] xl:w-[40px] md:w-[66px] md:h-[66px] xsm:w-[50px] xsm:h-[50px] xl:h-[40px] xl:bottom-0 md:bottom-[70px] xl:right-[0px] md:right-[200px] xsm:right-0 xsm:bottom-0",
    },
  ];
  return (
    <Layout
      handleNextClick={props.handleNextClick}
      handlePrevClick={props.handlePrevClick}
    >
      <div className=" xl:h-[79vh] h-full  flex justify-center items-center md:pt-0 ">
        <div className="relative 3xl:h-[82%] xl:h-[78.4%] mdHeightRf xsmHeightRf  xl:pt-[0px] xl:pb-[0px] md:pt-[291px] md:pb-[267px] xsm:pt-[177px] xsm:pb-[173px] 3xl:max-w-[88.8%] xl:max-w-[91.8%]  md:max-w-[93%] w-full flex items-center justify-center md:mt-[30px] md:mb-[20px]  xsm:mt-[83px] xsm:mb-[45px]">
          <div className="3xl:w-[723px]  3xl:h-[327px] xl:w-[440px]  xl:h-[192px] md:w-[440px]  md:h-[192px] xsm:w-[280px]  xsm:h-[112px] flex items-start text-center italic 3xl:text-[150px] xl:text-[96px] md:text-[96px] xsm:text-[60px] font-[100] 3xl:leading-[160px] md:leading-[96px]  xsm:leading-[60px] text-[#233137] dentonCond">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Preparing Your Report...").start();
              }}
              options={{
                cursor: "",
                delay: 70, // Set cursor to an empty string to hide it
              }}
              className="hide-cursor" // Add a CSS class to the Typewriter component
            />
          </div>
          {reportDivs.map((i, index) => (
            <div className={`${i.classes}`} key={index + "report"}>
              <img src={i.src} alt="" />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ReportFormatting;
