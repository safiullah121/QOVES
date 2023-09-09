import React from 'react'
import Layout from '../common/Layout'

const ReportFormatting = () => {
    const reportDivs = [
        {src:'/img/FormattingDiv1.png', classes:'absolute 3xl:w-[60px] 3xl:h-[60px] xl:w-[40px] md:w-[66px] md:h-[66px] xl:h-[40px] top-0 xl:left-[84px] md:left-[128px] '},
        {src:'/img/FormattingDiv2.png', classes:'absolute 3xl:w-[60px] 3xl:h-[60px] xl:w-[40px] md:w-[66px] md:h-[66px] xl:h-[40px] 3xl:top-[60px] xl:top-[40px] 3xl:left-[143px] xl:left-[124px] md:left-[188px] md:top-[60px]'},
        {src:'/img/FormattingDiv3.png', classes:'absolute 3xl:w-[60px] 3xl:h-[60px] xl:w-[40px] md:w-[66px] md:h-[66px] xl:h-[40px] 3xl:top-[110px] xl:top-[70px]  md:top-[90px] 3xl:right-[272px] xl:right-[200px] md:right-[20px] '},
        {src:'/img/FormattingDiv4.png', classes:'absolute 3xl:w-[60px] 3xl:h-[60px] xl:w-[40px] md:w-[66px] md:h-[66px] xl:h-[40px] xl:bottom-0 md:bottom-[250px] left-[0px] '},
        {src:'/img/FormattingDiv5.png', classes:'absolute 3xl:w-[60px] 3xl:h-[60px] xl:w-[40px] md:w-[66px] md:h-[66px] xl:h-[40px] 3xl:bottom-[80px] xl:bottom-[50px] 3xl:left-[313px] xl:left-[200px] md:bottom-[145px]  md:left-[220px]'},
        {src:'/img/FormattingDiv6.png', classes:'absolute 3xl:w-[60px] 3xl:h-[60px] xl:w-[40px] md:w-[66px] md:h-[66px] xl:h-[40px] 3xl:bottom-[100px] xl:bottom-[65px] 3xl:right-[302px] xl:right-[220px] md:bottom-[0px]  md:right-[0px]'},
        {src:'/img/FormattingDiv7.png', classes:'absolute 3xl:w-[60px] 3xl:h-[60px] xl:w-[40px] md:w-[66px] md:h-[66px] xl:h-[40px] 3xl:bottom-[60px] xl:bottom-[40px] 3xl:right-[60px] xl:right-[40px]  md:bottom-[130px]  md:right-[260px]'},
        {src:'/img/FormattingDiv8.png', classes:'absolute 3xl:w-[60px] 3xl:h-[60px] xl:w-[40px] md:w-[66px] md:h-[66px] xl:h-[40px] xl:bottom-0 md:bottom-[70px] xl:right-[0px] md:right-[200px] '}
    ]
  return (
    <Layout>
        <div className='xl:h-full md:h-[76.8vh] flex justify-center items-center'>
        <div className='relative 3xl:h-[82%] xl:h-[78%] md:h-[94.2%] 3xl:max-w-[88.8%] xl:max-w-[91.8%]  md:max-w-[93%] w-full flex items-center justify-center'>
      <h1 className='text-center italic 3xl:text-[180px] xl:text-[96px] md:text-[96px] font-[100] 3xl:leading-[160px] md:leading-[96px] text-[#233137] dentonCond'>Report <br/> is forming...</h1>
      {reportDivs.map((i , index)=>(
       <div className={`${i.classes}`}  key={index+'report'}>
        <img src={i.src} alt="" />
       </div>
      ))}
        </div>
        </div>
    </Layout>
  )
}

export default ReportFormatting
