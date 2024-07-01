import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import Card from "./features/Card";
import Footer from "./features/Footer";
import Introduction from "./features/Introduction";
import Milestone from "./features/Milestone";
import mp3 from './assets/mp3.mp3'

export default function App() {
  const { t } = useTranslation();
  const audio = new Audio(mp3);

  useEffect(() => {
    document.title = t("graduationCeremony");

    const playAudio = () => {
      audio.play().catch(console.error);
      document.removeEventListener('click', playAudio);
    };

    document.addEventListener('click', playAudio);

    return () => {
      document.removeEventListener('click', playAudio);
      audio.pause();
    };
  }, [t]);

  return (
    <>
      <Introduction />
      <Card />
      <Milestone />
      <Footer />
    </>
  );
}