import classNames from "classnames";
import PropTypes from "prop-types";

export default function Title({ blurredText, text, isLight }) {
  return (
    <div className="relative h-36">
      <h1
        className={classNames("absolute inset-0 opacity-20 text-7xl", {
          "text-gray-800": isLight,
          "text-white": !isLight,
        })}
        style={{ fontFamily: "Tilt Warp, sans-serif" }}
      >
        {blurredText}
      </h1>
      <h1
        className={classNames(
          "absolute inset-0 text-8xl",
          isLight ? "text-blue-800" : "text-white"
        )}
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
  isLight: PropTypes.bool,
};

Title.defaultProps = {
  isLight: true,
};
