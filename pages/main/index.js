import React from "react";
import MainOrder from "../../components/main/main-order";
import KeyQualities from "../../components/main/key-qualities";
import Difference from "../../components/main/difference";
import Comparison from "../../components/main/comparison";
import QualityOfMaterials from "../../components/main/quality-of-materials";
import SpecificCar from "../../components/main/specific-car";
import ContactUs from "../../components/contact-us";

export default function MainPage() {
  return (
    <>
      <MainOrder/>
      <KeyQualities/>
      <Difference />
      <Comparison />
      <QualityOfMaterials />
      <SpecificCar />
      <ContactUs />
    </>
  )
}