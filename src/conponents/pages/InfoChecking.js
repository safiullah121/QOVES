import React from "react";
import Layout from "../common/Layout";

const InfoChecking = (props) => {
  const Recommendations = [
    "Remove your glasses",
    "Look directly at camera",
    "Pull hair back",
    "Keep neutral expression",
  ];
  return (
    <Layout handleNextClick={props.handleNextClick} handlePrevClick={props.handlePrevClick}>
      <div className="flex xl:flex-row md:flex-col-reverse xsm:flex-col h-full items-center justify-end">
        <div className="xl:max-w-[49.9%] xl:h-[79vh] md:h-[39.25%]   xsm:h-[58.6%]  w-full">
          <div className="xl:h-[34.1%] xsm:h-[31%] md:h-auto  3xl:pt-[99px] xl:pt-[58px] md:pt-[30px] md:pb-[32px] md:pl-[24px]  xsm:pt-[46px] xsm:pb-[22px] xsm:pl-[14px] 3xl:pl-[74px] xl:pl-[49px] w-full xl:border-b-[1.5px] md:border-b-[0px] xsm:border-b-[1px] border-solid border-[#7D828E] border-opacity-[0.15]">
            <h1 className="3xl:max-w-[366px] xl:max-w-[278px] md:max-w-[222px] xsm:max-w-[226px] w-full 3xl:text-[52px] md:text-[34px] md:leading-[36px] xsm:text-[30px] xsm:leading-[26px] xl:text-[36px] xl:leading-[36px] 3xl:leading-[50px] tracking-[-1.3px] text-[#121212] font-[400] PPNeue">
              Your information is completed
            </h1>
          </div>
          <div className="xl:h-[65%] md:h-auto xsm:h-[65.3%] 3xl:pt-[18%] xl:pt-[18%] md:pt-0 xsm:pt-[43px] 3xl:pl-[77px] xl:pl-[52px] md:pb-[50px] xl:pb-[0px] md:pl-[24px] xsm:pl-[14px] text-[#7D828E]">
            <div className="3xl:max-w-[553px] xl:max-w-[416px] w-full 3xl:h-[265px] xl:h-[191px] flex flex-col xl:gap-[27px] md:gap-[20px]  xsm:gap-[27px]">
              <div className="3xl:max-w-[364px] xl:max-w-[238px]  xsm:max-w-[271px] md:max-w-[100%] 3xl:h-[71px] xl:h-[54px] 3xl:text-[24px] xl:text-[16px] font-[400] 3xl:leading-[28px] xl:leading-[20px] 3xl:tracking-[-0.36px] xl:tracking-[-0.22px] flex xl:flex-col md:flex-row xsm:flex-col ">
                <div>
                  <p className="inline PPNeue 3xl:text-[24px] xl:text-[18px] md:text-[20px] 3xl:leading-[28px] xl:leading-[20px] md:leading-[18px] xsm:text-[20px] xsm:leading-[22px] xsm:tracking-[-0.3px] 3xl:tracking-[-0.36px] md:tracking-[-0.27px]">
                    This report is for
                  </p>
                  <input
                    type="text"
                    className="PPNeue500 3xl:max-w-[132px]  xsm:text-[20px] xsm:leading-[24px] xsm:tracking-[-0.1px] xl:max-w-[99px] md:max-w-[113px] xsm:max-w-[112px] w-auto outline-none font-[500] text-[#121212] border-b-[1.5px] border-solid border-[#121212] placeholder:text-[#121212] 3xl:text-[24px] xl:text-[18px] md:text-[18px] 3xl:leading-[28px] xl:leading-[20px] md:leading-[18px] 3xl:tracking-[-0.36px] md:tracking-[-0.27px] placeholder:tracking-[-1.1px] tracking-[-0.36px] ml-[8px] 3xl:pb-[4px]"
                    value={"Alice Mendel"}
                  />
                </div>
                <div>
                  <p className="inline PPNeue 3xl:text-[24px] xl:text-[18px] md:text-[20px] 3xl:leading-[28px] xl:leading-[20px] md:leading-[18px] 3xl:tracking-[-0.36px] md:tracking-[-0.27px]  xsm:text-[20px] xsm:leading-[22px] xsm:tracking-[-0.3px]">
                    of
                  </p>
                  <input
                    id="input"
                    type="text"
                    className="PPNeue500 inline 3xl:max-w-[26px]  xsm:text-[20px] xsm:leading-[24px] xsm:tracking-[-0.1px] xl:max-w-[20px]  md:max-w-[20px] xsm:max-w-[22px]  tracking-[-0.36px] w-full outline-none font-[500] text-[#121212] border-b-[1.5px] border-solid border-[#121212] placeholder:text-[#121212] 3xl:text-[24px] xl:text-[18px] md:text-[18px] 3xl:leading-[28px] xl:leading-[20px] md:leading-[18px] 3xl:tracking-[-0.36px] md:tracking-[-0.27px] placeholder:tracking-[-1.2px] ml-[8px] mr-[8px] 3xl:pb-[4px]"
                    value="27"
                  />{" "}
                  <p className="inline PPNeue 3xl:text-[24px] xl:text-[18px] md:text-[20px] 3xl:leading-[28px] xl:leading-[20px] md:leading-[18px] 3xl:tracking-[-0.36px] md:tracking-[-0.27px]  xsm:text-[20px] xsm:leading-[22px] xsm:tracking-[-0.3px]">
                    years old.
                  </p>
                </div>
              </div>
              <div className="3xl:max-w-[553px] xl:max-w-[339px] 3xl:h-[71px] xl:h-[52px] 3xl:text-[24px] font-[400] 3xl:leading-[28px] tracking-[-0.36px] flex flex-col  xl:gap-[27px] md:gap-[20px] xsm:gap-[27px]">
                <div className="flex flex-col leading-[21px] 3xl:text-[24px] xl:text-[16px] xsm:max-w-[255px] md:max-w-[100%] w-full">
                  {" "}
                  <div className="flex flex-wrap md:gap-[8px] xsm:gap-x-[8px] xsm:gap-y-[3px]">
                    <div className=" flex items-center border-b-[1.5px] border-solid border-[#121212] md:mr-[8px] cursor-pointer 3xl:pb-[4px]">
                      {" "}
                      <h1 className="PPNeue500 font-[500]   xsm:text-[20px] xsm:leading-[24px] xsm:tracking-[-0.1px] text-[#121212] 3xl:text-[24px] xl:text-[18px] md:text-[18px] 3xl:leading-[28px] xl:leading-[20px] md:leading-[18px] 3xl:tracking-[-0.36px] md:tracking-[-0.27px]">
                        She
                      </h1>
                      <svg
                        className="ml-[8px]  3xl:mt-[6px] xl:mt-[3px] md:mt-[1px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="7"
                        viewBox="0 0 9 7"
                        fill="none"
                      >
                        <path
                          d="M1 1.5L4.5 5.5L8 1.5"
                          stroke="#121212"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="PPNeue 3xl:text-[24px] xl:text-[18px] md:text-[20px] 3xl:leading-[28px] xl:leading-[20px] md:leading-[18px] 3xl:tracking-[-0.36px] md:tracking-[-0.27px]  xsm:text-[20px] xsm:leading-[22px] xsm:tracking-[-0.3px]">
                      is of
                    </p>
                    <div className="flex items-center border-b-[1.5px] border-solid border-[#121212] cursor-pointer md:mr-[8px] md:ml-[8px] 3xl:pb-[4px]">
                      {" "}
                      <h1 className="PPNeue500   xsm:text-[20px] xsm:leading-[24px] xsm:tracking-[-0.1px] font-[500] text-[#121212] 3xl:text-[24px] xl:text-[18px] md:text-[18px] 3xl:leading-[28px] xl:leading-[20px] md:leading-[18px] 3xl:tracking-[-0.36px] md:tracking-[-0.27px]">
                        White
                      </h1>
                      <svg
                        className="ml-[8px] 3xl:mt-[6px] xl:mt-[3px] md:mt-[2px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="7"
                        viewBox="0 0 9 7"
                        fill="none"
                      >
                        <path
                          d="M1 1.5L4.5 5.5L8 1.5"
                          stroke="#121212"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="PPNeue 3xl:text-[24px] xl:text-[18px] md:text-[20px] 3xl:leading-[28px] xl:leading-[20px] md:leading-[18px] 3xl:tracking-[-0.36px] md:tracking-[-0.27px]  xsm:text-[20px] xsm:leading-[22px] xsm:tracking-[-0.3px]">
                      descent{" "}
                    </p>
                    <p className="PPNeue 3xl:text-[24px] xl:text-[18px] md:text-[20px] 3xl:leading-[28px] xl:leading-[20px] md:leading-[18px] 3xl:tracking-[-0.36px] md:tracking-[-0.27px]  xsm:text-[20px] xsm:leading-[22px] xsm:tracking-[-0.3px]">
                      {" "}
                      and is
                    </p>
                    <div className="flex items-center border-b-[1.5px] border-solid border-[#121212] 3xl:ml-[8px] md:mr-[8px] cursor-pointer 3xl:pb-[4px]">
                      <h1 className="PPNeue500 font-[500] text-[#121212] 3xl:text-[24px] xl:text-[18px] md:text-[18px] 3xl:leading-[28px] xl:leading-[20px] md:leading-[18px] 3xl:tracking-[-0.36px]   xsm:text-[20px] xsm:leading-[24px] xsm:tracking-[-0.1px] md:tracking-[-0.27px] tracking-[-0.36px]">
                        Feminine
                      </h1>
                      <svg
                        className="ml-[8px] 3xl:mt-[6px] xl:mt-[3px] md:mt-[2px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="7"
                        viewBox="0 0 9 7"
                        fill="none"
                      >
                        <path
                          d="M1 1.5L4.5 5.5L8 1.5"
                          stroke="#121212"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="PPNeue 3xl:text-[24px] xl:text-[18px] md:text-[20px] 3xl:leading-[28px] xl:leading-[20px] md:leading-[18px] 3xl:tracking-[-0.36px] md:tracking-[-0.27px]  xsm:text-[20px] xsm:leading-[22px] xsm:tracking-[-0.3px]">
                      presenting.
                    </p>
                  </div>
                </div>
                <div className="3xl:max-w-[360px] xl:max-w-[267px] w-full flex items-center">
                  <p className="PPNeue 3xl:text-[24px] xl:text-[18px] md:text-[20px] 3xl:leading-[28px] xl:leading-[20px] md:leading-[18px] 3xl:tracking-[-0.36px] md:tracking-[-0.27px]  xsm:text-[20px] xsm:leading-[22px] xsm:tracking-[-0.3px]">
                    Email to
                  </p>
                  <input
                    id="input"
                    type="text"
                    className="PPNeue500 inline 3xl:max-w-[261px]  xsm:text-[20px] xsm:leading-[24px] xsm:tracking-[-0.1px] xl:max-w-[186px] md:max-w-[186px] xsm:max-w-[210px] 3xl:text-[24px]  md:text-[18px] 3xl:leading-[29px] xl:leading-[24px] md:leading-[22px] md:tracking-[-0.36px] xl:tracking-[-0.36px] w-auto outline-none font-[500] text-[#121212] border-b-[1.5px] border-solid border-[#121212] placeholder:text-[#121212] xl:placeholder:text-[18px] 3xl:placeholder:text-[24px] placeholder:tracking-[-0.36px] ml-[8px] mr-[8px] 3xl:pb-[4px]"
                    value={"alicemendel@gmail.com"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:max-w-[50.1%] xl:h-[79vh] md:h-[58.75%] xsm:h-[41.3%] md:pt-[20px] md:pb-[20px] w-full flex items-center justify-center  xl:pb-[0px] xl:pt-[0px] xl:border-l-[1.5px] md:border-b-[1px] border-solid border-[#7D828E] border-opacity-[0.15]">
          <div className="relative  3xl:h-[534px] xl:h-[420px] md:h-[430px]  3xl:max-w-[462px] xl:max-w-[364px]  md:max-w-[390px]   w-full  flex flex-col  justify-center items-center">
            <img
              src="/img/infoCheck.png"
              alt=""
              className="md:w-full md:h-full xsm:w-[150px] xsm:h-[174px]"
            />
            <div className="absolute z-30 md:flex xsm:hidden  xl:max-w-[282px] 3xl:max-w-[100%] md:max-w-[82.5%] 3xl:h-[100%] xl:h-[340px] md:h-[88.37%] w-full  3xl:border-[0px] md:border-[1px] border-solid border-[#FFFFFF] md:mx-[8.7%]  md:my-[6%] xl:mx-[41px]  xl:my-[40px] 3xl:mx-0  3xl:my-0 ">
              <div className="absolute top-[17px] left-[16px]  3xl:max-w-[120px] xl:max-w-[81px] md:max-w-[167px] w-full ">
                <p className="3xl:text-[24px] xl:text-[18px] md:text-[20px] font-[400] 3xl:leading-[28px] md:leading-[22px] xl:leading-[20px] text-[#FFF] tracking-[-0.36px]">
                  Alice Mendel
                </p>
              </div>
              <div className="absolute bottom-0 flex items-center 3xl:w-[93%] md:w-[92%] xl:w-[89%] 3xl:h-[59px]  3xl:mx-[16px] xl:mx-[15px] 3xl:pt-[11px] md:mx-[15px] md:pt-[8px]  xl:pt-[12px] 3xl:pb-[13px] xl:pb-[10px] md:pb-[12px] border-t-[1.5px] border-solid border-[#fff] border-opacity-[0.3] uppercase 3xl:leading-[13px] font-[500] text-[#FFF]">
                <div className="3xl:max-w-[59px] xl:max-w-[84px] md:max-w-[72px] w-full flex flex-col 3xl:gap-[5px] xl:gap-[2px] md:gap-[7px]">
                  <p className="3xl:text-[13px] xl:text-[11px] xl:leading-[13px] md:text-[13px] md:leading-[1s3px] opacity-[0.6]">
                    age /
                  </p>
                  <p className="xl:text-[13px] 3xl:text-[16px] xl:leading-[13px] md:text-[16px] md:leading-[14px]">
                    27
                  </p>
                </div>
                <div className="3xl:max-w-[113px] xl:max-w-[110px] md:max-w-[120px] w-full flex flex-col 3xl:gap-[5px] xl:gap-[2px] md:gap-[7px]">
                  <p className="3xl:text-[13px] xl:text-[11px] xl:leading-[13px] md:text-[13px] md:leading-[1s3px] opacity-[0.6]">
                    gender /
                  </p>
                  <p className="xl:text-[13px] 3xl:text-[16px] xl:leading-[13px] md:text-[16px] md:leading-[14px]">
                    female
                  </p>
                </div>
                <div className="3xl:max-w-[113px] w-full flex flex-col 3xl:gap-[5px] xl:gap-[2px] md:gap-[7px]">
                  <p className="3xl:text-[13px] xl:text-[11px] xl:leading-[13px] md:text-[13px] md:leading-[1s3px] opacity-[0.6]">
                    descnent /
                  </p>
                  <p className="xl:text-[13px] 3xl:text-[16px] xl:leading-[13px] md:text-[16px] md:leading-[14px]">
                    white
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InfoChecking;
