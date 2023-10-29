import PropTypes from "prop-types";

export default function Title({ blurredText, text }) {
  return (
    <div className="relative">
      <h1
        className="absolute inset-0 opacity-20 text-7xl"
        style={{ fontFamily: "Tilt Warp, sans-serif" }}
      >
        {blurredText}
      </h1>
      <h1
        className="absolute inset-0 text-blue-800 text-8xl"
        style={{ fontFamily: "Great Vibes, cursive" }}
      >
        {text}
      </h1>
    </div>
  );
}

Title.propTypes = {
  blurredText: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
