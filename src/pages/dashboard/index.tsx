import SiteHeader from "@/components/SiteHeader/SiteHeader";
import SideNav from "@/components/SiteNav/SideNav";
import PageHeader from "@/components/PageHeader/PageHeader";
import ChartCard from "@/components/Dashboard/ChartCard/ChartCard";
import SummaryCard from "@/components/Dashboard/SummaryCard/SummaryCard";
import StatsCard from "@/components/Dashboard/StatsCard/StatsCard";
import TransactionCard from "@/components/Dashboard/TransactionCard/TransactionCard";
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
            <div className={styles.data}>
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
