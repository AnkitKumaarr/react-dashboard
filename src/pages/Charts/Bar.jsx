import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel,
} from "@syncfusion/ej2-react-charts";

import {
  barChartData,
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../data/dummy";

import { useStateContext } from "../../contexts/ContextProvider";
import { Header } from "../../components";

const Bar = () => {
  const { currentMode } = useStateContext();
  return (
    <div
      className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-main-dark-bg rounded-3xl">
      <Header category="Chart" title="Bar Chart" />
      <ChartComponent
        id="bar-Chart"
        style={{ textAlign: "center" }}
        dataSource={barChartData}
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        title="Olympics Medal Tally"
        titleStyle={currentMode === "Dark"? {color:"white"} : {color:"#33373E"}}
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
      >
        <Inject
          services={[ColumnSeries, Tooltip, Legend, Category, DataLabel]}
        />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Bar;
