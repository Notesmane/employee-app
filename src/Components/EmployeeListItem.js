import styles from './Counter.module.css';

function EmployeeListItem(props) {
    return (
        <div className={styles.empListItem}>
            <ul>
                <img src="https://wallpapers.com/images/hd/cool-profile-picture-2we7xmn0737hqgtu.jpg" alt="profile photo" />
                <div className={styles.text}>    
                    <h3 className={styles.name}>James King</h3>
                    <h5 className={styles.titles}>President and CEO</h5>
                </div>
            </ul>
        </div>

    )
}

export default EmployeeListItem; 