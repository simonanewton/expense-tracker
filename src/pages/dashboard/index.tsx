// import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faCreditCard, faVault, faChartPie, faChartLine, faGear, faRightToBracket, faUser, faDollarSign, faCircleDollarToSlot, faScaleBalanced, faChartSimple, faFileLines, faList, faArrowUp, faArrowDown, faPlus, faListOl, faChartColumn } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare, faFolderClosed, faCircleUser } from "@fortawesome/free-regular-svg-icons";
import Link from 'next/link'
import styles from "@/styles/Dashboard.module.scss";
import { faMoneyBill1 } from "@fortawesome/free-regular-svg-icons/faMoneyBill1";

const Dashboard = () => {
  return (
    <main className={styles.container}>
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
      <div className={styles.dashboard}>
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
        <div className={styles.home}>
          <header className={styles.homeHeader}>
            <div>
              <h2>Overview</h2>
              <FontAwesomeIcon icon={faFolderClosed} size="xl" />
            </div>
            <h4>Dashboard &gt; Overview</h4>
          </header>
          <div className={styles.cards}>
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
            <div className={styles.charts}>
              <div className={styles.breakdown}>
                <header>
                  <FontAwesomeIcon icon={faChartSimple} />
                  <h3>Expense Breakdown</h3>
                </header>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                    cupiditate sed quos id similique? Iure officiis soluta at volas,
                    aperiam magni vero doloribus voluptate. Illum dolore laudantium
                    tempore inventore necessitatibus! Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Inventore odit dolor fuga exercita
                    nihil temporibus, quisquam consectetur! Libero, voluptatibus fuga
                    nemo, sunt quia dolorum ad animi, asperiores.
                  </p>
                </div>
              </div>
              <div className={styles.summary}>
                <header>
                  <FontAwesomeIcon icon={faFileLines} />
                  <h3>Summary</h3>
                </header>
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
            <div className={styles.history}>
              <header>
                <FontAwesomeIcon icon={faList} />
                <h3>Transaction History</h3>
              </header>
              <div className={styles.historyList}>
                <div className={styles.transactionsHeader}>
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
                  <p>$14.78</p>
                  <p>Rent</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quas laudantium eveniet accusamus in dolore deserunt ipsa ratione corporis nihil. Vitae vero voluptate odio corporis ducimus laudantium magnam. Molestias, voluptate.</p>
                </div>
                <div className={styles.transaction}>
                  <p>3/22</p>
                  <p>$15.03</p>
                  <p>Health</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quas laudantium eveniet accusamus in dolore deserunt ipsa ratione corporis nihil. Vitae vero voluptate odio corporis ducimus laudantium magnam. Molestias, voluptate.</p>
                </div>
                <div className={styles.transaction}>
                  <p>3/28</p>
                  <p>$34.10</p>
                  <p>Utilities</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quas laudantium eveniet accusamus in dolore deserunt ipsa ratione corporis nihil. Vitae vero voluptate odio corporis ducimus laudantium magnam. Molestias, voluptate.</p>
                </div>
                <div className={styles.transaction}>
                  <p>3/29</p>
                  <p>$14.10</p>
                  <p>Shopping</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quas laudantium eveniet accusamus in dolore deserunt ipsa ratione corporis nihil. Vitae vero voluptate odio corporis ducimus laudantium magnam. Molestias, voluptate.</p>
                </div>
                <div className={styles.transaction}>
                  <p>3/31</p>
                  <p>$12.91</p>
                  <p>Other</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quas laudantium eveniet accusamus in dolore deserunt ipsa ratione corporis nihil. Vitae vero voluptate odio corporis ducimus laudantium magnam. Molestias, voluptate.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;