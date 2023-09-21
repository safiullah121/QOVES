import React, { useContext } from "react";
import Layout from "../common/Layout";
import TextReveal from "../Animations/TextReveal";
import MyContext from "../../Context";

const InfoChecking = (props) => {
  const { userDetails, setuserDetails } = useContext(MyContext);
  const { uploadedImage } = useContext(MyContext);
  const Recommendations = [
    "Remove your glasses",
    "Look directly at camera",
    "Pull hair back",
    "Keep neutral expression",
  ];
  const handleInputsChange = (e) => {
    if (e.target.value > 100) {
      e.target.value = 100;
    }
    setuserDetails((previousData) => {
      return {
        ...previousData,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <Layout
      handleNextClick={props.handleNextClick}
      handlePrevClick={props.handlePrevClick}
    >
      <div className="flex xl:flex-row md:flex-col-reverse xsm:flex-col h-full items-center justify-end">
        <div className="xl:max-w-[49.9%] xl:h-[79vh] xsmHeightf mdHeightf w-full">
          <div className="xl:h-[34.1%] xsm:h-[31%] md:h-auto  3xl:pt-[99px] xl:pt-[58px] md:pt-[30px] md:pb-[32px] md:pl-[24px]  xsm:pt-[46px] xsm:pb-[22px] xsm:pl-[14px] 3xl:pl-[74px] xl:pl-[49px] w-full xl:border-b-[1.5px] md:border-b-[0px] xsm:border-b-[1px] border-solid border-[#7D828E] border-opacity-[0.15]">
            <TextReveal
              DivClases={"overflow-y-hidden "}
              translation={
                "3xl:translate-y-[130px] xl:translate-y-[100px] md:translate-y-[60px] xsm:translate-y-[90px]"
              }
            >
              <h1 className="3xl:max-w-[366px] xl:pb-[10px] xl:max-w-[278px] md:max-w-[222px] xsm:max-w-[226px] w-full 3xl:text-[52px] md:text-[34px] md:leading-[36px] xsm:text-[30px] xsm:leading-[26px] xl:text-[36px] xl:leading-[36px] 3xl:leading-[50px] tracking-[-1.3px] text-[#121212] font-[400] PPNeue">
                Your information is completed
              </h1>
            </TextReveal>
          </div>
          <div className="xl:h-[65%] md:h-auto xsm:h-[65.3%] 3xl:pt-[18%] xl:pt-[18%] md:pt-0 xsm:pt-[43px] 3xl:pl-[77px] xl:pl-[52px] md:pb-[89px] xl:pb-[0px] md:pl-[24px] xsm:pl-[14px] text-[#7D828E]">
            <TextReveal
              DivClases={"overflow-y-hidden"}
              translation={
                "3xl:translate-y-[320px] xl:translate-y-[260px] md:translate-y-[150px] xsm:translate-y-[250px]"
              }
            >
              <div className="3xl:max-w-[583px] xl:max-w-[436px] w-full   flex  flex-col xl:gap-[27px] md:gap-[20px] xsm:gap-[27px]">
                <div className="3xl:max-w-[364px]  xl:max-w-[268px] 3xl:h-[71px] xl:h-[54px] 3xl:text-[24px] xl:text-[18px] md:text-[18px] font-[400] 3xl:leading-[28px] xl:leading-[20px] md:leading-[20px] xl:tracking-[-0.36px] md:tracking-[-0.27px]  md:flex xl:flex-col gap-[6px] ">
                  <div>
                    <p className="inline 3xl:text-[24px] xl:text-[18px] md:text-[18px] xsm:text-[20px] xsm:leading-[22px]  3xl:leading-[28px] xl:leading-[20px] md:leading-[18px]  3xl:tracking-[-0.36px] md:tracking-[-0.27px]">
                      This report is for
                    </p>
                    <input
                      type="text"
                      className="PPNeue500 3xl:max-w-[164px] xl:max-w-[123px] md:max-w-[123px] xsm:max-w-[140px]  w-auto outline-none font-[500] text-[#121212] border-b-[1.5px] border-solid border-[#121212] placeholder:text-[#121212] placeholder:tracking-[-0.36px] ml-[8px] mr-[8px] 3xl:pb-[4px]  3xl:text-[24px]  md:text-[18px] 3xl:leading-[29px] xl:leading-[24px] md:leading-[22px] md:tracking-[-0.36px] xl:tracking-[-0.36px] xsm:text-[20px] xsm:leading-[24px] "
                      placeholder="enter your name"
                      name="name"
                      value={userDetails.name}
                      onChange={handleInputsChange}
                    />
                  </div>
                  <div>
                    <p className="inline 3xl:text-[24px] xl:text-[18px] xsm:text-[20px] xsm:leading-[22px] md:text-[18px] 3xl:leading-[28px] xl:leading-[20px] md:leading-[18px] 3xl:tracking-[-0.36px] md:tracking-[-0.27px]">
                      of
                    </p>
                    <input
                      id="input"
                      type="number"
                      className="PPNeue500 inline 3xl:max-w-[145px] xl:max-w-[109px] md:max-w-[109px] xsm:max-w-[124px] w-full outline-none font-[500] text-[#121212] border-b-[1.5px] border-solid border-[#121212] placeholder:text-[#121212] placeholder:tracking-[-0.36px] ml-[8px] mr-[8px] 3xl:pb-[4px]  3xl:text-[24px]  md:text-[18px] 3xl:leading-[29px] xl:leading-[24px] md:leading-[22px] md:tracking-[-0.36px] xl:tracking-[-0.36px] xsm:text-[20px] xsm:leading-[24px]"
                      placeholder="enter your age "
                      name="age"
                      min={1}
                      max={100}
                      value={userDetails.age}
                      maxLength={3}
                      onChange={handleInputsChange}
                    />{" "}
                    <p className="inline 3xl:text-[24px] xl:text-[18px] md:text-[18px] 3xl:leading-[28px] xl:leading-[20px] md:leading-[18px] 3xl:tracking-[-0.36px] md:tracking-[-0.27px] xsm:text-[20px] xsm:leading-[22px]">
                      years old.
                    </p>
                  </div>
                </div>
                <div className="3xl:max-w-[581px] xl:max-w-[450px] md:max-w-[498px] xsm:max-w-[316px]  3xl:h-[71px] 3xl:text-[24px] font-[400] 3xl:leading-[28px] tracking-[-0.36px] flex flex-col   gap-[27px]">
                  {/* <div className="flex items-center"></div> */}
                  <div className="flex flex-col w-full xl:gap-0 md:gap-[8px] xsm:gap-[4px]  xl:leading-[24px] md:leading-[22px] 3xl:leading-[29px] 3xl:text-[24px] md:text-[18px]">
                    {" "}
                    <div className="xsm:flex xsm:flex-col md:flex-row md:gap-0 xsm:gap-[4px]">
                      <div className="flex items-center">
                        <select
                          name="pronoun"
                          value={userDetails.pronoun}
                          onChange={handleInputsChange}
                          className="PPNeue500 pr-[5px] mr-[8px] outline-none xl:border-b-[1.5px]  3xl:pb-[4px] xsm:border-b-[1px] border-solid border-[#121212] 3xl:text-[24px]  md:text-[18px] 3xl:leading-[29px] xl:leading-[24px] md:leading-[22px] md:tracking-[-0.36px] xl:tracking-[-0.36px] xsm:text-[20px] xsm:leading-[24px] font-[500] text-[#121212] tracking-[-0.36px]"
                        >
                          <option value="Enter your pronoun">
                            Enter your pronoun
                          </option>
                          <option value="He/Him"> He/Him</option>
                          <option value="She/Her">She/Her</option>
                          <option value="They/Them">They/Them</option>
                          <option value="others">others</option>
                        </select>
                        <p className="3xl:text-[24px] xl:text-[18px] md:text-[18px] 3xl:leading-[28px] xl:leading-[20px] md:leading-[18px] 3xl:tracking-[-0.36px] md:tracking-[-0.27px] xsm:text-[20px] xsm:leading-[22px]">
                          is of
                        </p>
                      </div>

                      <div className="flex items-center">
                        <select
                          name="group"
                          value={userDetails.group}
                          onChange={handleInputsChange}
                          className="PPNeue500 pr-[5px] md:ml-[8px] mr-[8px] outline-none xl:border-b-[1.5px]  3xl:pb-[4px] xsm:border-b-[1px] border-solid border-[#121212] 3xl:text-[24px]  md:text-[18px] 3xl:leading-[29px] xl:leading-[24px] md:leading-[22px] md:tracking-[-0.36px] xl:tracking-[-0.36px] xsm:text-[20px] xsm:leading-[24px] font-[500] text-[#121212] tracking-[-0.36px]"
                        >
                          <option value="enter your ethnic group">
                            enter your ethnic group
                          </option>
                          <option value="Cuscasian"> Cuscasian</option>
                          <option value="African">African</option>
                          <option value="Asian">Asian</option>
                          <option value="Hispanic">Hispanic</option>
                          <option value="Middle Eastern">Middle Eastern</option>
                          <option value="Indian">Indian</option>
                        </select>

                        <span className="xl:hidden xsm:flex ml-[5px] 3xl:text-[24px] xl:text-[18px] md:text-[18px] 3xl:leading-[28px] xl:leading-[20px] md:leading-[18px] 3xl:tracking-[-0.36px] md:tracking-[-0.27px] xsm:text-[20px] xsm:leading-[22px]">
                          descent
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center md:gap-0 xsm:gap-[4px]">
                      <span className="xl:flex xsm:hidden mr-[5px] 3xl:text-[24px] xl:text-[18px] md:text-[18px] 3xl:leading-[28px] xl:leading-[20px] md:leading-[18px] 3xl:tracking-[-0.36px] md:tracking-[-0.27px] xsm:text-[20px] xsm:leading-[22px]">
                        descent
                      </span>{" "}
                      <p className="3xl:text-[24px] xl:text-[18px] md:text-[18px] 3xl:leading-[28px] xl:leading-[20px] md:leading-[18px] 3xl:tracking-[-0.36px] md:tracking-[-0.27px] xsm:text-[20px] xsm:leading-[22px]">
                        {" "}
                        and is
                      </p>
                      <select
                        name="gender"
                        value={userDetails.gender}
                        onChange={handleInputsChange}
                        className="PPNeue500 pr-[5px] ml-[8px] mr-[8px] outline-none xl:border-b-[1.5px]  3xl:pb-[4px] xsm:border-b-[1px] border-solid border-[#121212] 3xl:text-[24px]  md:text-[18px] 3xl:leading-[29px] xl:leading-[24px] md:leading-[22px] md:tracking-[-0.36px] xl:tracking-[-0.36px] xsm:text-[20px] xsm:leading-[24px] font-[500] text-[#121212] tracking-[-0.36px]"
                      >
                        <option value="enter your biological gender">
                          enter your biological gender
                        </option>
                        <option value=" Male"> Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                      <p className="3xl:text-[24px] xl:text-[18px] md:text-[18px] 3xl:leading-[28px] xl:leading-[20px] md:leading-[18px] 3xl:tracking-[-0.36px] md:tracking-[-0.27px] xsm:text-[20px] xsm:leading-[22px]">
                        {" "}
                        presenting.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="3xl:max-w-[346px] xl:max-w-[330px] w-full flex items-center">
                  <p className="3xl:text-[24px] xl:text-[18px] md:text-[18px] 3xl:leading-[28px] xl:leading-[20px] md:leading-[18px] 3xl:tracking-[-0.36px] md:tracking-[-0.27px] xsm:text-[20px] xsm:leading-[22px]">
                    Email to
                  </p>
                  <input
                    id="input"
                    type="text"
                    className="PPNeue500 inline 3xl:leading-[29px] xl:leading-[24px] md:leading-[22px] xsm:text-[20px] xsm:leading-[24px] 3xl:max-w-[250px] xl:max-w-[186px] md:max-w-[186px] xsm:max-w-[211px] w-full outline-none font-[500] text-[#121212] xl:border-b-[1.5px] xsm:border-b-[1px] border-solid border-[#121212] placeholder:text-[#121212] 3xl:text-[24px] xl:text-[18px] md:text-[18px] placeholder:tracking-[-0.36px] ml-[8px] mr-[8px] 3xl:pb-[4px]"
                    placeholder="enter your email address"
                    name="email"
                    value={userDetails.email}
                    onChange={handleInputsChange}
                  />
                </div>
              </div>
            </TextReveal>
          </div>
        </div>
        <div className="xl:max-w-[50.1%] xl:h-[79vh] xsmHeight2f mdHeight2f md:pt-[20px] md:pb-[20px] w-full flex items-center justify-center  xl:pb-[0px] xl:pt-[0px] xl:border-l-[1.5px] md:border-b-[1px] border-solid border-[#7D828E] border-opacity-[0.15]">
          <div className="relative  3xl:h-[534px] xl:h-[420px] md:h-[430px]  3xl:max-w-[462px] xl:max-w-[364px]  md:max-w-[390px]   w-full  flex flex-col  justify-center items-center">
            <img
              src={uploadedImage}
              alt=""
              className="md:w-full md:h-full xsm:w-[150px] xsm:h-[174px]"
            />
            <div className="absolute z-30 md:flex xsm:hidden  xl:max-w-[282px] 3xl:max-w-[100%] md:max-w-[82.5%] 3xl:h-[100%] xl:h-[340px] md:h-[88.37%] w-full  3xl:border-[0px] md:border-[1px] border-solid border-[#FFFFFF] md:mx-[8.7%]  md:my-[6%] xl:mx-[41px]  xl:my-[40px] 3xl:mx-0  3xl:my-0 ">
              <div className="absolute top-[17px] left-[16px]  3xl:max-w-[120px] xl:max-w-[81px] md:max-w-[167px] w-full ">
                <p className="3xl:text-[24px] xl:text-[18px] md:text-[20px] font-[400] 3xl:leading-[28px] md:leading-[22px] xl:leading-[20px] text-[#FFF] tracking-[-0.36px]">
                  {userDetails.name}
                </p>
              </div>
              <div className="absolute bottom-0 flex items-center 3xl:w-[93%] md:w-[92%] xl:w-[89%] 3xl:h-[59px]  3xl:mx-[16px] xl:mx-[15px] 3xl:pt-[11px] md:mx-[15px] md:pt-[8px]  xl:pt-[12px] 3xl:pb-[13px] xl:pb-[10px] md:pb-[12px] border-t-[1.5px] border-solid border-[#fff] border-opacity-[0.3] uppercase 3xl:leading-[13px] font-[500] text-[#FFF]">
                <div className="3xl:max-w-[59px] xl:max-w-[84px] md:max-w-[72px] w-full flex flex-col 3xl:gap-[5px] xl:gap-[2px] md:gap-[7px]">
                  <p className="3xl:text-[13px] xl:text-[11px] xl:leading-[13px] md:text-[13px] md:leading-[1s3px] opacity-[0.6]">
                    age /
                  </p>
                  <p className="xl:text-[13px] 3xl:text-[16px] xl:leading-[13px] md:text-[16px] md:leading-[14px]">
                    {userDetails.age}
                  </p>
                </div>
                <div className="3xl:max-w-[113px] xl:max-w-[110px] md:max-w-[120px] w-full flex flex-col 3xl:gap-[5px] xl:gap-[2px] md:gap-[7px]">
                  <p className="3xl:text-[13px] xl:text-[11px] xl:leading-[13px] md:text-[13px] md:leading-[1s3px] opacity-[0.6]">
                    gender /
                  </p>
                  <p className="xl:text-[13px] 3xl:text-[16px] xl:leading-[13px] md:text-[16px] md:leading-[14px]">
                    {userDetails.gender}
                  </p>
                </div>
                <div className="3xl:max-w-[113px] w-full flex flex-col 3xl:gap-[5px] xl:gap-[2px] md:gap-[7px]">
                  <p className="3xl:text-[13px] xl:text-[11px] xl:leading-[13px] md:text-[13px] md:leading-[1s3px] opacity-[0.6]">
                    descnent /
                  </p>
                  <p className="xl:text-[13px] 3xl:text-[16px] xl:leading-[13px] md:text-[16px] md:leading-[14px]">
                    {userDetails.group}
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
