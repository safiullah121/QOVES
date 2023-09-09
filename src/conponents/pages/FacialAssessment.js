import React from 'react'
import Layout from '../common/Layout'
import '../../App.css'
import '../../fonts/DentonTestThin.otf'

const FacialAssessment = () => {
    const information = [
        {title:'edition /',desc:'introductory'},
        {title:'pages /',desc:'16' , classes:'xl:mr-[58px] md:mr-0 xsm:mr-[63px] 3xl:mr-[0px] ' },
        {title:'cost /',desc:'free'},
        {title:'assessed today /',desc:'210001'}
    ]
    const UserInformation = [
        {title:'age /',desc:'27' , width:'64px'},
        {title:'gender /',desc:'female' , width:'124px'},
        {title:'descnent /',desc:'Latino', width:'124px'},
    ]
  return (
    
    <Layout>
      
    <div className='flex xl:flex-row md:flex-col-reverse xsm:flex-col justify-center items-center' >
      <div className='xl:max-w-[49.9%] xsm:max-w-[375px] md:max-w-[100%] xl:h-[41vh] md:h-[41vh]  w-full xsm:pl-[14px] xsm:pr-[14px] md:pl-[0px] md:pr-[0px]'>
       <div className='3xl:h-[38vh]  xl:h-[43.2vh] md:h-[22.4vh]   md:w-full md:pt-[31px] xl:pt-[51px] 3xl:pt-[85px] 3xl:pb-[65px] md:pb-[28px] xsm:pb-[36px] xl:pb-[27px] 3xl:pl-[81px] xl:pl-[56px] md:pl-[24px] 3xl:border-b-[1.5px] xsm:border-b-[1px] border-solid border-[#7D828E] border-opacity-[0.15] flex flex-col justify-between'>
       <div className='xsm:pl-[2px] md:pl-[0px] xsm:pb-[36px]'><h1 className='3xl:text-[80px] md:text-[48px]  3xl:leading-[84px] xsm:text-[44px]  xsm:leading-[42px]  md:leading-[50px] font-[100] italic denton'>Introductory</h1>
       <h1 className='3xl:text-[70px] md:text-[46px] mt-[-8px] 3xl:leading-[70px] md:leading-[49px] font-[400] PPNeue  xsm:text-[42px]  xsm:leading-[42px]'>facial assessment</h1></div>
       <div className='3xl:max-w-[510px] xl:max-w-[334px] md:max-w-[546px] xsm:max-w-[300px] w-full 3xl:h-[35px]  flex justify-between 3xl:gap-x-[0px] xl:gap-x-[64px] xsm:gap-x-[64px] xsm:gap-y-[26px] 3xl:flex-nowrap xl:flex-wrap md:flex-nowrap xsm:flex-wrap uppercase  PPNeue500'>
        {information.map((i , index)=>(
            <div key={index+ 'information'} className={`${i.classes} flex flex-col 3xl:gap-[5px] xl:gap-[3px] xsm:gap-[4px] 3xl:mt-[0px] xl:mt-[5.4%]`}>
         <span className='font-[500] 3xl:text-[13px] md:text-[11px] md:leading-[13px] xsm:text-[12px] xsm:leading-[13px] text-[#969CA3] opacity-[0.6]'>{i.title}</span>
         <span className='font-[500] 3xl:text-[16px] md:text-[13px] md:leading-[13px] xsm:text-[12px] xsm:leading-[13px] text-[#121212] '>{i.desc}</span>
        </div>
        ))}
       </div>
       </div>
       <div className='3xl:h-[52vh] xl:h-[46.4vh] md:h-[18.5vh] md:w-full 3xl:pt-[42px] xl:pt-[24px] md:pt-[20px] xsm:pt-[25px] 3xl:pl-[81px] xl:pl-[52px] md:pl-[24px] md:pb-[20px] md:pr-[24px] xl:pb-[15px]  flex xl:flex-col md:flex-row xsm:flex-col justify-between'>
        <p className='3xl:max-w-[391px] xl:max-w-[312px] md:max-w-[180px] xsm:max-w-[328px] xl:h-auto md:h-[100px] w-full text-[#7D828E] 3xl:text-[18px] 3xl:leading-[21px] xsm:text-[16px] xsm:leading-[19px]  xl:text-[14px] xl:leading-[16px] md:pt-[3px] xl:pt-[0] md:leading-[20px] font-[400] xl:tracking-[-0.27px] md:tracking-[-0.08px] xsm:tracking-[-0.08px] PPNeue'>You will get your Facial Assessment Report sent to your email address after completing the Free Facial Assessment procedure.</p>
        <div className='3xl:max-w-[625px] xl:max-w-[416px] md:max-w-[419px] xsm:max-w-[348px] w-full 3xl:h-[202px] xl:h-[150px] xsm:h-[150px] xsm:mt-[38px] md:mt-[0px] bg-[#233137] 3xl:pt-[22px] xl:pt-[10px] xsm:pt-[13px] md:pt-[12px] 3xl:pl-[19px] md:pl-[15px] xsm:pl-[10px] xsm:pb-[15px] xl:pl-[15px]  flex flex-col justify-between 3xl:gap-[51px] xl:gap-[27px]'>
        <div className='3xl:max-w-[585px] xl:max-w-[386px] md:max-w-[390px] xsm:max-w-[328px]  w-full border-b-[1.5px] border-solid border-[#FFF] border-opacity-[0.1] 3xl:pb-[6px] xl:pb-[0px] md:pb-[12px] xsm:pb-[13px]  flex items-center justify-between'>
        
            <h1 className='3xl:text-[44px] 3xl:leading-[37px] md:text-[28px] md:leading-[28px] xsm:text-[26px] xsm:leading-[24px] font-[400] xl:h-[50px] text-[#FFF] PPNeue flex items-center'>Begin assessment</h1>
            <svg className='xl:flex xsm:hidden' xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17" fill="none">
<path d="M15.0009 1L22.5009 8.5L15.0009 16" stroke="white" stroke-width="1.5"/>
<path d="M22.5 8.49805H0" stroke="white" stroke-width="1.5"/>
</svg>
<svg className='xsm:flex xl:hidden' xmlns="http://www.w3.org/2000/svg" width="17" height="13" viewBox="0 0 17 13" fill="none">
  <path d="M10.6669 1L16 6.50007L10.6669 12.0001" stroke="white"/>
  <path d="M15.9993 6.49854H-0.000143528" stroke="white"/>
</svg>
         
        </div>
        <div className='3xl:max-w-[245px] xl:max-w-[204px] md:max-w-[311px] xsm:max-w-[257px] w-full '>
            <p className='3xl:text-[16px] 3xl:leading-[17px] xl:text-[13px] md:text-[16px] md:leading-[16px] xsm:text-[16px] xsm:leading-[16px] font-[400] 3xl:tracking-[-0.24px] xl:tracking-[-0.065px] md:tracking-[-0.32px] text-[#FFF] opacity-[0.4] PPNeue500'>By clicking begin you agree  to the privacy policy regarding the  usage of your images for your report.</p>
        </div>
        </div>
       </div>
      </div>
      <div className=' xl:bg-FormPhoto md:bg-FormPhoto_4 xsm:bg-FormPhoto_2 bg-cover  bg-center 3xl:max-w-[50.1%] 3xl:h-[90vh] xsm:h-[450px] xsm:max-w-[375px] md:max-w-[100%]  xl:h-[90vh] md:h-[52.7vh] w-full flex xl:items-center md:items-end md:pb-[40px] xsm:mt-[26px] md:mt-[0px] xl:pb-[0px]' >
        <div className='xl:max-w-[48.5%] md:max-w-[42%] xsm:max-w-[77.3%] 3xl:pt-[18px] md:pt-[15px] xsm:pt-[10px] 3xl:pl-[19px] md:pl-[15px] xsm:pl-[10px] xsm:pb-[12px] xl:pt-[15px] xl:pl-[15px] 3xl:pb-[14px] md:pb-[12px] xl:pb-[13px] mx-auto  w-full xl:h-[47.8vh] md:h-[37vh]  xsm:h-[360px] md:my-0 xsm:my-auto 3xl:border-[1.5px] xsm:border-[1px] border-solid border-[#FFF] flex flex-col justify-between '>
          <h1 className='3xl:text-[24px] 3xl:leading-[28px] xsm:text-[20px] xsm:leading-[22px] font-[400] text-[#FFF] 3xl:max-w-[167px] xl:max-w-[167px] xsm:max-w-[167px]  w-full'>Facial Aesthetic Assessments</h1>
          <div className='3xl:max-w-[330px] xl:max-w-[222px] md:max-w-[292px]  xsm:max-w-[270px] w-full xl:pt-[14px] md:pt-[8px] xsm:pt-[14px] xl:mr-[15px] md:mr-[15px]  border-t-[1.5px] border-solid border-[#FFF] border-opacity-[0.3] flex items-center '>
          {UserInformation.map((i , index)=>(
            <div key={index+ 'UserInformation'} className={`${i.title=='age /' && 'xl:w-[76px] xsm:w-[70px] 3xl:w-[64px]'} ${i.title=='gender /' && 'xl:w-[94px] md:w-[120px] xsm:w-[106px] 3xl:w-[124px]'} ${i.title=='descnent /' && 'w-[124px]'}  flex flex-col 3xl:gap-[5px] md:gap-[5px] xsm:gap-[7px] xl:gap-[3px] uppercase`}>
         <span className={` font-[500] 3xl:text-[13px] md:leading-[13px] md:text-[11px] xsm:leading-[13px] xsm:text-[12px] text-[#FFF] opacity-[0.6]`}>{i.title}</span>
         <span className='font-[500] 3xl:text-[16px] md:text-[13px] md:leading-[13px] xsm:leading-[14px] xsm:text-[16px] text-[#FFF] opacity-[0.8]'>{i.desc}</span>
        </div>
        ))}
          </div>
        </div>
      </div>
     </div>
     </Layout>
  )
}

export default FacialAssessment