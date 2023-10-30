import { useEffect, useState } from "react";

export default function Introduction() {
  const [srcSet] = useState([
    "src/assets/images/intro-01.jpg",
    "src/assets/images/intro-02.jpg",
    "src/assets/images/intro-03.jpg",
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
      <h1
        className="absolute text-white text-8xl text-center"
        style={{ fontFamily: "Dancing Script, cursive" }}
      >
        Graduation Ceremony
      </h1>
    </section>
  );
}
