export const formatDate = (dateInfo) => {
  const months = [
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

  const parts = dateInfo.split("-");
  const day = parseInt(parts[0]);
  const monthIndex = parseInt(parts[1]) - 1;
  const year = parseInt(parts[2]);

  const date = new Date(year, monthIndex, day);

  const monthName = months[date.getMonth()];

  const formattedDate = `${monthName} ${day}, ${year}`;

  return formattedDate;
};

export const formatChartDate = (dateInfo) => {
  const date = new Date(dateInfo);
  const month = date.getMonth() + 1;
  const year = date.getFullYear().toString().slice(-2);

  const formattedMonth = month < 10 ? `0${month}` : month.toString();

  return `${formattedMonth}/20${year}`;
};
