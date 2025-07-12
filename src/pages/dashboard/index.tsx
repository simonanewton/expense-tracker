// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SiteHeader from "@/components/siteHeader";
import SideNav from "@/components/sideNav";
import PageHeader from "@/components/pageHeader";
import ChartCard from "@/components/Dashboard/chartCard";
import SummaryCard from "@/components/Dashboard/summaryCard";
import StatsCard from "@/components/Dashboard/statsCard";
import TransactionCard from "@/components/Dashboard/transactionCard";
import styles from "@/styles/Dashboard.module.scss";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <SiteHeader />
      <div className={styles.dashboard}>
        <SideNav />
        <main className={styles.home}>
          <PageHeader />
          <div className={styles.cards}>
            <StatsCard />
            <div className={styles.charts}>
              <ChartCard />
              <SummaryCard />
            </div>
            <TransactionCard />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
