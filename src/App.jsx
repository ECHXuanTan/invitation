import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import Card from "./features/Card";
import Footer from "./features/Footer";
import Gallery from "./features/Gallery";
import Introduction from "./features/Introduction";
import Milestone from "./features/Milestone";

export default function App() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("graduationCeremony");
  }, [t]);

  return (
    <>
      <Introduction />
      <Card />
      <Milestone />
      <Gallery />
      <Footer />
    </>
  );
}
