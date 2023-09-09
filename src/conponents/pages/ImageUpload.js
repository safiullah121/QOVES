import { useState } from "react";
import React  from "react";
import Layout from "../common/Layout";

const ImageUpload = () => {
    const [AddImageHover, setAddImageHover] = useState(false);
    const [checkingUploadImage, setcheckingUploadImage] = useState(false);
  const Recommendations = [
    "Remove your glasses",
    "Look directly at camera",
    "Pull hair back",
    "Keep neutral expression",
  ];
  const sampleImages =[
    {src:"/img/UploadImage_1.png" ,extraClasses: "3xl:w-[136px] md:w-[70px] w-full absolute xl:top-[14.1%] xl:left-[30px] md:top-[10.41%] md:left-[19.4%]"},
    {src:"/img/UploadImage_2.png" ,extraClasses: "3xl:w-[54px] md:w-[29px] w-full absolute xl:top-[8%] xl:left-[166px] md:top-[4.16%] md:left-[28.5%]"},
    {src:"/img/UploadImage_3.png" ,extraClasses: "3xl:w-[89px] md:w-[58px] w-full absolute xl:top-[9.2%] xl:right-[13.3%] md:top-[4.16%] md:right-[23%]"},
    {src:"/img/UploadImage_4.png" ,extraClasses: "3xl:w-[87px] md:w-[68px] w-full absolute  xl:bottom-[30%] xl:right-[27px] md:bottom-[12.5%] md:right-[21.6%]"},
    {src:"/img/UploadImage_5.png" ,extraClasses: "3xl:w-[78px] md:w-[39px] w-full absolute  xl:bottom-[5.1%] xl:right-[269px] md:bottom-[4.16%] md:right-[33%]"},
    {src:"/img/UploadImage_6.png" ,extraClasses: "3xl:w-[84px] md:w-[57px] w-full absolute xl:bottom-[27.5%] xl:left-[8.2%] md:bottom-[20.8%] md:left-[23%]"},
  ]
  return (
    <Layout>
      <div className="flex xl:flex-row md:flex-col-reverse">
        <div className="3xl:max-w-[49.9%] xl:h-[79vh] md:h-[31.25vh]  w-full">
          <div className="md:h-[34.1%]  3xl:pt-[99px] xl:pt-[58px] 3xl:pl-[74px] xl:pl-[49px]  md:pt-[31px] md:pb-[36px] md:pl-[24px] w-full xl:border-b-[1.5px] border-solid border-[#7D828E] border-opacity-[0.15]">
            <h1 className="3xl:max-w-[301px] w-full 3xl:text-[52px] xl:text-[36px] 3xl:leading-[50px] md:text-[34px] md:leading-[36px] xl:leading-[36px] tracking-[-1.3px] text-[#121212] font-[400] PPNeue">
              Upload 
              your image
            </h1>
          </div>
          <div className="3xl:h-[65%] 3xl:pt-[148px] xl:pt-[84px]  xl:pl-[51px] md:pl-[24px] 3xl:pl-[76px] text-[#7D828E]">
            <div className="3xl:max-w-[353px] xl:max-w-[245px] md:max-w-[520px] w-full 3xl:h-[228px] xl:h-[198px] font-[400] 3xl:text-[24px] xl:text-[18px] 3xl:leading-[28px] flex xl:flex-col md:flex-row xl:gap-[24px] xl:justify-start md:justify-between PPNeue">
              <h1 className="3xl:text-[24px] xl:text-[18px] md:text-[20px] 3xl:leading-[28px] xl:leading-[20px] md:leading-[22px]">
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
              <div className="3xl:hidden md:flex flex-col xl:gap-[16px] md:gap-[8px]">
                  {Recommendations.map((i, index) => (
                    <div key={index + "Recomm"} className="flex items-center gap-[7px] text-[18px] leading-[20px]  ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
  <rect width="4" height="4" fill="#7D828E"/>
</svg>
                       <p>{i}</p></div>
                  ))}
              </div>
            </div>
          </div>
        </div>
       {checkingUploadImage == false ? <div className="relative xl:max-w-[50.1%] xl:h-[79vh] md:h-[46.8vh] w-full flex xl:items-center md:items-end justify-center xl:border-l-[1.5px] md:border-b-[1px]  border-solid border-[#7D828E] border-opacity-[0.15]">
         {sampleImages.map((i,index)=>(
           <img key={index + 'sample'} src={i.src} alt="" className={`${i.extraClasses}`} /> 
         ))}
         <div className="relative xl:h-[59%] md:h-[65.5%] xl:max-w-[50%] md:max-w-[31.25%] w-full xl:border-[1.5px] md:border-[1px] border-solid border-[#C4C6CA] flex flex-col items-center justify-end gap-[6%] md:mb-[70px] xl:mb-[0px]">
           <div className=" xl:max-w-[300px] w-full xl:h-[260px] md:h-[183px] md:max-w-[183px] flex xl:items-end 3xl:items-start justify-center ">
            <img src="/img/Uploading.svg" alt="" className="3xl:max-w-[280px] xl:max-w-[183px] md:max-w-[210px] w-full" />
            <div onMouseEnter={()=>{setAddImageHover(true)}} onMouseLeave={()=>{setAddImageHover(false)}} className="absolute  3xl:bottom-[37%] md:bottom-[34%] 3xl:right-[9%] md:right-[5%] 3xl:h-[46px] xl:h-[40px] 3xl:max-w-[57px] xl:max-w-[57px] md:max-w-[47px] w-full  flex flex-col">
             <button onClick={()=>{setcheckingUploadImage(true)}} className={`w-full  uppercase 3xl:h-[25px] md:h-[20px] 3xl:max-w-[39px] md:max-w-[33px] xl:max-w-[30px] bg-[#E3E5E7] 3xl:text-[16px] 3xl:leading-[18px] xl:text-[11px] xl:leading-[13px] md:text-[13px] md:leading-[15px] font-[500] tracking-[-0.32px] text-[#121212] ${AddImageHover ? 'bg-[#eeeef1]':'bg-[#E3E5E7]'}`}>add</button>
             <button onClick={()=>{setcheckingUploadImage(true)}} className={`w-full 3xl:max-w-[57px] xl:max-w-[43px] md:max-w-[47px] uppercase 3xl:h-[25px] md:h-[20px] bg-[#E3E5E7] 3xl:text-[16px] 3xl:leading-[18px] xl:text-[11px] xl:leading-[13px] md:text-[13px] md:leading-[15px] font-[500] tracking-[-0.32px] text-[#121212] ${AddImageHover ? 'bg-[#eeeef1]':'bg-[#E3E5E7]'}`}>image</button>
            </div>
           </div>
           <div className="3xl:max-w-[176px] md:max-w-[126px] 3xl:h-[60px] text-[#7D828E] mb-[22px] xl:mt-[6%] md:mt-[0px] ">
           <h1 className="3xl:text-[24px] font-[400] 3xl:leading-[28px] md:text-[20px] xl:text-[18px] xl:leading-[20px]  md:leading-[22px] text-center">Upload image here</h1>
           </div>
         </div>
        </div> :
        <div className="3xl:max-w-[50.1%] xl:max-w-[50.1%] md:max-w-[100%] xl:h-[79vh] md:h-[45.8vh] w-full flex items-center justify-center xl:border-l-[1.5px] md:border-b-[1px] border-solid border-[#7D828E] border-opacity-[0.15]">
        <div className="relative 3xl:h-[59%] xl:h-[73%]  md:h-[91.4%] 3xl:max-w-[50%] xl:max-w-[70%] md:max-w-[50.7%]  w-full xl:border-[1.5px] md:border-[1px] border-solid border-[#C4C6CA] flex flex-col">
        <div className="3xl:h-[45px] xl md:h-[50px]  w-full 3xl:border-b-[1.5px] md:border-b-[1px] 3xl:pl-[14px] 3xl:pr-[16px] xl:pl-[10px] md:pr-[10px] md:pl-[10px] xl:pr-[10px] border-dashed border-[#C4C6CA] flex items-center 3xl:justify-center xl:justify-between uppercase">
            <p className="text-[#7D828E] 3xl:text-[16px] 3xl:leading-[18px] 3xl:tracking-[-0.32px] xl:text-[11px] xl:leading-[13px] md:text-[13px] md:leading-[15px] xl:tracking-[-0.22px] 3xl:max-w-[77px] xl:max-w-[52px] md:max-w-[70px] w-full ">upload //</p>
            <p className="text-[#7D828E] 3xl:text-[16px] 3xl:leading-[18px] 3xl:tracking-[-0.32px] xl:text-[11px] xl:leading-[13px] md:text-[13px] md:leading-[15px] xl:tracking-[-0.22px]  opacity-[0.6] 3xl:max-w-[288px] xl:max-w-[167px] w-full flex justify-end">image uploaded successfully</p>
        </div>
        <div className="xl:max-w-[95%] md:max-w-[95%]  w-full xl:h-[86%] md:h-[83.7%]  mx-auto my-auto flex items-center justify-center">
         <img src="/img/UploadedImage.png" alt="" className="w-full h-full"/>
        </div>
        </div>
        </div>}
      </div>
    </Layout>
  );
};

export default ImageUpload;