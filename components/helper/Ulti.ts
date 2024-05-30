const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
  interface MonthsConfig {
    count?: number;
    section?: number;
  }
  
  export const months = (config: MonthsConfig = {}) => {
    const { count = 12, section = 0 } = config;
    const values: string[] = [];
  
    for (let i = 0; i < count; ++i) {
      const value = MONTHS[Math.ceil(i) % 12];
      values.push(value.substring(0, section));
    }
  
    return values;
  };