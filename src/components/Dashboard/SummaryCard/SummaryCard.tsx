import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faFileLines, faListOl } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faMoneyBill1 } from "@fortawesome/free-regular-svg-icons/faMoneyBill1";
import styles from "@/components/Dashboard/SummaryCard/SummaryCard.module.scss";

const SummaryCard = () => {
  return (
    <div className={styles.summary}>
      <header>
        <FontAwesomeIcon icon={faFileLines} />
        <h3>Summary</h3>
      </header>
      <div className={styles.summaryList}>
        <div className={styles.summaryStat}>
          <FontAwesomeIcon icon={faCircleUser} size="lg" />
          <h4>Top Category</h4>
          <h4>Groceries</h4>
        </div>
        <div className={styles.summaryStat}>
          <FontAwesomeIcon icon={faListOl} size="lg" />
          <h4>Monthly Transactions</h4>
          <h4>122</h4>
        </div>
        <div className={styles.summaryStat}>
          <FontAwesomeIcon icon={faMoneyBill1} size="lg" />
          <h4>Budget Remaining</h4>
          <h4>$318</h4>
        </div>
        <div className={styles.summaryStat}>
          <FontAwesomeIcon icon={faChartLine} size="lg" />
          <h4>FICO Score</h4>
          <h4>756</h4>
        </div>
      </div>
    </div>
  );
}

export default SummaryCard;
