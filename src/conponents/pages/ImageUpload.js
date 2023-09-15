import { useState } from "react";
import React from "react";
import Layout from "../common/Layout";
import TextReveal from "../Animations/TextReveal";

const ImageUpload = (props) => {
  const [AddImageHover, setAddImageHover] = useState(false);
  const [checkingUploadImage, setcheckingUploadImage] = useState(false);
  const Recommendations = [
    "Remove your glasses",
    "Look directly at camera",
    "Pull hair back",
    "Keep neutral expression",
  ];
  const sampleImages = [
    {
      src: "/img/UploadImage_1.png",
      extraClasses:
        "3xl:w-[136px] md:w-[70px] xsm:w-[43px] w-full absolute xl:top-[14.1%] xl:left-[30px] md:top-[10.41%] md:left-[19.4%]  xsm:left-[30px] xsm:bottom-[108px] ",
    },
    {
      src: "/img/UploadImage_2.png",
      extraClasses:
        "3xl:w-[54px] md:w-[29px] xsm:w-[0px] w-full absolute xl:top-[8%] xl:left-[166px] md:top-[4.16%] md:left-[28.5%]",
    },
    {
      src: "/img/UploadImage_3.png",
      extraClasses:
        "3xl:w-[89px] md:w-[58px] xsm:w-[68px] w-full absolute xl:top-[9.2%] xl:right-[13.3%] md:top-[4.16%] md:right-[23%] xsm:top-[19px] xsm:right-[8px]",
    },
    {
      src: "/img/UploadImage_4.png",
      extraClasses:
        "3xl:w-[87px] md:w-[68px] xsm:w-[0px] w-full absolute  xl:bottom-[30%] xl:right-[27px] md:bottom-[12.5%] md:right-[21.6%]",
    },
    {
      src: "/img/UploadImage_5.png",
      extraClasses:
        "3xl:w-[78px] md:w-[39px] xsm:w-[39px] w-full absolute  xl:bottom-[5.1%] xl:right-[269px] md:bottom-[4.16%] md:right-[33%] xsm:bottom-[32px] xsm:right-[14px]",
    },
    {
      src: "/img/UploadImage_6.png",
      extraClasses:
        "3xl:w-[84px] md:w-[57px] xsm:w-[39px] w-full absolute xl:bottom-[27.5%] xl:left-[8.2%] md:bottom-[20.8%] md:left-[23%]  xsm:left-[11px] xsm:bottom-[57px] ",
    },
  ];
  return (
    <Layout
      handleNextClick={props.handleNextClick}
      handlePrevClick={props.handlePrevClick}
    >
      <div className="flex xl:flex-row md:flex-col-reverse xsm:flex-col h-full justify-center items-center">
        <div className="3xl:max-w-[49.9%] xl:h-[79vh] mdHeighti xsmHeighti w-full flex flex-col ">
          <div className="  3xl:pt-[99px] xl:pt-[58px] xsm:h-[44.44%] 3xl:pl-[74px] xl:pl-[49px]  md:pt-[31px] md:pb-[36px] md:pl-[24px] xsm:pt-[46px] xsm:pb-[22px] xsm:pl-[14px]  w-full xl:border-b-[1.5px] md:border-b-[0px] xsm:border-b-[1px] border-solid border-[#7D828E] border-opacity-[0.15] ">
            <TextReveal
              DivClases={
                "overflow-y-hidden 3xl:h-[101px] xl:h-[72px] md:h-[36px] xsm:h-[52px]"
              }
              translation={
                "3xl:translate-y-[130px] xl:translate-y-[100px] md:translate-y-[60px] xsm:translate-y-[90px]"
              }
            >
              <h1 className="3xl:max-w-[301px] xl:max-w-[160px] md:max-w-[100%] xsm:max-w-[141px] w-full 3xl:text-[52px] xl:text-[36px] 3xl:leading-[50px] md:text-[34px] md:leading-[36px] xsm:text-[30px] xsm:leading-[26px] xl:leading-[36px] md:tracking-[-1.3px] xsm:tracking-[-0.6px] text-[#121212] font-[400] PPNeue">
                Upload your image
              </h1>
            </TextReveal>
          </div>
          <div className="3xl:h-[65%] xl:h-[66.66%] md:h-auto xsm:h-[44.44%]  3xl:pt-[148px] xl:pt-[11.6vh]  xl:pl-[51px] md:pl-[24px] 3xl:pl-[76px] text-[#7D828E] md:pb-[104px] md:border-b-[0px]  xsm:border-b-[1px] border-solid border-[#7D828E] border-opacity-[0.15]">
            <TextReveal
              DivClases={
                "overflow-y-hidden 3xl:h-[228px] xl:h-[198px] md:h-[113px] xsm:h-[117px]"
              }
              translation={
                "3xl:translate-y-[270px] xl:translate-y-[220px] md:translate-y-[140px] xsm:translate-y-[140px]"
              }
            >
              <div className="3xl:max-w-[353px] xl:max-w-[245px] md:max-w-[520px] w-full 3xl:h-[228px] xl:h-[198px] font-[400] 3xl:text-[24px] xl:text-[18px] 3xl:leading-[28px] flex xl:flex-col md:flex-row xsm:flex-col xl:gap-[24px] md:gap-0 xsm:gap-[8px] xl:justify-start md:justify-between xsm:pl-[15px] md:pl-[0px] xsm:pt-[33px] xsm:pb-[26px] md:pt-0 md:pb-0 PPNeue">
                <h1 className="3xl:text-[24px] xl:text-[18px] md:text-[20px] xsm:text-[20px] 3xl:leading-[28px] xl:leading-[20px] md:leading-[22px]  xsm:leading-[22px]">
                  Recommendations <br /> for a photo:
                </h1>
                <div className="hidden  3xl:flex items-center gap-[6px]">
                  <svg
                    className="3xl:mt-[5px] xl:mt-[8px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="127"
                    viewBox="0 0 6 127"
                    fill="none"
                  >
                    <rect width="6" height="6" fill="#7D828E" />
                    <rect y="40" width="6" height="6" fill="#7D828E" />
                    <rect y="80" width="6" height="6" fill="#7D828E" />
                    <rect y="121" width="6" height="6" fill="#7D828E" />
                  </svg>
                  <div className="flex flex-col gap-[12px]">
                    {Recommendations.map((i, index) => (
                      <p key={index + "Recomm"}> {i}</p>
                    ))}
                  </div>
                </div>
                <div className="3xl:hidden xsm:flex flex-col xl:gap-[16px] md:gap-[8px]  xsm:gap-[5px]">
                  {Recommendations.map((i, index) => (
                    <div
                      key={index + "Recomm"}
                      className={`flex items-center gap-[7px] text-[18px] leading-[20px] ${
                        i == "Keep neutral expression" && "md:flex xsm:hidden "
                      } ${i == "Pull hair back" && "md:flex xsm:hidden "}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="4"
                        height="4"
                        viewBox="0 0 4 4"
                        fill="none"
                      >
                        <rect width="4" height="4" fill="#7D828E" />
                      </svg>
                      <p>{i}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TextReveal>
          </div>
        </div>
        {checkingUploadImage == false ? (
          <div className="relative xl:max-w-[50.1%] xl:h-[79vh]   xl:pt-[0px] xl:pb-[0px]  xsm:pt-[60px] xsm:pb-[35px] md:pt-[100px] md:pb-[70px]  w-full flex items-center justify-center xl:border-l-[1.5px] md:border-b-[1px]  border-solid border-[#7D828E] border-opacity-[0.15] ">
            {sampleImages.map((i, index) => (
              <img
                key={index + "sample"}
                src={i.src}
                alt=""
                className={`${i.extraClasses}`}
              />
            ))}
            <div
              onClick={() => {
                setcheckingUploadImage(true);
              }}
              className="relative xl:h-[59%] xl:max-w-[50%] md:max-w-[240px] xsm:h-[76.6%] md:h-auto  xsm:max-w-[210px] w-full xl:border-[1.5px] md:border-[1px] xsm:border-[1px] border-solid border-[#C4C6CA] flex flex-col items-center md:justify-end xsm:justify-end xl:gap-[6%] md:gap-[0px] xsm:gap-[10px] md:pt-[33px] md:pb-[18px] xl:pt-[0px] xl:pb-[0px] "
            >
              <div className=" w-full  flex xl:items-end 3xl:items-start justify-center ">
                <img
                  src="/img/Uploading.svg"
                  alt=""
                  className="3xl:max-w-[280px] xl:max-w-[183px] md:max-w-[183px] xsm:max-w-[153px] w-full"
                />
                <div
                  onMouseEnter={() => {
                    setAddImageHover(true);
                  }}
                  onMouseLeave={() => {
                    setAddImageHover(false);
                  }}
                  className="absolute  3xl:bottom-[37%] md:bottom-[34%] 3xl:right-[9%] md:right-[5%] 3xl:h-[46px] xl:h-[40px] 3xl:max-w-[57px] xl:max-w-[57px] md:max-w-[47px] xsm:hidden  w-full  md:flex flex-col"
                >
                  <button
                    onClick={() => {
                      setcheckingUploadImage(true);
                    }}
                    className={`w-full  uppercase 3xl:h-[25px] md:h-[20px] 3xl:max-w-[39px] md:max-w-[33px] xl:max-w-[30px] bg-[#E3E5E7] 3xl:text-[16px] 3xl:leading-[18px] xl:text-[11px] xl:leading-[13px] md:text-[13px] md:leading-[15px] font-[500] tracking-[-0.32px] text-[#121212] ${
                      AddImageHover ? "bg-[#eeeef1]" : "bg-[#E3E5E7]"
                    }`}
                  >
                    add
                  </button>
                  <button
                    onClick={() => {
                      setcheckingUploadImage(true);
                    }}
                    className={`w-full 3xl:max-w-[57px] xl:max-w-[43px] md:max-w-[47px] uppercase 3xl:h-[25px] md:h-[20px] bg-[#E3E5E7] 3xl:text-[16px] 3xl:leading-[18px] xl:text-[11px] xl:leading-[13px] md:text-[13px] md:leading-[15px] font-[500] tracking-[-0.32px] text-[#121212] ${
                      AddImageHover ? "bg-[#eeeef1]" : "bg-[#E3E5E7]"
                    }`}
                  >
                    image
                  </button>
                </div>
              </div>
              <div className="3xl:max-w-[176px] md:max-w-[126px] xsm:max-w-[111px] 3xl:h-[60px] text-[#7D828E] mb-[22px] xl:mt-[6%] md:mt-[0px] ">
                <h1 className="3xl:text-[24px] font-[400] 3xl:leading-[28px] md:text-[20px] xl:text-[18px] xl:leading-[20px] xsm:text-[20px] xsm:leading-[22px]  md:leading-[22px] text-center">
                  Upload image here
                </h1>
              </div>
            </div>
          </div>
        ) : (
          <div className="3xl:max-w-[50.1%] xl:max-w-[50.1%] md:max-w-[100%] xl:h-[79vh] mdHeight2i xsmHeight2i md:pt-[35px] xl:pt-[0px] xl:pb-[0px]  md:pb-[35px] xsm:pt-[60px] xsm:pb-[35px]  w-full flex items-center justify-center xl:border-l-[1.5px] md:border-b-[1px]  border-solid border-[#7D828E] border-opacity-[0.15] ">
            <div className="relative 3xl:h-[59%] xl:h-[73%]   3xl:max-w-[50%] xl:max-w-[70%] md:max-w-[390px]  xsm:max-w-[210px]  w-full xl:border-[1.5px] md:border-[1px] xsm:border-[1px] border-solid border-[#C4C6CA] flex flex-col justify-between xsm:py-[5px] xsm:px-[6px] xsm:gap-[6px] md:gap-0 ">
              <div className="3xl:h-[45px] xl md:h-[40px] xsm:h-[24px]  w-full 3xl:border-b-[1.5px] xsm:border-b-[1px] 3xl:pl-[14px] 3xl:pr-[16px] xl:pl-[10px] md:pr-[10px] md:pl-[10px] xl:pr-[10px] border-dashed border-[#C4C6CA] flex items-center 3xl:justify-center xl:justify-between uppercase">
                <p className="text-[#7D828E] 3xl:text-[16px] 3xl:leading-[18px] 3xl:tracking-[-0.32px] xl:text-[11px] xl:leading-[13px] xsm:text-[13px] xsm:leading-[16px]  md:text-[13px] md:leading-[15px] xl:tracking-[-0.22px]  xsm:tracking-[-0.26px] 3xl:max-w-[77px] xl:max-w-[52px] md:max-w-[70px]  w-full md:flex xsm:hidden">
                  upload //
                </p>
                <p className="text-[#7D828E] 3xl:text-[16px] 3xl:leading-[18px] 3xl:tracking-[-0.32px] xl:text-[11px] xl:leading-[13px] xsm:text-[13px] xsm:leading-[16px]  md:text-[13px] md:leading-[15px] xl:tracking-[-0.22px] xsm:tracking-[-0.26px]  opacity-[0.6] 3xl:max-w-[288px] xl:max-w-[167px] xsm:max-w-[197px] w-full flex justify-end">
                  {" "}
                  image uploaded successfully
                </p>
              </div>
              <div className="xl:max-w-[95%] md:max-w-[95%] xsm:max-w-[100%]  w-full xl:h-[86%] md:h-[83.7%] xsm:h-[85.6%]  mx-auto my-auto flex items-center justify-center">
                <img
                  src="/img/UploadedImage.png"
                  alt=""
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ImageUpload;
