import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import Link from 'next/link';
import styles from "@/styles/Dashboard.module.scss";

const SiteHeader = () => {
  return (
    <header className={styles.siteHeader}>
      <Link className={styles.logo} href="/dashboard">
        <h2>Expense Tracker</h2>
        <FontAwesomeIcon icon={faPenToSquare} size="xl" />
      </Link>
      <div className={styles.account}>
        <div>
          <FontAwesomeIcon icon={faRightToBracket} />
          <p>Log in</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faUser} />
          <p>Sign up</p>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
