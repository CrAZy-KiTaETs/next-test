// import logo from '/assets/icons/logo.png';
import SubmitBtn from '@/components/UI/submitBtn/SubmitBtn';
import styles from './App.module.css';
import { useSelector } from 'react-redux';

function ReactPage() {

  const value2 = useSelector(state => state.value)
  return (
    <div className={styles.App}>

      <p>new Value: {value2}</p>
      <header className="App-header">
        <img src="/assets/icons/logo.png" className="App-logo" alt="logo" />
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


        <SubmitBtn text={"asdsad"} className={styles.redBtn} id={"dsa"}/>
      </header>
    </div>
  );
}

export default ReactPage;
