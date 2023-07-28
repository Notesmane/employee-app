import './App.css';
import Homepage from './Pages/Homepage';
import EmployeePage from './Pages/EmployeePage';
import styles from './Components/Counter.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Homepage />
      <EmployeePage />
    </div>
  );
}

export default App;
