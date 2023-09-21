import React, { useContext } from "react";
import Layout from "../common/Layout";
import { Link } from "react-router-dom";
import MyContext from "../../Context";
const ReportCompleted = (props) => {
  const { userDetails, setuserDetails } = useContext(MyContext);
  return (
    <Layout
      handleNextClick={props.handleNextClick}
      handlePrevClick={props.handlePrevClick}
    >
      <div className="w-full flex items-center justify-center ">
        <div className="xl:max-w-[52%] xl:h-[79vh]  md:max-w-[80.8%] xsm:max-w-[100%] md:mt-[298px] md:mb-[97px] xsm:mt-[164px] xsm:mb-[238px] xl:mt-[0px] xl:mb-[0px]  m-auto  flex flex-col items-center justify-center">
          <h1 className="text-center w-fit  3xl:text-[70px] 3xl:leading-[70px] xl:text-[46px] xl:leading-[49px] md:text-[46px] md:leading-[42px] xsm:text-[42px] xsm:tracking-[-1.68px] xsm:leading-[42px] font-[400] 3xl:tracking-[-2.1px] xl:tracking-[-1.38px]  md:tracking-[-1.38px] text-[#FFF] PPNeue md:max-w-[80%] xl:max-w-[100%]  flex flex-wrap">
            Report has been emailed to {userDetails.email}
          </h1>
          <button className="uppercase bg-white flex items-center 3xl:gap-[19px] xl:gap-[14px] md:gap-[18px] xsm:gap-[17px]  3xl:mt-[40px] xl:mt-[33px]  md:mt-[77px] xsm:mt-[52px]  3xl:py-[14px] xl:py-[10px] 3xl:pl-[19px] md:px-[12px] md:pl-[16px] md:pr-[18px] xsm:px-[17px] xsm:pt-[13px] xsm:pb-[12px] xl:pl-[15px] 3xl:pr-[23px] xl:pr-[15px]">
            <span className="3xl:w-[195px] xl:w-[141px]  md:w-[149px] xsm:w-[164px] 3xl:h-[32px] md:h-[25px] flex items-center text-left  3xl:text-[16px] xl:text-[13px] md:text-[16px]  md:leading-[20px] xsm:text-[14px]  xsm:leading-[20px] font-[500] 3xl:leading-[20px] xl:leading-[20px] text-[#121212] 3xl:tracking-[-0.16px] xl:border-r-[1.5px] md:border-r-[1px] xsm:border-r-[1px] border-solid border-[#121212] border-opacity-[0.3]">
              go to main page
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="3xl:w-[20px] xl:w-[13px] 3xl:h-[23px] md:w-[14px] md:h-[18px] xsm:w-[10px] xsm:h-[15px] xl:h-[13px]"
              viewBox="0 0 21 14"
              fill="none"
            >
              <path
                d="M12.9456 1L19 7.05436L12.9456 13.1087"
                stroke="#121212"
                stroke-width="1.5"
              />
              <path
                d="M19 7.05273H0.836915"
                stroke="#121212"
                stroke-width="1.5"
              />
            </svg>
          </button>
          <Link className="xl:border-b-[1px] md:border-b-[1.5px] border-solid border-[#FFF] 3xl:pb-[4.5px] md:pb-[7px] text-[#FFF] uppercase 3xl:text-[16px] 3xl:leading-[13px]  md:text-[16px] md:leading-[14px] font-[500] tracking-[-0.08px] xl:mt-[31px] md:mt-[26px] xsm:mt-[37px]">
            assess again
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default ReportCompleted;
