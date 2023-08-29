import { useSelector } from "react-redux";
import { XAxis, YAxis, CartesianGrid } from "recharts";

import { useEffect, useState } from "react";
import { formatChartDate } from "../../utils/formatDate";
import { AreaChart, Area } from "recharts";
export const Chart = () => {
  const { chartData } = useSelector((state) => state.dashboard.data);
  const [updateChartData, setUpdateChartData] = useState(null);
  useEffect(() => {
    if (chartData) {
      const updatedData = chartData.map((item) => {
        return {
          ...item,
          date: formatChartDate(item.date),
        };
      });

      setUpdateChartData(updatedData);
    }
  }, [chartData]);

  return (
    <AreaChart
      width={903}
      height={248}
      data={updateChartData}
      margin={{ top: 0, right: 26.5, left: 0, bottom: 0 }}
    >
      <CartesianGrid strokeDasharray="" stroke="rgba(255, 255, 255, 0.04)" />
      <XAxis
        dataKey="date"
        stroke=" rgba(255, 255, 255, 0.04)"
        tick={{
          fill: "rgba(255, 255, 255, 0.60)",
          fontSize: "11px",
          lineHeight: "12px",
        }}
      />
      <YAxis
        tick={{
          fill: "rgba(255, 255, 255, 0.60)",
          fontSize: "11px",
          lineHeight: "12px",
        }}
        stroke=" rgba(255, 255, 255, 0.04)"
      />
      <CartesianGrid strokeDasharray="3 3" />
      <Area
        type="monotone"
        dataKey="blue"
        fillOpacity={1}
        stroke="#18A0FB"
        fill="url(#colorBlue)"
        dot={{ strokeWidth: 2, fill: "#18A0FB" }}
      />
      <Area
        type="monotone"
        dataKey="red"
        stroke="#ED2D95"
        fillOpacity={1}
        fill="url(#colorRed)"
        dot={{ strokeWidth: 2, fill: "#ED2D95" }}
      />
      <Area
        type="monotone"
        dataKey="green"
        stroke="#3CDC86"
        fillOpacity={1}
        fill="url(#colorGreen)"
        dot={{ strokeWidth: 2, fill: "#3CDC86" }}
      />
      <defs>
        <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
          <stop
            offset="5%"
            stopColor="rgba(15, 129, 206, 0.20)"
            stopOpacity="0.8"
          />
          <stop
            offset="95%"
            stopColor="rgba(15, 129, 206, 0.00)"
            stopOpacity="0"
          />
        </linearGradient>
        <linearGradient id="colorRed" x1="0" y1="0" x2="0" y2="1">
          <stop
            offset="0%"
            stopColor="rgba(197, 45, 129, 0.20)"
            stopOpacity="1"
          />
          <stop
            offset="100%"
            stopColor="rgba(197, 45, 129, 0.00)"
            stopOpacity="0"
          />
        </linearGradient>
        <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
          <stop
            offset="0%"
            stopColor="rgba(27, 186, 100, 0.20)"
            stopOpacity="1"
          />
          <stop
            offset="100%"
            stopColor="rgba(27, 186, 100, 0.00)"
            stopOpacity="0"
          />
        </linearGradient>
      </defs>
    </AreaChart>
  );
};
