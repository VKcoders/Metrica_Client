import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { icons } from "../Localized";

function Update({action}) {
  const handlePress = () => action(prev => !prev);

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
        <Image style={styles.icon} source={icons.reload} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
  },
  icon: {
    width: "100%",
    height: "100%",
  }
})

export default Update;
