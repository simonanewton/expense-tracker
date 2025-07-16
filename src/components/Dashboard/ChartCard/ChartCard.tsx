import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import styles from "./ChartCard.module.scss";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [1, 2, 3, 4, 5, 6],
      backgroundColor: 'rgb(49, 133, 252)',
      stack: 'Stack 0',
    }
  ]
}

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: false,
  barThickness: 65,
  scales: {
    y: {
      max: 8
    }
  }
}

const ChartCard = () => {
  return (
    <div className={styles.breakdown}>
      <header>
        <FontAwesomeIcon icon={faChartSimple} />
        <h3>Expense Breakdown</h3>
      </header>
      <div className={styles.pieChart}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default ChartCard;