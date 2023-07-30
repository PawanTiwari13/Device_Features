import {View, StyleSheet, Alert} from "react-native";
import OutlinedButton from "../UI/OutlinedButton";
import {Colors} from "../../constants/colors";
import {getCurrentPositionAsync, useForegroundPermissions, PermissionStatus} from 'expo-location';
function LocationPicker() {
    const [locationPermission, requestPermission] = useForegroundPermissions();

    async function verifyPermission() {
        if (locationPermission.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();
            return permissionResponse.granted;

        }
        if (locationPermission.status === PermissionStatus.DENIED) {
            Alert.alert('Insufficient Permission !',
                'You need to grant Location permission to use this App.');
            return false;
        }
        return true;


    }

    async function getLocationHandler() {
       const hasPermission= await verifyPermission();
        if (!hasPermission){
            return;
        }
        const location = await getCurrentPositionAsync();
        console.log(location);

    }

    function pickOnMapHandler() {

    }

    return (
        <View>
            <View style={styles.mapPreview}>

            </View>
            <View style={styles.action}>
                <OutlinedButton icon='location' onPress={getLocationHandler}>
                    Locate User
                </OutlinedButton>
                <OutlinedButton icon='map' onPress={pickOnMapHandler}>
                    Picker on Map
                </OutlinedButton>

            </View>
        </View>
    );
}

export default LocationPicker
const styles = StyleSheet.create({
    mapPreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 10

    },
    action: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: "center",

    }
})
