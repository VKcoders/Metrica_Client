import { Image, Text, View } from "react-native";

import { icons } from "../Localized";
import { screens as styles } from "../Style";

function Atesp() {
      const css = styles["Sponcer"];

      return (
        <View style={css.container}>
            <Image source={icons.sponcer} style={css.icon} />
            <View>
                <Text style={css.title}>ATESP</Text>
                <Text style={css.text}>Associação dos Técnicos em</Text>
                <Text style={css.text}>Edificação Auxiliares e Afins</Text>
                <Text style={css.text}>do Estado de São Paulo</Text>
            </View>
        </View>
      );
}

export default Atesp;
