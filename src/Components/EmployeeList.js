import styles from './Counter.module.css';
import EmployeeListItem from "./EmployeeListItem";


function EmployeeList() {
    return (
        <div className={styles.empList}>

            {/* <h1>Employee List</h1> */}
            <EmployeeListItem />
            <EmployeeListItem />
            <EmployeeListItem />
            <EmployeeListItem />
            <EmployeeListItem />
            <EmployeeListItem />

        </div>
        )
}

export default EmployeeList;