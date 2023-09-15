import React, { useState, useContext } from "react";
import FacialAssessment from "./FacialAssessment";
import ImageUpload from "./ImageUpload";
import InfoChecking from "./InfoChecking";
import PersonalData from "./PersonalData";
import ReportFormatting from "./ReportFormatting";
import ReportCompleted from "./ReportCompleted";
import MyContext from "../../Context";

const Assessment = () => {
  const { navigation, setnavigation, setTextRevealForNextBtn } =
    useContext(MyContext);

  return (
    <>
      {navigation === "/" && (
        <FacialAssessment
          handleNextClick={() => {
            setTextRevealForNextBtn(true);
            setTimeout(() => {
              setnavigation("/PersonalData");
              setTextRevealForNextBtn(false);
            }, 500);
          }}
        />
      )}
      {navigation === "/PersonalData" && (
        <PersonalData
          handleNextClick={() => {
            setTextRevealForNextBtn(true);
            setTimeout(() => {
              setnavigation("/ImageUpload");
              setTextRevealForNextBtn(false);
            }, 500);
          }}
          handlePrevClick={() => {
            setTextRevealForNextBtn(true);
            setTimeout(() => {
              setnavigation("/");
              setTextRevealForNextBtn(false);
            }, 500);
          }}
        />
      )}
      {navigation === "/ImageUpload" && (
        <ImageUpload
          handleNextClick={() => {
            setTextRevealForNextBtn(true);
            setTimeout(() => {
              setnavigation("/InfoChecking");
              setTextRevealForNextBtn(false);
            }, 500);
          }}
          handlePrevClick={() => {
            setTextRevealForNextBtn(true);
            setTimeout(() => {
              setnavigation("/PersonalData");
              setTextRevealForNextBtn(false);
            }, 500);
          }}
        />
      )}
      {navigation === "/InfoChecking" && (
        <InfoChecking
          handleNextClick={() => {
            setTextRevealForNextBtn(true);
            setTimeout(() => {
              setnavigation("/ReportFormatting");
              setTextRevealForNextBtn(false);
            }, 500);
          }}
          handlePrevClick={() => {
            setTextRevealForNextBtn(true);
            setTimeout(() => {
              setnavigation("/ImageUpload");
              setTextRevealForNextBtn(false);
            }, 500);
          }}
        />
      )}
      {navigation === "/ReportFormatting" && (
        <ReportFormatting
          handleNextClick={() => {
            setTextRevealForNextBtn(true);
            setTimeout(() => {
              setnavigation("/ReportCompleted");
              setTextRevealForNextBtn(false);
            }, 500);
          }}
          handlePrevClick={() => {
            setTextRevealForNextBtn(true);
            setTimeout(() => {
              setnavigation("/InfoChecking");
              setTextRevealForNextBtn(false);
            }, 500);
          }}
        />
      )}
      {navigation === "/ReportCompleted" && (
        <ReportCompleted
          handlePrevClick={() => {
            setTextRevealForNextBtn(true);
            setTimeout(() => {
              setnavigation("/ReportFormatting");
              setTextRevealForNextBtn(false);
            }, 500);
          }}
        />
      )}
    </>
  );
};

export default Assessment;
