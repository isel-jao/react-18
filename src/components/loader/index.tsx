import Lottie, { LottieComponentProps } from "lottie-react";
import animationData from "./animation.json";

interface Props extends Omit<LottieComponentProps, "animationData"> {}

function Loader(props: Props) {
  return <Lottie {...props} animationData={animationData} />;
}

export default Loader;
