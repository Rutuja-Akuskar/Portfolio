import React from "react";
import Lottie from "lottie-react";
import doctorAnimation from "../../lottie/doctor.json"; // Your existing Lottie file

interface Props {
  state: "idle" | "talking";
}

const DoctorAvatarLottie: React.FC<Props> = ({ state }) => {
  const loop = state === "talking"; // loop while talking
  return (
    <div className="w-40 h-40">
      <Lottie animationData={doctorAnimation} loop={loop} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default DoctorAvatarLottie;
