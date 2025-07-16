import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faCreditCard, faVault, faChartPie, faGear, faChartColumn } from "@fortawesome/free-solid-svg-icons";
// import Link from 'next/link';
import styles from "@/components/SiteNav/SideNav.module.scss";

const SideNav = () => {
    return (
        <nav className={styles.sideNav}>
            <div className={styles.navItem}>
                <FontAwesomeIcon icon={faHouseChimney} />
                <p>Home</p>
            </div>
            <div className={styles.navItem}>
                <FontAwesomeIcon icon={faCreditCard} />
                <p>Expenses</p>
            </div>
            <div className={styles.navItem}>
                <FontAwesomeIcon icon={faVault} />
                <p>Income</p>
            </div>
            <div className={styles.navItem}>
                <FontAwesomeIcon icon={faChartPie} />
                <p>Budgets</p>
            </div>
            <div className={styles.navItem}>
                <FontAwesomeIcon icon={faChartColumn} />
                <p>Analytics</p>
            </div>
            <div className={styles.navItem}>
                <FontAwesomeIcon icon={faGear} />
                <p>Settings</p>
            </div>
        </nav>
    );
}

export default SideNav;
