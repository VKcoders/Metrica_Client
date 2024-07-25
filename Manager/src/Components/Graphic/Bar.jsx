import React from 'react';
import { Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const {width, height} = Dimensions.get('screen');

const chartConfig = {
  backgroundGradientFrom: '#cfcbcb',
  backgroundGradientTo: '#cfcbcb',
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16
  }
};

function Bar({ data }) {
  return (
        <BarChart
            data={{
                labels: Object.keys(data),
                datasets: [{
                    data: Object.values(data)
                }]
            }}
            width={width * 0.9}
            height={height * 0.45}
            // yAxisLabel={'Quantidade'}
            chartConfig={chartConfig}
            // verticalLabelRotation={30}
        />
    );
};

export default Bar;
