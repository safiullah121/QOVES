import React, { useEffect, useState, useContext } from "react";
import MyContext from "../../Context";

const TextReveal = ({ translation, children, DivClases }) => {
  const { TextRevealForNextBtn } = useContext(MyContext);
  const [TextRevealAnimation, setTextRevealAnimation] = useState(translation);

  useEffect(() => {
    if (TextRevealForNextBtn) {
      setTextRevealAnimation(translation + " ease-in-out duration-[0.8s]");
    } else {
      setTextRevealAnimation("translate-y-[0px] ease-in-out duration-[0.9s]");
    }
  }, [TextRevealForNextBtn]);

  return (
    <>
      <div className={DivClases}>
        <div className={TextRevealAnimation}>{children}</div>
      </div>
    </>
  );
};

export default TextReveal;
