// MyContext.js
import React, { createContext, useState } from "react";

// Create a context object
const MyContext = createContext();

// Create a provider component
export function MyProvider({ children }) {
  // Define the state or data you want to share

  const [imageCropingAnimation, setimageCropingAnimation] = useState(false);
  const [imageCropingAnimationForPersonalData, setimageCropingAnimationForPersonalData] = useState(false);
  const [navigation, setnavigation] = useState("/");
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
        imageCropingAnimationForPersonalData
        ,setimageCropingAnimationForPersonalData
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default MyContext;
