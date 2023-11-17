import { useState } from "react";
import { useTranslation } from "react-i18next";
import Title from "../../components/Title";

export default function Gallery() {
  const { t } = useTranslation();

  const [srcSet] = useState([
    "/assets/images/00a.jpg",
    "/assets/images/00b.jpg",
    "/assets/images/01.jpg",
    "/assets/images/02.jpg",
    "/assets/images/03.jpg",
    "/assets/images/04.jpg",
    "/assets/images/05.jpg",
    "/assets/images/06.jpg",
    "/assets/images/07.jpg",
    "/assets/images/08.jpg",
    "/assets/images/09.jpg",
    "/assets/images/10.jpg",
    "/assets/images/11.jpg",
    "/assets/images/12.jpg",
    "/assets/images/13.jpg",
    "/assets/images/14.jpg",
    "/assets/images/15.jpg",
    "/assets/images/16.jpg",
    "/assets/images/17.jpg",
    "/assets/images/18.jpg",
    "/assets/images/19.jpg",
    "/assets/images/20.jpg",
    "/assets/images/21.jpg",
    "/assets/images/22.jpg",
    "/assets/images/23.jpg",
    "/assets/images/24.jpg",
  ]);

  return (
    <section className="px-6 py-4 sm:px-40 sm:py-16 bg-blue-50">
      <Title blurredText={t("gallery.photos")} text={t("gallery.title")} />
      <div className="columns-1 sm:columns-3 gap-4 space-y-4">
        {srcSet.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="gallery"
            className="w-full"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}
