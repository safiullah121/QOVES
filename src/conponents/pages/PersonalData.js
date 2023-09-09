import React from "react";
import Layout from "../common/Layout";

const PersonalData = () => {
    const UserInformation = [
        {title:'age /',desc:'27' , width:'64px'},
        {title:'gender /',desc:'female' , width:'124px'},
        {title:'descnent /',desc:'Latino', width:'124px'},
    ]
  return (
    <Layout>
      <div className="flex md:flex-col-reverse xl:flex-row " >
        <div className="xl:max-w-[49.9%] md:max-w-[100%] md:h-[28.3vh] xl:h-[79vh] w-full ">
          <div className="xl:h-[34.1%] w-full 3xl:border-b-[1.5px]   xl:border-b-[1.5px] border-solid border-[#7D828E] border-opacity-[0.15]">
            <div className="3xl:pt-[99px] md:pt-[35px] xl:pt-[59px] 3xl:pl-[74px] md:pl-[24px] xl:pl-[50px] flex items-end gap-[10px]">
              <h1 className="3xl:text-[52px] 3xl:leading-[50px] md:text-[34px] md:leading-[36px] xl:text-[36px] xl:leading-[36px] font-[400] xl:tracking-[-0.36px] md:tracking-[-1.02px] text-[#121212] PPNeue xl:max-w-[233px] 3xl:max-w-[301px]">
                Fill in your  personal data
              </h1>
              <img src="/img/Question.svg" className="3xl:mb-[7px] xl:mb-[7px] md:mb-[3px]" />
            </div>
          </div>
          <div className="xl:h-[65%] 3xl:pt-[150px] xl:pt-[72px] md:pt-[48px]  3xl:pl-[77px] md:pl-[24px] xl:pl-[52px] md:pb-[39px] xl:pb-[0px] text-[#7D828E]  PPNeue">
            <div className="3xl:max-w-[553px] xl:max-w-[416px] w-full 3xl:h-[265px] xl:h-[203px]  md:h-[137px] flex  flex-col justify-between">
              <div className="3xl:max-w-[364px]  xl:max-w-[258px] 3xl:h-[71px] xl:h-[54px] 3xl:text-[24px] xl:text-[18px] md:text-[18px] font-[400] 3xl:leading-[28px] xl:leading-[20px] md:leading-[20px] xl:tracking-[-0.36px] md:tracking-[-0.27px]  md:flex xl:flex-col gap-[6px] ">
                <div>
                <p className="inline">This report is for</p>
                <input
                  type="text"
                  className="PPNeue500 3xl:max-w-[164px] xl:max-w-[123px] md:max-w-[123px]  w-auto outline-none font-[500] text-[#121212] border-b-[1.5px] border-solid border-[#121212] placeholder:text-[#121212] placeholder:tracking-[-0.36px] ml-[8px] mr-[8px] 3xl:pb-[4px]"
                  placeholder="enter your name"
                />
                </div>
                <div>
                <p className="inline">of</p>
                <input
                  id="input"
                  type="text"
                  className="PPNeue500 inline 3xl:max-w-[145px] xl:max-w-[109px] md:max-w-[109px] w-full outline-none font-[500] text-[#121212] border-b-[1.5px] border-solid border-[#121212] placeholder:text-[#121212] placeholder:tracking-[-0.36px] ml-[8px] mr-[8px] 3xl:pb-[4px]"
                  placeholder="enter your age "
                />{" "}
                <p className="inline">years old.</p></div>
              </div>
              <div className="3xl:max-w-[553px] xl:max-w-[410px] md:max-w-[498px]  3xl:h-[71px] 3xl:text-[24px] font-[400] 3xl:leading-[28px] tracking-[-0.36px] flex flex-col  gap-[27px]">
                {/* <div className="flex items-center"></div> */}
                <div className="flex flex-col gap-[8px] xl:leading-[24px] md:leading-[22px] 3xl:leading-[29px] 3xl:text-[24px] md:text-[18px]">
                  {" "}
                  <div className="flex">

                  <div className="flex items-center xl:border-b-[1.5px]   md:border-b-[1px] border-solid border-[#121212] mr-[8px] cursor-pointer 3xl:pb-[8px]">
                    {" "}
                    <h1 className="PPNeue500 font-[500] text-[#121212] tracking-[-0.36px]">
                      Enter your pronoun
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
                  <p>is of</p>
                  <div className="flex items-center border-b-[1.5px] border-solid border-[#121212] cursor-pointer 3xl:pb-[8px]  ml-[8px] mr-[8px]">
                    {" "}
                    <h1 className="PPNeue500 font-[500] text-[#121212] tracking-[-0.36px]">
                      enter your ethnic group
                    </h1>
                    <svg
                      className="ml-[8px] 3xl:mt-[6px] xl:mt-[3px] md:mt-[1px]"
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
                    <span className="xl:hidden md:flex ml-[5px]">descent</span>
                  </div>
                  <div className="flex flex-wrap">
                  <span className="xl:flex md:hidden mr-[5px]">descent</span> <p className=""> and is</p>
                    <div className="flex items-center border-b-[1.5px] border-solid border-[#121212] ml-[8px] mr-[8px] cursor-pointer 3xl:pb-[8px]">
                      <h1 className="PPNeue500 font-[500] text-[#121212]  tracking-[-0.36px]">
                        enter your biological gender
                      </h1>
                      <svg
                        className="ml-[8px] 3xl:mt-[6px] xl:mt-[3px] md:mt-[1px]"
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
                    <p> presenting.</p>
                  </div>
                </div>
                  </div>
                <div className="3xl:max-w-[346px] xl:max-w-[330px] w-full flex items-center">
                  <p>Email to</p>
                  <input
                    id="input"
                    type="text"
                    className="PPNeue500 inline 3xl:leading-[29px] xl:leading-[24px] md:leading-[22px] 3xl:max-w-[250px] xl:max-w-[186px] md:max-w-[186px] w-full outline-none font-[500] text-[#121212] xl:border-b-[1.5px] md:border-b-[1px] border-solid border-[#121212] placeholder:text-[#121212] 3xl:text-[24px] xl:text-[18px] md:text-[18px] placeholder:tracking-[-0.36px] ml-[8px] mr-[8px] 3xl:pb-[4px]"
                    placeholder="enter your email address"
                  />
                </div>
            </div>
          </div>
        </div>
        <div className="xl:max-w-[50.1%] md:max-w-[100%] md:h-[48.8vh] xl:h-[79vh] w-full flex items-center justify-center xl:border-l-[1.5px] md:border-b-[1px] border-solid border-[#7D828E] border-opacity-[0.15] ">
            <div className="3xl:max-w-[433px] xl:max-w-[364px] md:max-w-[391px]  w-full 3xl:h-[490px] md:h-[450px] xl:h-[420px] 3xl:bg-FormPhoto_2 md:bg-FormPhoto_2 xl:bg-FormPhoto_3  bg-cover bg-center flex items-center justify-center">
            <div className='xl:max-w-[78%] md:max-w-[82%] 3xl:pt-[18px] xl:pt-[15px] md:pt-[15px] 3xl:pl-[19px] xl:pl-[15px] md:pl-[15px] 3xl:pb-[14px] md:pb-[13px] mx-auto  w-full xl:h-[79%] md:h-[84.4%]  xl:border-[1.5px] md:border-[1px] border-solid border-[#FFF] flex flex-col justify-between'>
            <h1 className='3xl:text-[24px] xl:text-[18px] 3xl:leading-[28px] md:text-[20px] md:leading-[22px] xl:leading-[20px] font-[400] text-[#FFF] 3xl:max-w-[167px] md:max-w-[167px]  w-full'>Facial Aesthetic Assessments</h1>
          <div className='3xl:max-w-[330px] xl:max-w-[222px] md:max-w-[292px] w-full xl:pt-[14px] md:pt-[8px] md:mr-[15px]  xl:border-t-[1.5px] md:border-t-[1px] border-solid border-[#FFF] xl:border-opacity-[0.3] md:border-opacity-[0.4] flex items-center '>
          {UserInformation.map((i , index)=>(
            <div key={index+ 'UserInformation'} className={` flex flex-col 3xl:gap-[5px] xl:gap-[3px] md:gap-[4px] uppercase`}>
         <span className={` font-[500] 3xl:text-[13px] xl:leading-[13px] xl:text-[11px] text-[#FFF] opacity-[0.6]`}>{i.title}</span>
         <span className='font-[500] 3xl:text-[16px] xl:text-[13px] xl:leading-[13px] text-[#FFF] opacity-[0.8]'>{i.desc}</span>
        </div>
        ))}
          </div>
        </div>
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default PersonalData;
