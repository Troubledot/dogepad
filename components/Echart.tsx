import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

interface EchartsProps {
  options: echarts.EChartsOption;
}
const Echart = (props: EchartsProps) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // @ts-ignore
    const chart = echarts.init(chartRef.current);

    // 设置图表选项
    chart.setOption(props.options);

    // 当组件卸载时销毁图表
    return () => {
      chart.dispose();
    };
  }, [props.options]);

  return <div ref={chartRef} style={{ width: "100%", height: "300px" }} />;
};

export default Echart;
