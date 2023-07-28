import styles from './Counter.module.css';

function EmployeeInfo() {
    return (
        <div className={styles.empListItem2}>
            <ul>
                <img src="https://wallpapers.com/images/hd/cool-profile-picture-2we7xmn0737hqgtu.jpg" alt="profile photo" />
                <div className={styles.text}>
                    <h3 className={styles.name}>Julie Taylor</h3>
                    <h5 className={styles.titles}>VP of Marketing</h5>
                </div>
            </ul>
            <ul>
                <div className={styles.empContact}>
                    <h4 className={styles.emInfoSource}>Call Office</h4>
                    <h5 className={styles.empInfoData}>781-000-0002</h5>
                </div>
                <div className={styles.empContact}>
                    <h4 className={styles.emInfoSource}>Call Mobile</h4>
                    <h5 className={styles.empInfoData}>617-000-0002</h5>
                </div>
                <div className={styles.empContact}>
                    <h4 className={styles.emInfoSource}>SMS</h4>
                    <h5 className={styles.empInfoData}>617-000-0002</h5>
                </div>
                <div className={styles.empContact}>
                    <h4 className={styles.emInfoSource}>Email</h4>
                    <h5 className={styles.empInfoData}>jtaylor@fakemail.com</h5>
                </div>
            </ul>
        </div>
    )
}

export default EmployeeInfo;