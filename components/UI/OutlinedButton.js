import { StyleSheet, Text, Pressable} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {Colors} from "../../constants/colors";

function OutlinedButton({onPress,icon,children}) {
    return (
        <Pressable style={({pressed})=>[styles.button,pressed && styles.pressed]} onPress={onPress}>
            <Ionicons name={icon} style={styles.icon} size={18} color={Colors.primary50}/>
            <Text style={styles.text}>{children}</Text>
        </Pressable>

    )
}

export default OutlinedButton;
const styles = StyleSheet.create({
    button:{
        paddingHorizontal:12,
        paddingVertical:6,
        margin:4,
        justifyContent:'center',
        alignSelf:'center',
        borderWidth:1,
        borderColor:Colors.primary50,
        flexDirection:'row',
    },
    pressed:{
     opacity:0.7,

    },
    icon:{
     marginRight:6
    },
    text:{
        color:Colors.primary50,
    }
})
