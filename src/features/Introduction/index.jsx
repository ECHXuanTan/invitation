import { useEffect, useState } from "react";
import { HiOutlineBookOpen } from "react-icons/hi2";

export default function Introduction() {
  const [srcSet] = useState([
    "src/assets/images/intro-01.jpg",
    "src/assets/images/intro-02.jpg",
    "src/assets/images/intro-03.jpg",
    "src/assets/images/intro-04.jpg",
    "src/assets/images/intro-05.jpg",
  ]);

  const [imgSrc, setImgSrc] = useState(srcSet[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index++;
      setImgSrc(srcSet[index % srcSet.length]);
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <section className="relative flex justify-center items-center">
      <img
        src={imgSrc}
        alt="slider"
        className="w-screen object-cover object-center"
        style={{ height: "700px" }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute">
        <div className="flex justify-center mb-8">
          <HiOutlineBookOpen className="w-20 h-20 text-white" />
        </div>
        <h1
          className="mb-8 font-semibold text-white text-base"
          style={{ letterSpacing: "0.75rem" }}
        >
          - THE GRADUATION OF -
        </h1>
        <h1
          className="mb-8 text-white text-8xl text-center"
          style={{ fontFamily: "Dancing Script, cursive" }}
        >
          Pham Hai Duong
        </h1>
        <h1
          className="font-semibold text-white text-base"
          style={{ letterSpacing: "0.75rem" }}
        >
          WELCOME
        </h1>
      </div>
    </section>
  );
}
