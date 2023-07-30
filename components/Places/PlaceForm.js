import { Text, View,StyleSheet } from 'react-native';
import {Colors} from "../../constants/colors";

function PlaceForm() {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.textColor}>The Place Form</Text>
    </View>
  );
}

export default PlaceForm;
const styles=StyleSheet.create({
  rootContainer:{
      flex:1,
      justifyContent:'center',
      alignSelf:'center'

  },
    textColor:{
        color:Colors.primary200,
        fontSize:16,
        fontWeight:'bold',
    }
});
