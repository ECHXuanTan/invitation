import { useTranslation } from "react-i18next";
import { HiOutlineAcademicCap } from "react-icons/hi2";

export default function Card() {
  const { t } = useTranslation();
  return (
    <section className="px-6 py-4 sm:px-40 sm:py-16">
      <div className="relative flex flex-wrap justify-around items-center bg-slate-100 shadow-lg">
        <img src="/assets/images/card.jpg" alt="card" width={500} />
        <div
          className="px-10 py-8 text-xl text-gray-500"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          <p className="mb-10">
            {t("card.join").toUpperCase()}
            <br />
            {t("card.graduation").toUpperCase()}
          </p>
          <p
            className="mb-8 text-6xl text-rose-500"
            style={{ fontFamily: "Dancing Script, cursive" }}
          >
            {t("myName")}
          </p>
          <div className="flex justify-center mb-8">
            <HiOutlineAcademicCap className="w-20 h-20 text-gray-400" />
          </div>
          <p className="mb-2">{t("card.on").toUpperCase()}</p>
          <p className="mb-10 text-4xl">28 / 12 / 2023</p>
          <p className="mb-10">
            {t("card.from").toUpperCase()} 8:30 {t("card.to").toUpperCase()}{" "}
            11:00
          </p>
          <p>
            {t("card.at").toUpperCase()}
            <br />
            {t("card.address").toUpperCase()}
          </p>
        </div>
        <div
          className="absolute inset-x-3 inset-y-7"
          style={{ border: "1px solid rgba(0, 0, 0, 0.15)" }}
        ></div>
        <div
          className="absolute inset-x-3 inset-y-7 rotate-1"
          style={{ border: "1px solid rgba(0, 0, 0, 0.15)" }}
        ></div>
      </div>
    </section>
  );
}
