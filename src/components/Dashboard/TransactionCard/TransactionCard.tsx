import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import styles from "./TransactionCard.module.scss";

const TransactionTable = () => {
  return (
    <div className={styles.history}>
      <header>
        <FontAwesomeIcon icon={faList} />
        <h3>Transaction History</h3>
      </header>
      <div className={styles.historyList}>
        <div className={styles.transaction}>
          <p>Date</p>
          <p>Category</p>
          <p>Amount</p>
          <p>Description</p>
        </div>
        <div className={styles.transaction}>
          <p>3/15</p>
          <p>Groceries</p>
          <p>$19.67</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quas laudantium eveniet accusamus in dolore deserunt ipsa ratione corporis nihil. Vitae vero voluptate odio corporis ducimus laudantium magnam. Molestias, voluptate.</p>
        </div>
        <div className={styles.transaction}>
          <p>3/19</p>
          <p>Rent</p>
          <p>$14.78</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quas laudantium eveniet accusamus in dolore deserunt ipsa ratione corporis nihil. Vitae vero voluptate odio corporis ducimus laudantium magnam. Molestias, voluptate.</p>
        </div>
        <div className={styles.transaction}>
          <p>3/22</p>
          <p>Health</p>
          <p>$15.03</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quas laudantium eveniet accusamus in dolore deserunt ipsa ratione corporis nihil. Vitae vero voluptate odio corporis ducimus laudantium magnam. Molestias, voluptate.</p>
        </div>
        <div className={styles.transaction}>
          <p>3/28</p>
          <p>Utilities</p>
          <p>$34.10</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quas laudantium eveniet accusamus in dolore deserunt ipsa ratione corporis nihil. Vitae vero voluptate odio corporis ducimus laudantium magnam. Molestias, voluptate.</p>
        </div>
        <div className={styles.transaction}>
          <p>3/29</p>
          <p>Shopping</p>
          <p>$14.10</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quas laudantium eveniet accusamus in dolore deserunt ipsa ratione corporis nihil. Vitae vero voluptate odio corporis ducimus laudantium magnam. Molestias, voluptate.</p>
        </div>
        <div className={styles.transaction}>
          <p>3/31</p>
          <p>Other</p>
          <p>$12.91</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quas laudantium eveniet accusamus in dolore deserunt ipsa ratione corporis nihil. Vitae vero voluptate odio corporis ducimus laudantium magnam. Molestias, voluptate.</p>
        </div>
      </div>
    </div>
  );
}

export default TransactionTable;