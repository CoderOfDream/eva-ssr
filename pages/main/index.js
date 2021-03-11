import React from "react";
import MainOrder from "../../components/main/main-order";
import KeyQualities from "../../components/main/key-qualities";
import OurClients from "../../components/main/our-clients";
import Difference from "../../components/main/difference";
import Comparison from "../../components/main/comparison";
import QualityOfMaterials from "../../components/main/quality-of-materials";

export default function MainPage() {
  return (
    <>
      <MainOrder/>
      <KeyQualities/>
      {/*<OurClients />*/}
      <Difference />
      <Comparison />
      <QualityOfMaterials />
    </>
  )
}