import { useTranslation } from "react-i18next";
import { HiOutlineAcademicCap } from "react-icons/hi2";

export default function Card() {
  const { t } = useTranslation();
  return (
    <section className="px-6 py-4 sm:px-40 sm:py-16">
      <div className="relative flex flex-wrap justify-around items-center bg-slate-100 shadow-lg">
        <img src="/assets/images/card.png" alt="card" width={500} />
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
            Đào Xuân Tân
          </p>
          <div className="flex justify-center mb-8">
            <HiOutlineAcademicCap className="w-20 h-20 text-gray-400" />
          </div>
          <p className="mb-2">{t("card.on").toUpperCase()}</p>
          <p className="mb-10 text-4xl"> Thứ 5, 11 / 7 / 2024</p>
          <p className="mb-10">
            {t("card.from").toUpperCase()} 13:00 {t("card.to").toUpperCase()}{" "}
            17:00
          </p>
          <p>
            Tại A.313, Trường Đại học Sư Phạm Thành phố Hồ Chí Minh
            <br />
            280 An Dương Vương, Quận 5, TP. Hồ Chí Minh
          </p>
          <p>
          <br />
            SĐT: 0387397628
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
