
import EPHeader from "../Components/EPHeader";
import EmployeeInfo from "../Components/EmployeeInfo";
import styles from "../Components/Counter.module.css";

function EmployeePage() {
    return (
        <div className={styles.empPage}>
            {/* <header>
                <h1>Employee Directory</h1>
            </header> */}
            {/* <search className="SearchBar">

            </search>
            <div className='employeeList'>

            </div> */}
            <EPHeader />
            <EmployeeInfo />
            {/* <div>
                <h3>Employee Info And Photo</h3>
            </div> */}
        </div>)
}

export default EmployeePage;