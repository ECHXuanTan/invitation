export default function Footer() {
  return (
    <section className="px-6 py-2 sm:px-40 sm:py-8">
      Copyright ©{new Date().getFullYear()} All rights reserved | This design is
      made with ❤ by
      <a
        href="https://www.facebook.com/duonghaipham2001/"
        target="_blank"
        rel="noreferrer"
        className="font-semibold text-blue-900"
      >
        {" "}
        Yang
      </a>
    </section>
  );
}
