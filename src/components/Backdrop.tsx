import { useEffect } from "react";
import globe from "../assets/images/globe.png";
import { animated, easings, useSpring } from "@react-spring/web";

export const Backdrop = () => {
  const [globe0, api0] = useSpring(() => ({
    from: {
      rotate: "0deg",
      y: "-50%",
    },
  }));
  const [globe1, api1] = useSpring(() => ({
    from: {
      rotate: "0deg",
    },
  }));

  useEffect(() => {
    api0.start({
      loop: true,
      to: async (next) => {
        await next({
          to: {
            rotate: "20deg",
          },
        });
        await next({
          to: {
            rotate: "0deg",
          },
        });
      },
      config: {
        duration: 4000,
        easing: easings.easeOutSine,
      },
    });
    api1.start({
      loop: true,
      to: async (next) => {
        await next({
          to: {
            rotate: "40deg",
          },
        });
        await next({
          to: {
            rotate: "0deg",
          },
        });
      },
      config: {
        duration: 5000,
        easing: easings.easeOutSine,
      },
    });
  }, []);

  return (
    <>
      <animated.img
        style={globe0}
        src={globe}
        className="absolute -right-100px top-0 w-305px lg:(w-auto)"
      />
      <animated.img
        style={globe1}
        src={globe}
        className="absolute -left-50px top-30% w-140px lg:(w-205px top-20%)"
      />
    </>
  );
};
