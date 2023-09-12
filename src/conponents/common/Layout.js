import {React , useContext} from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MyContext from "../../Context";

const Layout = ({ children  , handleNextClick , handlePrevClick}) => {
  const {navigation , setnavigation} = useContext(MyContext)
 

  return (
    
    <div className={`${navigation==='/ReportCompleted'&& ' bg-ReportCompleted bg-cover bg-center xl:h-[100vh] md:h-full xsm:h-[100%] w-full'}`}>
            <div className={`${navigation==='/' ?  "xl:h-[10vh]  xsm:pb-[46px] ":' xl:h-[10.5vh] xsm:pb-[20px] md:pb-[15px]'} ${navigation==='/ReportCompleted'?'border-[#FFF]  border-opacity-[0.2] ' : 'border-[#7D828E/15]'} border-solid ${navigation==='/'?' md:absolute' : 'xl:border-b-[1.5px] xsm:border-b-[1px]'} xsm:flex xl:hidden w-full     justify-center md:pt-[21px] xsm:pt-[30px] `}>
           <div className={` bg-white PPNeue500   md:max-w-[507.7px] xsm:max-w-[300px] justify-center w-full 3xl:h-[50px] xsm:h-[44px] flex `} >
          <div className="flex items-center md:py-[17px] md:px-[18px] xsm:py-[20px] xsm:px-[20px] border-b-[1px] border-t-[1px]   border-l-[1px]  border-r-[1px] border-solid border-[#1212121A] cursor-pointer">
            <img src="/img/HeaderBars.svg" alt="" />
          </div>
          <div className="flex items-center  md:pl-[21px] md:pr-[23px] xsm:pl-[20px] xsm:pr-[15px] xsm:pt-[8px] xsm:pb-[10px]  border-b-[1px]   border-t-[1px] border-r-[1px]   border-solid border-[#1212121A] cursor-pointer">
            <img src="/img/QOVES.svg" alt=""  className={` md:w-[71px] md:h-[15px]  xsm:w-[81px] xsm:h-[26px]`}/>
          </div>
          <div className="flex items-center  md:pl-[21px] md:pr-[22px] md:py-[11px] xsm:pl-[20px] xsm:pr-[20px] xsm:py-[13px] border-b-[1px]  border-t-[1px]  border-r-[1px]  border-solid border-[#1212121A] cursor-pointer">
            <div className="flex md:gap-[6.8px] xsm:gap-[9px] items-center" >
              <img src="/img/HeaderLock.svg" alt="" className={`md:w-[10px] md:h-[14px] xsm:w-[13px] xsm:h-[18px] mb-[1.5px]`}/>
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
            <img src="/img/HeaderArrowxl.svg" alt="" className="flex pl-[16px]" />
          </div>
        </div>
        </div>
      <div className={` w-full  ${navigation==='/' ?  "h-[10vh]":' xl:h-[10.5vh] md:h-[7.8vh]'} xsm:hidden xl:flex xl:border-b-[1.5px] md:border-b-[1px]  border-solid ${navigation==='/ReportCompleted'?'border-[#FFF]  border-opacity-[0.2]' : 'border-[#7D828E/15]'} 3xl:pt-[21px] xl:pt-[10px]`}>
        <div className="xl:bg-white PPNeue500  3xl:max-w-[580.5px] xl:max-w-[500.7px] justify-center w-full 3xl:h-[50px] xl:h-[40px] flex mx-auto">
          <div className="flex items-center 3xl:py-[18px] 3xl:px-[22px] xl:py-[17px] xl:px-[18px]  3xl:border-b-[1.5px] xl:border-b-[1px]  xl:border-t-[1px] 3xl:border-t-[1.5px]  xl:border-l-[1px]  3xl:border-l-[1.5px]  3xl:border-r-[1.5px] xl:border-r-[1px] border-solid border-[#1212121A] cursor-pointer">
            <img src="/img/HeaderBars.svg" alt="" />
          </div>
          <div className="flex items-center 3xl:pl-[16px] 3xl:pr-[18px] xl:pl-[21px] xl:pr-[23px]  xl:border-b-[1px]  3xl:border-b-[1.5px]  3xl:border-t-[1.5px]  xl:border-t-[1px] xl:border-r-[1px]  3xl:border-r-[1.5px]  border-solid border-[#1212121A] cursor-pointer">
            <img src="/img/QOVES.svg" alt=""  className={`3xl:w-[81px] 3xl:h-[26px] xl:w-[71px] xl:h-[15px]`}/>
          </div>
          <div className="flex items-center 3xl:pl-[21px] 3xl:pr-[22px] 3xl:py-[11px]  xl:pl-[21px] xl:pr-[22px] xl:py-[11px]   3xl:border-b-[1.5px]  3xl:border-t-[1.5px]  3xl:border-r-[1.5px]  xl:border-b-[1px]  xl:border-t-[1px]  xl:border-r-[1px]  border-solid border-[#1212121A] cursor-pointer">
            <div className="flex 3xl:gap-[9px] xl:gap-[6.8px] items-center" >
              <img src="/img/HeaderLock.svg" alt="" className={`3xl:w-[13px] 3xl:h-[18px] xl:w-[10px] xl:h-[14px] mb-[2px]`}/>
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
            <img src="/img/HeaderArrow.svg" alt="" className="3xl:flex xl:hidden" />
            <img src="/img/HeaderArrowxl.svg" alt="" className="3xl:hidden xl:flex xl:pl-[16px]" />
          </div>
        </div>
      </div>
      <div className={` w-full flex md:flex-row xsm:flex-col justify-center `}>
        <div className={` xl:max-w-[9.375%] xl:flex xsm:hidden 3xl:pl-[24px] xl:pl-[23px] w-full  xl:border-r-[1px] 3xl:border-r-[1.5px] ${navigation==='/ReportCompleted'?'border-[#FFF]  border-opacity-[0.2]' : 'border-[#7D828E/15]'} flex items-center  `}>
          
            <button onClick={handlePrevClick} className="flex justify-start items-center h-[24px]  xl:pl-[7px]  3xl:gap-[7px] xl:gap-[10px] max-w-[68px] w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
               className="3xl:w-[11.333px] 3xl:h-[8px] xl:h-[7px] xl:w-[10px]"
                viewBox="0 0 11 9"
                fill="none"
              >
                <path
                  d="M11 4.5H1M1 4.5L4.52941 1M1 4.5L4.52941 8"
                  stroke="#121212"
                />
              </svg>
              <p className="3xl:text-[14px] xl:text-[11px] font-[500] 3xl:leading-[21px] xl:leading-[13px] uppercase">prev</p>
            </button>{" "}
          
        </div>
        <div className={`3xl:max-w-[80.4%] xl:max-w-[80.4%] md:max-w-[100%] w-full  ${navigation === '/'?'xl:h-auto md:h-[93.75vh] xsm:h-full': navigation === '/PersonalData'?'xl:h-auto xsm:h-[77.14vh]': navigation==='/ImageUpload' ? 'xl:h-auto xsm:h-[76.125vh]':navigation==='/InfoChecking'?'xl:h-auto xsm:h-[76.825vh]' : navigation==='/ReportFormatting' && 'xl:h-auto xsm:h-[78.125vh]'}   ${navigation=== '/ReportCompleted'&& 'xl:h-auto xsm:h-[77.6vh]' }`}>
        {children}
        </div>
        <div className={` xl:max-w-[9.375%] xl:flex xsm:hidden w-full 3xl:pr-[32px] xl:pr-[22px]  3xl:border-l-[1.5px] xl:border-l-[1px] ${navigation==='/ReportCompleted'?'border-[#FFF]  border-opacity-[0.2]' : 'border-[#7D828E/15]'} flex items-center justify-end  `}>
          
            <button className="flex justify-end items-center h-[24px] 3xl:gap-[7px] xl:gap-[10px] xl:pr-[9px] max-w-[68px] w-full" onClick={handleNextClick}>
              <p className="3xl:text-[14px] xl:text-[11px] font-[500] 3xl:leading-[21px] xl:leading-[13px] uppercase">next</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="3xl:w-[11.333px] 3xl:h-[8px] xl:h-[7px] xl:w-[10px]"
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
   
   
      <div className={` ${navigation==='/'?'':''} ${navigation==='/ReportCompleted'?'border-[#FFF] bg-transparent':'bg-white border-[#7D828E/15] '} w-full  bg-transparent  xsm:flex justify-between items-center xl:hidden  md:px-[24px] md:pt-[22px] md:pb-[18px]  ${navigation === '/' ? 'xsm:pt-[13px] xsm:pb-[13px] xsm:px-[13px]' : 'xsm:pt-[14px] xsm:pb-[13px] xsm:px-[20px]'}  border-t-[1px] border-solid  md:border-opacity-[0.2] xsm:border-opacity-[0.15] xl:border-opacity-[0.15] flex justify-between`}>
     <div onClick={handlePrevClick} className="flex items-center gap-[6px] md:h-[24px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
               className="h-[7px] w-[10px]"
                viewBox="0 0 11 9"
                fill="none"
              >
                <path
                  d="M11 4.5H1M1 4.5L4.52941 1M1 4.5L4.52941 8"
                  stroke="#121212"
                />
              </svg>
      <button  className="flex justify-start   max-w-[68px] w-full">
              <p className="text-[13px] font-[500] leading-[13px] uppercase">prev</p>
            </button></div>
            <div className="flex items-center md:h-[24px] gap-[6px] cursor-pointer" onClick={handleNextClick}>
              <p className="text-[13px] font-[500] leading-[13px] uppercase">next</p>
              <button className="flex justify-end items-center  gap-[10px] xl:pr-[9px] max-w-[68px] w-full" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[7px] w-[10px]"
                viewBox="0 0 14 10"
                fill="none"
              >
                <path
                  d="M0.666667 5H12M12 5L8 1M12 5L8 9"
                  stroke="#121212"
                  stroke-width="1.5"
                />
              </svg>
            </button></div>
      </div>
      {navigation !=='/' && <div className={`w-full  bg-transparent md:bottom-0 md:border-t-[1px] 3xl:border-t-[1.5px] border-solid ${navigation==='/ReportCompleted'?'border-[#FFF]  border-opacity-[0.2] xsm:pb-[9px]' : 'border-[#7D828E/15]'}  xsm:pb-[9px] 3xl:h-[10.5vh] xl:h-[10.5vh] md:pb-[16px]  3xl:px-[24px] xl:px-[16px] md:pl-[24px] md:pr-[24px] xsm:pl-[14px] xsm:pr-[14px] 3xl:pt-[30px] xl:pt-[15px] md:pt-[22px]  flex flex-col 3xl:gap-[11px] xl:gap-[10px] xsm:gap-[6px] md:gap-[15px] xsm:border-t-[1px] xsm:pt-[19px]    `}>
         <div className={`relative  xl:max-w-[99.8%] md:max-w-[99.8%] xsm:max-w-[100%] w-full  ${navigation=== '/ReportCompleted'? 'bg-[#FFF]' : 'bg-[#7D828E] bg-opacity-[0.1]'} 3xl:h-[24px] xl:h-[18px] md:h-[22px] xsm:h-[22px] `}>
        {navigation!=='/ReportCompleted' &&<div>
         <div className="absolute  3xl:right-[7.2%] xl:right-[15%] md:right-[20.7%] xsm:right-[35.73%] 3xl:w-[1.5px] xsm:w-[1px] 3xl:h-[23px] xl:h-[18px]  xsm:h-[22px]  bg-[#758084] opacity-[0.2]"></div>
         <div className="absolute xl:right-[50.4%] md:right-[52.4%] 3xl:w-[1.5px] md:w-[1px] 3xl:h-[23px] xl:h-[18px] md:h-[22px] xsm:h-[22px] bg-[#758084] opacity-[0.2]"></div></div>}
          <div className={`${navigation === '/PersonalData'?'xl:max-w-[4.2%] md:max-w-[7.2%] xsm:max-w-[11.6%]': navigation==='/ImageUpload' ? 'xl:max-w-[49.1%] md:max-w-[44.16%] xsm:max-w-[48.16%]':navigation==='/InfoChecking'?'xl:max-w-[49.6%] md:max-w-[50.16%]  xsm:max-w-[50.16%] ' : navigation==='/ReportFormatting' && 'xl:max-w-[61%]  md:max-w-[57.16%] xsm:max-w-[59.16%]'} w-full  ${navigation=== '/ReportCompleted'? 'bg-[#FFF]' : 'bg-[#7D828E] '} 3xl:h-[24px] xl:h-[18px] md:h-[22px] xsm:h-[22px] flex items-center`}>
            <p className={`text-[13px] font-[400] leading-[16px]  ${navigation !== '/ReportCompleted'? 'text-[#FFF]' : 'text-[#7D828E] '} 3xl:pl-[10px] xl:pl-[6px] md:pl-[6px] xsm:pl-[7px]`}> {navigation=== '/ReportCompleted'? '100%' :navigation==='/PersonalData'? '13%' :navigation==='/ImageUpload' ? '48%' : navigation==='/InfoChecking' ? '50%' : navigation==='/ReportFormatting' && '59%'}</p>
          </div>
         </div>
          <div className="md:max-w-[99.8%] xsm:max-w-[100%] w-full  3xl:h-[20px] xl:h-[14px] md:h-[14px] xsm:h-[20px] 3xl:text-[13px] xl:text-[10px] md:text-[12px] xsm:text-[11px] font-[400] 3xl:leading-[16px] xl:leading-[12px] xsm:leading-[13px] flex justify-between">
          <div className={`xl:max-w-[152px] md:max-w-[252px] w-full 3xl:h-[20px] xl:h-[14px] flex items-center justify-start gap-[9px]  ${navigation === '/ReportCompleted'? 'text-[#FFF] opacity-[0.8]' : 'text-[#7D828E] '}`}>
              <span>[ 001 ]</span>
              <span className=" uppercase">personal data</span>
            </div>   
             <div className={`xl:max-w-[190px] md:max-w-[210px] w-full 3xl:h-[20px] xl:h-[14px] flex items-center 3xl:justify-center xl:justify-center  xsm:justify-end 3xl:pl-[8px] xl:pl-[60px] gap-[9px]  ${navigation === '/ReportCompleted'? 'text-[#FFF] opacity-[0.8]' : 'text-[#7D828E] '}`}>
              <span className="">[ 002 ]</span>
              <span className=" uppercase   md:pr-[14px]">upload image</span>
            </div>   
             <div className={`xl:max-w-[101px] md:max-w-[221px] xsm:hidden  md:flex w-full 3xl:h-[20px] xl:h-[14px] flex items-center xl:justify-end  md:justify-center gap-[9px]  ${navigation === '/ReportCompleted'? 'text-[#FFF] opacity-[0.8]' : 'text-[#7D828E] '}`}>
              <span>[ 003 ]</span>
              <span className=" uppercase">finish</span>
            </div>
           
          </div>
      </div>}
    </div>
  );
};

export default Layout;
