import React from "react";
import { ChartsHeader } from "../../components";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationDataLabel,
  Inject,
  AccumulationLegend,
  AccumulationTooltip,
  PyramidSeries,
  AccumulationSelection,
} from "@syncfusion/ej2-react-charts";
import { PyramidData } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const Pyramid = () => {
  const {currentMode} = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Pie" title="Project Cost Breakdown" />
      <div className="w-full">
        <AccumulationChartComponent
          id="pyramid-chart"
          legendSettings={{ background: "white" }}
          title="Food Camparison Chart"
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
          titleStyle={
            currentMode === "Dark" ? { color: "white" } : { color: "#33373E" }
          }
          tooltip={{ enable: true }}
        >
          <Inject
            services={[
              AccumulationSelection,
              AccumulationLegend,
              PyramidSeries,
              AccumulationDataLabel,
              AccumulationTooltip,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name="Food"
              dataSource={PyramidData}
              xName="x"
              yName="y"
              type="Pyramid"
              width="45%"
              height ="80%"
              neckWidth ="15%"
              gapRatio ={0.03}
              explode
              emptyPointSettings = {{mode :'Drop', fill:'red'}}
              dataLabel = {{
                visible:true,
                position :"Inside",
                name:'text'
              }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
};

export default Pyramid;
