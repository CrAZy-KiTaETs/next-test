// import logo from '/assets/icons/logo.png';
// import SubmitBtn from '@/components/UI/submitBtn/SubmitBtn';
import styles from "./App.module.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import { increment } from "./store/mySlicer";
import { useEffect } from "react";

function ReactPage() {
  const value = useSelector((state) => state.lox.count);
  const dispatch = useDispatch();

  return (
      <div className={styles.App}>
        <p>new Value: {value}</p>
        <button onClick={() => dispatch(increment())}>add</button>
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.sadasdsadad
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          {/* <SubmitBtn text={"asdsad"} className={styles.redBtn} id={"dsa"}/> */}
        </header>
      </div>
  );
}

export default ReactPage;
