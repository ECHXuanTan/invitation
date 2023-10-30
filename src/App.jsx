import "./App.css";
import Card from "./features/Card";
import Gallery from "./features/Gallery";
import Introduction from "./features/Introduction";
import Milestone from "./features/Milestone";

export default function App() {
  return (
    <>
      <Introduction />
      <Card />
      <Milestone />
      <Gallery />
    </>
  );
}
