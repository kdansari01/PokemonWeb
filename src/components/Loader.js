// import { DotSpinner } from "@uiball/loaders";
import "./loader.css";
export const Loader = () => {
  return (
    <div className="container-loader">
      {/* <DotSpinner size={40} speed={0.9} color="black" /> */}
      <div className="spin-10"></div>
    </div>
    // <div className="wobbling-10"></div>
  );
};
