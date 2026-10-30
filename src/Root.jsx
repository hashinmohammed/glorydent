import { StrictMode } from "react";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import App from "./App.jsx";

const Root = () => (
  <StrictMode>
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <App />
      </MotionConfig>
    </LazyMotion>
  </StrictMode>
);

export default Root;
