import { useCallback, useReducer } from "react";
import createNewTemplate from "utils/createNewTemplate";
import { initialState, reducer } from "utils/reducer";

import Canvas from "components/Canvas";
import Undo from "components/Undo";
import Library from "components/Library";

import styles from "./App.module.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSelectTemplate = useCallback(
    async (data) => {
      dispatch({
        type: "add-template",
        payload: await createNewTemplate(data),
      });
    },
    [dispatch]
  );

  return (
    <div className={styles.inner}>
      <div className={styles.canvas}>
        <Canvas templates={state.templates} dispatch={dispatch} />
      </div>

      <div className={styles.toolbar}>
        <Undo disabled={!state.undoLog.length} dispatch={dispatch} />

        <Library handleSelectTemplate={handleSelectTemplate} />
      </div>
    </div>
  );
}

export default App;
