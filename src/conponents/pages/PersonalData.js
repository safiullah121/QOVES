import React, { useContext, useEffect } from "react";
import Layout from "../common/Layout";
import TextReveal from "../Animations/TextReveal";
import MyContext from "../../Context";

const PersonalData = (props) => {
  const { userDetails, setuserDetails, imageCropingAnimationForPersonalData } =
    useContext(MyContext);
  const UserInformation = [
    { title: "age /", desc: "27", width: "64px" },
    { title: "gender /", desc: "female", width: "124px" },
    { title: "descnent /", desc: "Latino", width: "124px" },
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
  console.log(userDetails.gender);
  return (
    <Layout
      handleNextClick={props.handleNextClick}
      handlePrevClick={props.handlePrevClick}
    >
      <div className="flex md:flex-col-reverse xl:flex-row h-full justify-center items-center">
        <div className="xl:max-w-[49.9%] md:max-w-[100%]  h-full xsmHeightp xl:h-[79vh] w-full flex flex-col justify-between ">
          <div className="xl:h-[34.1%] w-full 3xl:border-b-[1.5px] h-full  xl:border-b-[1.5px]  xsm:border-b-[1px] md:border-b-[0px]  border-solid border-[#7D828E] border-opacity-[0.15]">
            <div className="3xl:pt-[99px] md:pt-[30px] xl:pt-[59px] mdHeightp xsm:pt-[46px] xsm:pl-[14px] xsm:pb-[22px] md:pb-[48px] 3xl:pl-[74px] md:pl-[24px] xl:pl-[50px] flex items-end md:gap-[10px] xsm:gap-[3px]">
              <TextReveal
                DivClases={"overflow-y-hidden "}
                translation={
                  "3xl:translate-y-[130px] xl:translate-y-[100px] md:translate-y-[60px] xsm:translate-y-[90px]"
                }
              >
                <h1 className="3xl:text-[52px] xl:pb-[10px] 3xl:leading-[50px] md:text-[34px] md:leading-[36px] xl:text-[36px] xl:leading-[36px] xsm:text-[30px] xsm:leading-[26px] font-[400] xl:tracking-[-0.36px] md:tracking-[-1.02px] xsm:tracking-[-0.6px] text-[#121212] PPNeue xl:max-w-[203px] xsm:max-w-[175px] md:max-w-[316px]  3xl:max-w-[301px]">
                  Fill in your personal data
                </h1>
              </TextReveal>
              <img
                src="/img/Question.svg"
                className="3xl:mb-[7px] xl:mb-[7px] md:mb-[3px]"
              />
            </div>
          </div>
          <div className="xl:h-[65%]  3xl:pt-[150px] xl:pt-[72px] md:pt-[0px] xsm:pt-[42px]  3xl:pl-[77px] md:pl-[24px] xl:pl-[52px] md:pb-[39px] xsm:pb-[192px] xsm:pl-[14px] xl:pb-[0px] text-[#7D828E]  PPNeue">
            <TextReveal
              DivClases={"overflow-y-hidden"}
              translation={
                "3xl:translate-y-[320px] xl:translate-y-[260px] md:translate-y-[150px] xsm:translate-y-[250px]"
              }
            >
              <div className="3xl:max-w-[583px] xl:max-w-[436px] w-full   flex  flex-col xl:gap-[27px] md:gap-[20px] xsm:gap-[27px]">
                <div className="3xl:max-w-[364px]  xl:max-w-[258px] 3xl:h-[71px] xl:h-[54px] 3xl:text-[24px] xl:text-[18px] md:text-[18px] font-[400] 3xl:leading-[28px] xl:leading-[20px] md:leading-[20px] xl:tracking-[-0.36px] md:tracking-[-0.27px]  md:flex xl:flex-col gap-[6px] ">
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
                          <option value="">Enter your pronoun</option>
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
                          <option value="">enter your ethnic group</option>
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
                        <option value="">enter your biological gender</option>
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
        <div
          className={` relative  xsm:hidden md:flex xl:max-w-[50.1%]  mdHeight2p  md:max-w-[100%] md:pb-[29px] md:pt-[21px] xl:pb-[0px] xl:pt-[0px] xl:h-[79.5vh] w-full flex items-center justify-center xl:border-l-[1.5px] md:border-b-[1px] xl:border-b-0 border-solid border-[#7D828E] border-opacity-[0.15] `}
        >
          <div
            className={`${
              imageCropingAnimationForPersonalData
                ? "xl:absolute top-0 flex justify-center w-full xl:h-[90vh] items-center ease-in 3xl:duration-[0.6s] xl:duration-[0.7s]"
                : "xl:absolute top-0 flex justify-center w-full xl:h-[79vh] items-center ease-in 3xl:duration-[0.6s] xl:duration-[0.7s]"
            }`}
          >
            <div
              className={`${
                imageCropingAnimationForPersonalData
                  ? "xl:max-w-[100%]  md:max-w-[391px]  z-20 w-full xl:h-[90vh]  ease-in 3xl:duration-[0.6s] xl:duration-[0.7s] 3xl:bg-110% xl:bg-110%"
                  : " 3xl:max-w-[433px] xl:max-w-[364px]  z-20 w-full 3xl:h-[490px]  xl:h-[420px] ease-in 3xl:duration-[0.6s] xl:duration-[0.7s] 3xl:bg-120% xl:bg-120%"
              }  3xl:bg-FormPhoto md:bg-FormPhoto_2 md:h-[450px] md:max-w-[391px] xl:bg-FormPhoto bg-center  bg-no-repeat   flex items-center justify-center overflow-hidden`}
            >
              <div
                className={`${
                  imageCropingAnimationForPersonalData
                    ? "3xl:max-w-[405px] xl:max-w-[300px]   w-full xl:h-[350px] 3xl:h-[461px] ease-in 3xl:duration-[0.6s] xl:duration-[0.7s] "
                    : " 3xl:max-w-[350px] xl:max-w-[300px]  ease-in 3xl:duration-[0.6s] xl:duration-[0.7s]  w-full 3xl:h-[410px] xl:h-[330px]  "
                } md:max-w-[322px] xsm:max-w-[77.3%] md:h-[84.4%] w-full 3xl:pt-[18px] xl:pt-[15px] md:pt-[15px] 3xl:pl-[19px] xl:pl-[15px] md:pl-[15px] 3xl:pb-[14px] md:pb-[13px] mx-auto   xl:border-[1px] md:border-[1px] border-solid border-[#FFF] flex flex-col justify-between`}
              >
                <h1 className="PPNeue 3xl:text-[24px] xl:text-[18px] 3xl:leading-[28px] md:text-[18px] md:leading-[22px] xl:leading-[20px] font-[400] text-[#FFF] 3xl:max-w-[167px] md:max-w-[167px]  w-full">
                  Facial Aesthetic Assessments
                </h1>
                <div className="3xl:max-w-[88.47%] xl:max-w-[89.3%] md:max-w-[292px]  xsm:max-w-[270px] w-full xl:pt-[14px] md:pt-[8px] xsm:pt-[14px] xl:mr-[15px] md:mr-[15px]  border-t-[1.5px] border-solid border-[#FFF] border-opacity-[0.3] flex items-center ">
                  {UserInformation.map((i, index) => (
                    <div
                      key={index + "UserInformation"}
                      className={`${
                        i.title == "age /" &&
                        "xl:w-[76px] xsm:w-[70px] 3xl:w-[64px]"
                      } ${
                        i.title == "gender /" &&
                        "xl:w-[94px] md:w-[120px] xsm:w-[106px] 3xl:w-[124px]"
                      } ${
                        i.title == "descnent /" && "w-[124px]"
                      }  flex flex-col 3xl:gap-[5px] md:gap-[5px] xsm:gap-[7px] xl:gap-[3px] uppercase`}
                    >
                      <span
                        className={` font-[500] 3xl:text-[13px] md:leading-[13px] md:text-[11px] xsm:leading-[13px] xsm:text-[12px] text-[#FFF] opacity-[0.6]`}
                      >
                        {i.title}
                      </span>
                      <span className="font-[500] 3xl:text-[16px] md:text-[13px] md:leading-[13px] xsm:leading-[14px] xsm:text-[16px] text-[#FFF] opacity-[0.8]">
                        {i.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PersonalData;
