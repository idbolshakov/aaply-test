import { Stage, Layer, Image } from "react-konva";

function Canvas({ templates, dispatch }) {
  const handleDragStart = (e) => {
    const id = e.target.id();

    dispatch({
      type: "drag-start",
      payload: templates.map((template) => {
        return {
          ...template,
          isDragging: template.id === id,
        };
      }),
    });
  };

  const handleDragEnd = (e) => {
    const id = e.target.id();

    dispatch({
      type: "drag-end",
      payload: templates.map((template) => {
        return {
          ...template,
          isDragging: false,
          x: template.id === id ? e.target.x() : template.x,
          y: template.id === id ? e.target.y() : template.y,
        };
      }),
    });
  };

  return (
    <>
      <Stage width={window.innerWidth - 400} height={window.innerHeight}>
        <Layer>
          {templates.map((template) => (
            <Image
              draggable
              key={template.id}
              id={template.id}
              image={template.canvas}
              x={template.x}
              y={template.y}
              scaleX={template.isDragging ? 1.2 : 1}
              scaleY={template.isDragging ? 1.2 : 1}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            />
          ))}
        </Layer>
      </Stage>
    </>
  );
}

export default Canvas;
