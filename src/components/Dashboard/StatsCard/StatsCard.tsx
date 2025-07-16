import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faCircleDollarToSlot, faScaleBalanced, faArrowUp, faArrowDown, faPlus} from "@fortawesome/free-solid-svg-icons";
import styles from "./StatsCard.module.scss";

const StatsCard = () => {
  return (
    <div className={styles.stats}>
      <div>
        <FontAwesomeIcon icon={faDollarSign} />
        <h3>Total Expenses: $1,234</h3>
        <div className={styles.expensesChange}>
          <FontAwesomeIcon icon={faArrowUp} />
          <h4>12%</h4>
        </div>
      </div>
      <div>
        <FontAwesomeIcon icon={faCircleDollarToSlot} />
        <h3>Total Income: $1,512</h3>
        <div className={styles.incomeChange}>
          <FontAwesomeIcon icon={faArrowDown} />
          <h4>8%</h4>
        </div>
      </div>
      <div>
        <FontAwesomeIcon icon={faScaleBalanced} />
        <h3>Budget Balance: </h3>
        <div className={styles.netBalance}>
          <FontAwesomeIcon icon={faPlus} />
          <h4>278</h4>
        </div>
      </div>
    </div>
  );
}

export default StatsCard;