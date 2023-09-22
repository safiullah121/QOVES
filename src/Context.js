// MyContext.js
import React, { createContext, useState } from "react";

// Create a context object
const MyContext = createContext();

// Create a provider component
export function MyProvider({ children }) {
  // Define the state or data you want to share

  const [imageCropingAnimation, setimageCropingAnimation] = useState(false);
  const [
    imageCropingAnimationForPersonalData,
    setimageCropingAnimationForPersonalData,
  ] = useState(false);
  const [nextBtnShakingAnime, setnextBtnShakingAnime] = useState(null);
  const [navigation, setnavigation] = useState("/ImageUpload");
  const [TextRevealForNextBtn, setTextRevealForNextBtn] = useState(false);
  const [rightSideConditionallyRendering, setrightSideConditionallyRendering] =
    useState(false);
  const [userDetails, setuserDetails] = useState({
    name: "",
    age: "",
    email: "",
    pronoun: "",
    group: "",
    gender: "",
  });
  const [uploadedImage, setuploadedImage] = useState("");
  const [typewriterEffect, settypewriterEffect] = useState(null);
  return (
    <MyContext.Provider
      value={{
        navigation,
        setnavigation,
        TextRevealForNextBtn,
        setTextRevealForNextBtn,
        userDetails,
        setuserDetails,
        imageCropingAnimation,
        setimageCropingAnimation,
        rightSideConditionallyRendering,
        setrightSideConditionallyRendering,
        imageCropingAnimationForPersonalData,
        setimageCropingAnimationForPersonalData,
        uploadedImage,
        setuploadedImage,
        nextBtnShakingAnime,
        setnextBtnShakingAnime,
        typewriterEffect,
        settypewriterEffect,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default MyContext;
