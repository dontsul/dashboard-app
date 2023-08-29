import { PieChart, Pie, Cell } from "recharts";
const data = [
  { name: "Group A", value: 600 },
  { name: "Group B", value: 200 },
  { name: "Group C", value: 300 },
];
const COLORS = ["#ED2D95", "#18A0FB", "#3CDC86"];

export const CustomPieChart = () => {
  return (
    <PieChart width={232} height={232}>
      <Pie
        data={data}
        cx={"50%"}
        cy={"50%"}
        height={400}
        innerRadius={90}
        outerRadius={114}
        paddingAngle={5}
        dataKey="value"
        labelLine={false}
        startAngle={250}
        endAngle={700}
      >
        {data.map((entry, index) => (
          <Cell
            stroke="none"
            cornerRadius={20}
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Pie>
    </PieChart>
  );
};
