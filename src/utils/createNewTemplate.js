import jsxSvg2Canvas from "utils/jsxSvg2Canvas";

const createNewTemplate = async (data) => ({
  ...data,
  id: `${data.title}-${Date.now()}`,
  x: 15,
  y: 15,
  canvas: await jsxSvg2Canvas(data.item),
});

export default createNewTemplate;
