import { HiOutlineAcademicCap } from "react-icons/hi2";

export default function Card() {
  return (
    <section className="px-6 py-4 sm:px-40 sm:py-16">
      <div className="relative flex flex-wrap justify-around items-center bg-slate-100 shadow-lg">
        <img src="src/assets/images/card.jpg" alt="card" width={500} />
        <div
          className="px-10 py-8 text-xl text-gray-500"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          <p className="mb-10">
            JOIN TO CELEBRATE
            <br />
            THE GRADUATION CEREMONY OF
          </p>
          <p
            className="mb-8 text-6xl text-rose-500"
            style={{ fontFamily: "Dancing Script, cursive" }}
          >
            Pham Hai Duong
          </p>
          <div className="flex justify-center mb-8">
            <HiOutlineAcademicCap className="w-20 h-20 text-gray-400" />
          </div>
          <p className="mb-2">WHICH IS ON</p>
          <p className="mb-10 text-4xl">28 | DEC | 2023</p>
          <p className="mb-10">FROM 8:30 TO 11:00</p>
          <p>
            AT VNUHCMC - UNIVERSITY OF SCIENCE
            <br />
            <span className="text-xl">
              227 NGUYEN VAN CU ST., DISTRICT 5, HCMC
            </span>
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
