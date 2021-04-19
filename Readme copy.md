# Mitek Frontend Engineer Demo

This is a test to showcase your UI skills and coding ability as a frontend engineer. Your task is to re-create 1 page of our RLDT application in React.

On this page there are two charts

1. Sampled Data
2. Smoothed Trends

"Sampled Data" plots `sampled_data_micap_actual` and `sampled_data_micap_estimate` vs `time`. Similarly, "Smoothed Trends" plots `smoothed_trends_micap_actual` and `smoothed_trends_micap_estimate` vs `time`. All the data that you need is in the data.json file. This is a single large JSON object with two attributes, `Markup` and `Trend`.

`Markup` contains legend information, while `Trend` contains actual data points. There is a lot of data you do not need, because it is used by other charts. In this demo you will only need:

```
  "time": "01-Aug-2012 00:00:00",
  "sampled_data_micap_actual": 1,
  "sampled_data_micap_estimate": 1.525805170465149,
  "smoothed_trends_micap_actual": -0.21730152184344992,
  "smoothed_trends_micap_estimate": -0.056457991692797305,
```

There are two screenshots that you can use for reference. The Tableau screenshot is our existing product that we showcase to customers, while the React screenshot is an example demo that would fit the requirements for this project.

Please send a zip file containing your source code and a screenshot of the running application.

## Additional Information

The data from the charts cooresponds to the output of a single run on a single aircraft. There will be multiple runs for each aircraft, and customers will use this tool to manage their entire fleet of aircraft.
