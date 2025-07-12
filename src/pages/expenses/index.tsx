import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SiteHeader from "@/components/siteHeader";
import SideNav from "@/components/sideNav";
import Link from 'next/link';
import styles from "@/styles/Dashboard.module.scss";

const Expenses = () => {
  return (
    <div className={styles.container}>
      <SiteHeader />
      <SideNav />
    </div>
  );
}

export default Expenses;
