/* eslint-disable */
import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const Echart = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // @ts-ignore
    const chart = echarts.init(chartRef.current);

    // 在这里配置您的图表选项和数据
    const options = {
      color: ["#64708B", "#F3BA2F", "#282D34", "#21BF73", "#ff4b19"],
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "middle",
        left: "right",
        orient: "vertical",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["50%", "65%"],
          center: ["30%", "50%"],
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: false,
              fontSize: 40,
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 4, name: "Market Allocation" },
            { value: 3, name: "Ecosystem and Partnerships" },
            { value: 10, name: "Staking" },
            { value: 3, name: "DAO Allocation" },
            { value: 80, name: "IDO Allocation" },
          ],
        },
      ],
    };

    // 设置图表选项
    chart.setOption(options);

    // 当组件卸载时销毁图表
    return () => {
      chart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "300px" }} />;
};

export default Echart;
