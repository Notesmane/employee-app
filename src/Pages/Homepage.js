
import HPHeader from "../Components/HPHeader";
import EmployeeList from "../Components/EmployeeList";
import SearchBar from "../Components/SearchBar";
import styles from '../Components/Counter.module.css';


function Homepage() {
    return (
        <div className={styles.homepage} >
        {/* style={{backgroundColor: "royalblue", display: 'flex', flexDirection: 'column', justifyContent: 'center'}} */}
            <header>
                {/* <h1>Employee Directory</h1> */}
            </header> 
            <search className="SearchBar">

            </search>
            <div className='employeeList'>

            </div> 
            {/* <h1>Homepage</h1> */}
            <HPHeader />
            <SearchBar />
            <EmployeeList />
        </div>)
}

export default Homepage;

