"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface CustomLineChartDataType {
  chartData: Array<{ id: number; year: string; candidate_age: number }>;
}

export default function CustomLineChart({
  chartData,
}: CustomLineChartDataType) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="candidate_age" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
}
