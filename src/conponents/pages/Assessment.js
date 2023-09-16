import React, { useState, useContext } from "react";
import FacialAssessment from "./FacialAssessment";
import ImageUpload from "./ImageUpload";
import InfoChecking from "./InfoChecking";
import PersonalData from "./PersonalData";
import ReportFormatting from "./ReportFormatting";
import ReportCompleted from "./ReportCompleted";
import MyContext from "../../Context";

const Assessment = () => {
  const {
    navigation,
    setnavigation,
    setTextRevealForNextBtn,
    setimageCropingAnimation,
    setimageCropingAnimationForPersonalData,
  } = useContext(MyContext);

  return (
    <>
      {navigation === "/" && (
        <FacialAssessment
          handleNextClick={() => {
            setTextRevealForNextBtn(true);
            setimageCropingAnimation(true);
            setTimeout(() => {
              setnavigation("/PersonalData");
            }, 500);
            setTimeout(() => {
              setimageCropingAnimation(false);
            }, 500);
            setTimeout(() => {
              setimageCropingAnimationForPersonalData(true);
            }, 500);
            setTimeout(() => {
              setimageCropingAnimationForPersonalData(false);
            }, 515);
            setTimeout(() => {
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
            setimageCropingAnimationForPersonalData(true);
            setTextRevealForNextBtn(true);
            setTimeout(() => {
              setnavigation("/");
              setimageCropingAnimationForPersonalData(false);
              setTextRevealForNextBtn(false);
            }, 700);
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
