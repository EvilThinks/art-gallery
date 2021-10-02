import React, { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";
import SheduleDetailsAside from "../layout/SheduleDetailsAside";
import { sheduleDetails } from "../../componentConfigs/sheduleDetails";
import CurrentExibitionsHome from "./CurrentExibitionHome";
import AboutOnwievBlock from "./AboutOnwievBlock";
import CollectionsHome from "./CollectionsHome";
import SupportUsBlock from "./SupportUsBlock";
import { supportUsItems } from "../../componentConfigs/supportUs";
import SponsorsHome from "./SponsorsHome";
import NewsLetterHome from "./NewsLetterHome";
import {
  getCurrentExibitions,
  getCollections,
  getExibitionsOnView,
} from "../../api";

const HomeDefault = () => {
  const [currentlyOnView, setCurrentlyOnView] = useState([]);
  const [collections, setCollections] = useState([]);
  const [exibitionsOnView, setExibitionsOnView] = useState([]);
  useEffect(() => {
    let isUnmounted = false;
    const getCurrentExibitionsData = async () => {
      const currentExibitions = await getCurrentExibitions();
      const collectionsData = await getCollections();
      const exibitionsOnView = await getExibitionsOnView();
      console.log(currentExibitions,collectionsData,exibitionsOnView)
      if (!isUnmounted) {
        setCurrentlyOnView(currentExibitions);
        setCollections(collectionsData);
        setExibitionsOnView(exibitionsOnView);
      }
    };
    getCurrentExibitionsData();
    return () => {
      isUnmounted = true;
    };
  }, []);
  return (
    <>
      <Carousel items={currentlyOnView}></Carousel>
      <SheduleDetailsAside
        sheduleDetails={sheduleDetails}
      ></SheduleDetailsAside>
      <CurrentExibitionsHome
        exhibitions={exibitionsOnView}
      ></CurrentExibitionsHome>
      <AboutOnwievBlock></AboutOnwievBlock>
      <CollectionsHome collections={collections}></CollectionsHome>
      <SupportUsBlock items={supportUsItems}></SupportUsBlock>
      <SponsorsHome></SponsorsHome>
      <NewsLetterHome></NewsLetterHome>
    </>
  );
};

export default HomeDefault;
