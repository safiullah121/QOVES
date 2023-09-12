import React, { useState , useContext} from 'react'
import FacialAssessment from './FacialAssessment'
import ImageUpload from './ImageUpload'
import InfoChecking from './InfoChecking'
import PersonalData from './PersonalData'
import ReportFormatting from './ReportFormatting'
import ReportCompleted from './ReportCompleted'
import MyContext from '../../Context'

const Assessment = () => {
     const {navigation , setnavigation} = useContext(MyContext)
     
  return (
<>
          {navigation === '/' && <FacialAssessment 
             handleNextClick={() => setnavigation('/PersonalData')}
          />}
          {navigation === '/PersonalData' && (
            <PersonalData
              handleNextClick={() => setnavigation('/ImageUpload')}
              handlePrevClick={() => setnavigation('/')}
            />
          )}
          {navigation === '/ImageUpload' && (
            <ImageUpload
              handleNextClick={() => setnavigation('/InfoChecking')}
              handlePrevClick={() => setnavigation('/PersonalData')}
            />
          )}
          {navigation === '/InfoChecking' && (
            <InfoChecking
              handleNextClick={() => setnavigation('/ReportFormatting')}
              handlePrevClick={() => setnavigation('/ImageUpload')}
            />
          )}
          {navigation === '/ReportFormatting' && (
            <ReportFormatting
              handleNextClick={() =>  setnavigation('/ReportCompleted')}
              handlePrevClick={() => setnavigation('/InfoChecking')}
            />
          )}
          {navigation === '/ReportCompleted' && <ReportCompleted 
           handlePrevClick={() => setnavigation('/ReportFormatting')}
           />}
    </>
  )
}

export default Assessment
