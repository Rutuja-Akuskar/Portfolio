import React, { useEffect } from "react";
import "./Ethical.css";

import SafeClinicalPractices from "../assets/CoreEthicalPrinciples/SafeClinicalPractices.png";
import EvidenceBasedPractice from "../assets/CoreEthicalPrinciples/EvidenceBasedPractice.png";
import CompassionateCare from "../assets/CoreEthicalPrinciples/CompassionateCare.png";
import ContinuousLearning from "../assets/CoreEthicalPrinciples/ContinuousLearning.png";
import ethicsbackground from "../assets/CoreEthicalPrinciples/ethicsbackground.png";

export default function Ethical() {
  useEffect(() => {
    const cardArray = document.querySelectorAll(".ethic-wrapper");
    const title = document.querySelector(".ethic-title");
    const description = document.querySelector(".ethic-info");
    const ethicWheel = document.querySelector(".ethic-wheel");
    const iconsWheel = document.querySelector(".icons-wheel");
    const ethicText = document.querySelector(".ethic-text");

    const iconImages = document.querySelectorAll(".dynamic-icon");
    const bgImages = document.querySelectorAll(".background-icon");

    let currentCard = cardArray[0];
    let deg = -45;

    const ethicsData = [
      {
        name: "Patient First",
        description:
          "We prioritize patient health, comfort, and informed decision-making above everything else.",
        bg: "linear-gradient(90deg, #5f4b8b 0%, #5f5aa2 40%, #3d1f91 100%)",
      },
      {
        name: "Transparency & Trust",
        description:
          "We maintain full transparency in diagnosis, pricing, treatment and medical communication.",
        bg: "linear-gradient(90deg, #0f233b 0%, #136189 40%, #33a1c9 100%)",
      },
      {
        name: "Compassionate Care",
        description:
          "We treat every patient with empathy, respect, emotional support and full dignity.",
        bg: "linear-gradient(90deg, #0a5c38 0%, #2eb87f 40%, #47e4b8 100%)",
      },
      {
        name: "Ethical Treatments",
        description:
          "We recommend only necessary and clinically justified procedures — no over-treatment.",
        bg: "linear-gradient(90deg, #6c0000 0%, #b32b2b 40%, #df6b36 100%)",
      },
    ];

    cardArray.forEach((element, index) => {
      element.addEventListener("click", () => {
        document.querySelector(".ethical-container").style.background =
          ethicsData[index].bg;

        deg -= 90;
        ethicWheel.style.transform = `rotate(${deg}deg)`;
        iconsWheel.style.transform = `rotate(${deg}deg)`;

        // keep icons straight
        iconImages.forEach((img) => (img.style.transform = `rotate(${-deg}deg)`));

        // keep background wheel also straight (FIX ADDED)
        bgImages.forEach((img) => (img.style.transform = `rotate(${-deg}deg)`));

        title.innerHTML = ethicsData[index].name;
        description.innerHTML = ethicsData[index].description;

        currentCard.classList.remove("activePhoto");
        element.classList.add("activePhoto");
        currentCard = element;

        ethicText.classList.add("fade-in");
        setTimeout(() => ethicText.classList.remove("fade-in"), 900);
      });
    });
  }, []);

  return (
    <main className="ethical-container">
      <div className="content ethic-text">
        <h1 className="ethic-title">Patient First</h1>
        <p className="ethic-info">
          We prioritize patient health, comfort, and informed decision-making above everything else.
        </p>
        {/* <button className="ethic-btn">Know More</button> */}
      </div>

      <div className="photos">
        <div className="ethic-wrapper activePhoto">
          <img className="static-icon" src={SafeClinicalPractices} alt="" />
        </div>
        <div className="ethic-wrapper">
          <img className="static-icon" src={EvidenceBasedPractice} alt="" />
        </div>
        <div className="ethic-wrapper">
          <img className="static-icon" src={CompassionateCare} alt="" />
        </div>
        <div className="ethic-wrapper">
          <img className="static-icon" src={ContinuousLearning} alt="" />
        </div>
      </div>

      <div className="ethic-wheel">
        <img className="dynamic-icon dynamic-icon-1" src={SafeClinicalPractices} alt="" />
        <img className="dynamic-icon dynamic-icon-2" src={EvidenceBasedPractice} alt="" />
        <img className="dynamic-icon dynamic-icon-3" src={CompassionateCare} alt="" />
        <img className="dynamic-icon dynamic-icon-4" src={ContinuousLearning} alt="" />
      </div>

      <div className="icons-wheel">
        <img className="background-icon dynamic-icons-1" src={ethicsbackground} alt="" />
        <img className="background-icon dynamic-icons-2" src={ethicsbackground} alt="" />
        <img className="background-icon dynamic-icons-3" src={ethicsbackground} alt="" />
        <img className="background-icon dynamic-icons-4" src={ethicsbackground} alt="" />
      </div>
    </main>
  );
}
