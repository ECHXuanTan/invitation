import { useState } from "react";
import { useTranslation } from "react-i18next";
import Title from "../../components/Title";

export default function Gallery() {
  const { t } = useTranslation();

  const [srcSet] = useState([
    "src/assets/images/mock-01.png",
    "src/assets/images/mock-02.png",
    "src/assets/images/mock-03.png",
    "src/assets/images/mock-04.png",
    "src/assets/images/mock-05.png",
    "src/assets/images/mock-06.png",
  ]);

  return (
    <section className="px-6 py-4 sm:px-40 sm:py-16 bg-blue-50">
      <Title blurredText={t("gallery.photos")} text={t("gallery.title")} />
      <div className="columns-1 sm:columns-3 gap-4 space-y-4">
        {srcSet.map((src, index) => (
          <img key={index} src={src} alt="gallery" className="w-full" />
        ))}
      </div>
    </section>
  );
}
