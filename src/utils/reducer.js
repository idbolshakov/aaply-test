export const initialState = {
  templates: [],
  undoLog: [],
};

export function reducer(state, action) {
  switch (action.type) {
    case "add-template":
      return {
        ...state,
        templates: [...state.templates, action.payload],
        undoLog: [...state.undoLog, { ...state }],
      };

    case "drag-start":
      return {
        ...state,
        templates: action.payload,
        undoLog: [...state.undoLog, { ...state }],
      };

    case "drag-end":
      return {
        ...state,
        templates: action.payload,
      };

    case "undo":
      return {
        ...state.undoLog.slice(-1)[0],
        undoLog: state.undoLog.slice(0, -1),
      };
    default:
      throw new Error();
  }
}
