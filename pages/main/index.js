import React from "react";
import MainOrder from "../../components/main/main-order";
import KeyQualities from "../../components/main/key-qualities";
import Difference from "../../components/main/difference";
import Comparison from "../../components/main/comparison";
import QualityOfMaterials from "../../components/main/quality-of-materials";
import SpecificCar from "../../components/main/specific-car";
import MadeInPoland from "../../components/main/made-in-poland";
import Warning from "../../components/main/warning";
import OfficialGuarantee from "../../components/main/official-guarantee";
import EcoPackage from "../../components/main/eco-package";

export default function MainPage() {
  return (
    <>
      <MainOrder/>
      <KeyQualities/>
      <Difference />
      <Comparison />
      <QualityOfMaterials />
      <SpecificCar />
      <MadeInPoland />
      <Warning />
      <OfficialGuarantee />
      <EcoPackage />
    </>
  )
}