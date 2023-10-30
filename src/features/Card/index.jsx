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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={0.8}
              stroke="currentColor"
              className="w-20 h-20"
            >
              <path
                opacity={0.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              />
            </svg>
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
