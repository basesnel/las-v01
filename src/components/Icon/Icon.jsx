import icons from "../../assets/icons.svg";

const Icon = ({ icon, width, height, ...delegated }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      focusable="false"
      aria-hidden={true}
      {...delegated}
    >
      <use href={`${icons}#${icon}`}></use>
    </svg>
  );
};

export default Icon;
