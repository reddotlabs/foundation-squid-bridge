import React, { useRef } from "react";
import name from "../assets/images/logo-name.svg";
import logoSingle from "../assets/images/logo-single.svg";
import { animated, easings, useSpring } from "@react-spring/web";

type LogoProps = {
  loop?: boolean;
};
export const Logo: React.FC<LogoProps> = ({ loop }) => {
  const firstSpin = useRef(true);
  const logoAnimation = useSpring({
    from: {
      rotate: "360deg",
      opacity: 0,
    },
    to: {
      rotate: "0deg",
      opacity: 1,
    },
    loop: loop,
    delay: () => {
      if (firstSpin.current) {
        return 2000;
      }
      return 15000;
    },
    config: {
      duration: 1200,
      easing: easings.easeOutBack,
    },
    onStart: () => {
      firstSpin.current = false;
    },
  });
  const nameAnimation = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay: 2300,
    config: {
      duration: 2000,
      easing: easings.easeOutBack,
    },
  });
  return (
    <div className="flex items-center h-28px gap-x-9px lg:h-34px md:gap-x-12px">
      <animated.div style={logoAnimation}>
        <img
          src={logoSingle}
          className="h-28px w-28px lg:h-34px lg:w-34px block [&_path]:fill-#633821 -my-4px"
        />
      </animated.div>
      <animated.img
        style={nameAnimation}
        src={name}
        alt="foundation"
        className="h-24px lg:h-33.8px block"
      />
    </div>
  );
};
