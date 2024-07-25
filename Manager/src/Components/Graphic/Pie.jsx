import { useEffect, useState } from 'react';
import { StyleSheet, Dimensions, View, Text } from 'react-native';

import { PieChart } from 'react-native-chart-kit';

import { charColors } from "../../Localized/Strings";

const { width, height } = Dimensions.get('screen');

const chartConfig = {
  backgroundGradientFrom: '#cfcbcb',
  backgroundGradientTo: '#cfcbcb',
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
};

function Pie({ data }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const countTotal = Object.values(data).reduce((acc, cur) => acc + cur, 0);
    setTotal(countTotal);
  }, [])

  return (
    <View>
      <PieChart
        data={Object.keys(data).map((label, i) => ({
          name: label,
          population: data[label],
          color: charColors[i]
        }))}
        width={width * 0.9}
        height={height * 0.4}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"transparent"}
        hasLegend={false}
        center={[85, -10]}
      />

      <View>
        {
          Object.keys(data).map((label, i) => {
            return (
              <View key={"legend-pie-" + (i + 1)} style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
                <View style={[styles.indiceColor, { backgroundColor: charColors[i] }]} />
                <Text style={styles.text}>{((data[label] / total) * 100).toFixed(2)}%</Text>
                <Text style={[styles.text, { marginLeft: 15 }]}>{label}</Text>
              </View>
            )
          })
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  indiceColor: {
    width: 10,
    height: 10,
    borderRadius: 30,
    marginRight: 15
  },
  text: {
    color: "black",
    fontWeight: "600"
  }
})
export default Pie;
