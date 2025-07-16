import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderClosed } from "@fortawesome/free-regular-svg-icons";
// import Link from 'next/link';
import styles from "@/components/PageHeader/PageHeader.module.scss";

const PageHeader = () => {
  return (
    <header className={styles.homeHeader}>
      <div>
        <h3>Overview</h3>
        <FontAwesomeIcon icon={faFolderClosed} size="lg" />
      </div>
      <h4>Dashboard &gt; Overview</h4>
    </header>
  );
}

export default PageHeader;
