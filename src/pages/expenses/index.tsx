import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import SideNav from "@/components/SiteNav/SideNav";
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
