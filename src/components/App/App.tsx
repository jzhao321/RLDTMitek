import React from "react";

import { Datum, ResponsiveLineCanvas, Serie } from "@nivo/line";
import d3 from "d3-time";
import styles from "./App.module.css";

import gridData from "../../resource/data.json";

const augmentedSampledData: Serie[] = [
  {
    data: [],
    id: "Actual Sampled Data",
  },
  {
    data: [],
    id: "Estimated Sampled Data",
  },
];
const augmentedSmoothedData: Serie[] = [
  {
    data: [],
    id: "Actual Smoothed Data",
  },
  {
    data: [],
    id: "Estimated Smoothed Data",
  },
];

gridData.Trend.forEach((instance) => {
  const date = new Date(instance.time);
  augmentedSampledData[0].data.push({
    x: date,
    y: instance.sampled_data_micap_actual,
  });
  augmentedSampledData[1].data.push({
    x: date,
    y: instance.sampled_data_micap_estimate,
  });
  augmentedSmoothedData[0].data.push({
    x: date,
    y: instance.smoothed_trends_micap_actual,
  });
  augmentedSmoothedData[1].data.push({
    x: date,
    y: instance.smoothed_trends_micap_estimate,
  });
});

const App: React.FC = () => {
  const generateLine = (inputData: Serie[]) => (
    <ResponsiveLineCanvas
      data={inputData}
      margin={{ top: 50, right: 160, bottom: 50, left: 60 }}
      yScale={{ type: "linear", stacked: true, min: 0, max: 25 }}
      xScale={{ type: "time", format: "native" }}
      xFormat="time:%Y-%m-%d"
      curve="monotoneX"
      axisTop={null}
      axisBottom={{
        tickValues: "every 3 months",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 45,
        legend: "date",
        legendOffset: 36,
        legendPosition: "middle",
        format: "%Y-%M",
      }}
      axisLeft={{
        tickValues: 5,
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "volume",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX
      colors={{ scheme: "spectral" }}
      lineWidth={1}
      pointSize={4}
      pointColor={{ theme: "background" }}
      pointBorderWidth={1}
      pointBorderColor={{ from: "serieColor" }}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 140,
          translateY: 0,
          itemsSpacing: 2,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 12,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );

  return (
    <main className={styles.app}>
      <div className={styles.graphContainer}>
        <p>Micap Explained by Logistics</p>
        <div>{generateLine(augmentedSampledData)}</div>
      </div>
      <div className={styles.graphContainer}>
        <p>Smoothed Trends</p>
        <div>{generateLine(augmentedSmoothedData)}</div>
      </div>
    </main>
  );
};
export default App;
