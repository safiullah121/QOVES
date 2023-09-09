import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const handleNextClick = () => {
    if (location.pathname ==='/') {
      navigate('/PersonalData')
    }
    else if (location.pathname ==='/PersonalData'){
      navigate('/ImageUpload')
    }
    else if (location.pathname === '/ImageUpload'){
     navigate('/InfoChecking')
    }
    else if (location.pathname === '/InfoChecking'){
      navigate('/ReportFormatting')
     }
     else if (location.pathname === '/ReportFormatting'){
      navigate('/ReportCompleted')
     }
     
  }
  const handlePrevClick = () => {
    if (location.pathname ==='/ImageUpload') {
      navigate('/PersonalData')
    }
    else if (location.pathname ==='/PersonalData'){
      navigate('/')
    }
    else if (location.pathname === '/ImageUpload'){
      navigate('/PersonalData')
     }
     else if (location.pathname === '/InfoChecking'){
      navigate('/ImageUpload')
     }
     else if (location.pathname === '/ReportFormatting'){
      navigate('/InfoChecking')
     }
     else if (location.pathname === '/ReportCompleted'){
      navigate('/ReportFormatting')
     }
  }
  return (
    
    <div className={`${location.pathname==='/ReportCompleted'&& ' bg-ReportCompleted bg-cover bg-center h-[100vh] w-full'}`}>
            <div className={`${location.pathname==='/' ?  "h-[10vh] md:h-[7.8vh] xsm:h-[120px]":' xl:h-[10.5vh] md:h-[8vh] xsm:h-[90px]'} ${location.pathname==='/ReportCompleted'?'border-[#FFF]  border-opacity-[0.2]' : 'border-[#7D828E/15]'} border-solid ${location.pathname==='/'?' md:absolute' : 'xl:border-[1.5px] md:border-[1px]'} xsm:flex xl:hidden w-full     justify-center md:pt-[21px] xsm:pt-[30px]`}>
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
      <div className={` w-full  ${location.pathname==='/' ?  "h-[10vh]":' xl:h-[10.5vh] md:h-[7.8vh]'} xsm:hidden xl:flex xl:border-b-[1.5px] md:border-b-[1px]  border-solid ${location.pathname==='/ReportCompleted'?'border-[#FFF]  border-opacity-[0.2]' : 'border-[#7D828E/15]'} 3xl:pt-[21px] xl:pt-[10px]`}>
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
      <div className={` w-full flex md:flex-row xsm:flex-col justify-center  ${location.pathname =='/' ? "md:h-[90vh]" :"md:h-[79vh]"}`}>
        <div className={` xl:max-w-[9.375%] xl:flex xsm:hidden 3xl:pl-[24px] xl:pl-[23px] w-full  xl:border-r-[1px] 3xl:border-r-[1.5px] ${location.pathname==='/ReportCompleted'?'border-[#FFF]  border-opacity-[0.2]' : 'border-[#7D828E/15]'} flex items-center  `}>
          
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
        <div className="3xl:max-w-[80.4%] xl:max-w-[80.4%] md:max-w-[100%] w-full ">
        {children}
        </div>
        <div className={` xl:max-w-[9.375%] xl:flex xsm:hidden w-full 3xl:pr-[32px] xl:pr-[22px]  3xl:border-l-[1.5px] xl:border-l-[1px] ${location.pathname==='/ReportCompleted'?'border-[#FFF]  border-opacity-[0.2]' : 'border-[#7D828E/15]'} flex items-center justify-end  `}>
          
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
   
    {location.pathname !=='/' && <div className={`w-full  md:absolute bg-transparent md:bottom-0 md:border-t-[1px] 3xl:border-t-[1.5px] border-solid ${location.pathname==='/ReportCompleted'?'border-[#FFF]  border-opacity-[0.2]' : 'border-[#7D828E/15]'} 3xl:h-[10.5vh] xl:h-[10.5vh] md:h-[9.17vh] 3xl:px-[24px] xl:px-[16px] md:px-[24px] 3xl:pt-[30px] xl:pt-[15px] md:pt-[22px]  flex flex-col 3xl:gap-[11px] xl:gap-[10px] md:gap-[15px] md:border-t-[1px] `}>
         <div className={`relative  xl:max-w-[99.8%] md:max-w-[99.8%] w-full  ${location.pathname=== '/ReportCompleted'? 'bg-[#FFF]' : 'bg-[#7D828E] bg-opacity-[0.1]'} 3xl:h-[24px] xl:h-[18px] md:h-[22px] `}>
        {location.pathname!=='/ReportCompleted' &&<div>
         <div className="absolute  3xl:right-[7.2%] xl:right-[15%] md:right-[20.7%] 3xl:w-[1.5px] md:w-[1px] 3xl:h-[23px] xl:h-[18px]  md:h-[22px]  bg-[#758084] opacity-[0.2]"></div>
         <div className="absolute xl:right-[50.4%] md:right-[52.4%] 3xl:w-[1.5px] md:w-[1px] 3xl:h-[23px] xl:h-[18px] md:h-[22px] bg-[#758084] opacity-[0.2]"></div></div>}
          <div className={`${location.pathname === '/PersonalData'?'xl:max-w-[4.2%] md:max-w-[7.2%]': location.pathname==='/ImageUpload' ? 'xl:max-w-[49.1%] md:max-w-[44.16%]':location.pathname==='/InfoChecking'?'xl:max-w-[49.6%] md:max-w-[50.16%] ' : location.pathname==='/ReportFormatting' && 'xl:max-w-[61%]  md:max-w-[57.16%]'} w-full  ${location.pathname=== '/ReportCompleted'? 'bg-[#FFF]' : 'bg-[#7D828E] '} 3xl:h-[24px] xl:h-[18px] md:h-[22px] flex items-center`}>
            <p className={`text-[13px] font-[400] leading-[16px]  ${location.pathname !== '/ReportCompleted'? 'text-[#FFF]' : 'text-[#7D828E] '} 3xl:pl-[10px] xl:pl-[6px] md:pl-[6px]`}> {location.pathname=== '/ReportCompleted'? '100%' :location.pathname==='/PersonalData'? '13%' :location.pathname==='/ImageUpload' ? '48%' : location.pathname==='/InfoChecking' ? '50%' : location.pathname==='/ReportFormatting' && '59%'}</p>
          </div>
         </div>
          <div className="md:max-w-[99.8%] w-full  3xl:h-[20px] xl:h-[14px] md:h-[14px] 3xl:text-[13px] xl:text-[10px] md:text-[12px] font-[400] 3xl:leading-[16px] xl:leading-[12px] flex justify-between">
          <div className={`xl:max-w-[152px] md:max-w-[252px] w-full 3xl:h-[20px] xl:h-[14px] flex items-center justify-start gap-[9px]  ${location.pathname === '/ReportCompleted'? 'text-[#FFF] opacity-[0.8]' : 'text-[#7D828E] '}`}>
              <span>[ 001 ]</span>
              <span className=" uppercase">personal data</span>
            </div>   
             <div className={`xl:max-w-[190px] md:max-w-[210px] w-full 3xl:h-[20px] xl:h-[14px] flex items-center 3xl:justify-center xl:justify-center  md:justify-end 3xl:pl-[8px] xl:pl-[60px] gap-[9px]  ${location.pathname === '/ReportCompleted'? 'text-[#FFF] opacity-[0.8]' : 'text-[#7D828E] '}`}>
              <span className="">[ 002 ]</span>
              <span className=" uppercase   pr-[14px]">upload image</span>
            </div>   
             <div className={`xl:max-w-[101px] md:max-w-[221px] w-full 3xl:h-[20px] xl:h-[14px] flex items-center xl:justify-end  md:justify-center gap-[9px]  ${location.pathname === '/ReportCompleted'? 'text-[#FFF] opacity-[0.8]' : 'text-[#7D828E] '}`}>
              <span>[ 003 ]</span>
              <span className=" uppercase">finish</span>
            </div>
           
          </div>
      </div>}
      <div className={`md:absolute ${location.pathname==='/'?'md:bottom-0':'md:bottom-[95px]'} ${location.pathname==='/ReportCompleted'?'border-[#FFF]':'border-[#7D828E/15] '} w-full ${location.pathname==='/' ? 'md:h-[6.25vh] xsm:h-[50px]' :'md:h-[5.8vh] xsm:h-[50px]' } bg-transparent  xsm:flex justify-between items-center xl:hidden  md:px-[24px] md:pt-[22px] md:pb-[18px] xsm:px-[13px] xsm:pt-[13px] xsm:pb-[13px] border-t-[1px] border-solid  md:border-opacity-[0.2] xl:border-opacity-[0.15]`}>
     <div className="flex items-center gap-[6px] h-[16px] ">
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
      <button onClick={handlePrevClick} className="flex justify-start   max-w-[68px] w-full">
              <p className="text-[13px] font-[500] leading-[13px] uppercase">prev</p>
            </button></div>
            <div className="flex items-center h-[16px] gap-[6px] cursor-pointer">
              <p className="text-[13px] font-[500] leading-[13px] uppercase">next</p>
              <button className="flex justify-end items-center  gap-[10px] xl:pr-[9px] max-w-[68px] w-full" onClick={handleNextClick}>
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
    </div>
  );
};

export default Layout;
