import { months } from "../components/helper/Ulti";

export const lineChartData = {
  labels: months({ count: 12 }),
  datasets: [
    {
      label: "Transactions",
      data: [65, 59, 80, 81, 56, 55, 60, 49, 112, 72, 52, 43],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

export const doughnutChartData = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "Transaction Dataset",
      data: [40,40.5 ,41, 41.5, 42, 42.5,43,43.5,44,44.5,45,46,47,47.5 ],
      backgroundColor: ["rgb(255,137,168)", "rgb(178,3,106)", "rgb(165,7,42)"],
      hoverOffset: 14,
    },
  ],
};

export const EUKId = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "Transaction Dataset",
      data: [40,40.5 ,41, 41.5, 42, 42.5,43,43.5,44,44.5,45,46,47,47.5 ],
      backgroundColor: ["rgb(25,137,168)", "rgb(18,3,106)", "rgb(16,7,42)"],
      hoverOffset: 14,
    },
  ],
};
