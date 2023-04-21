import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';

function getLastTenDays() {
  const result = [];
  for (let i = 9; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    result.push(date.toLocaleDateString());
  }
  return result;
}

function MatchesPlayedChart() {
  const chartContainer = useRef(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const categories = getLastTenDays();
      Highcharts.chart(chartContainer.current, {
        title: {
          text: 'Matches played in the last 10 days',
        },
        xAxis: {
          categories: categories,
        },
        yAxis: {
          title: {
            text: '',
          },
        },
        series: [
          {
            type: 'line',
            name: 'Matches Played',
            data: [1, 3, 2, 4, 6, 4, 6, 4, 8, 10],
          },
        ],
      });
    }
  }, []);

  return <div ref={chartContainer} />;
}

export default MatchesPlayedChart;