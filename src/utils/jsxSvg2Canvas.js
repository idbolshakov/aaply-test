import { renderToStaticMarkup } from "react-dom/server";
import Canvg from "canvg";

const jsxSvg2Canvas = async (jsxSvg) => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  const canvg = await Canvg.from(context, renderToStaticMarkup(jsxSvg));

  canvg.start();

  return canvas;
};

export default jsxSvg2Canvas;
