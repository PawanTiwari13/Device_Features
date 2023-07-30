import {Alert, Button, View} from "react-native";
import {launchCameraAsync, useCameraPermissions,PermissionStatus} from "expo-image-picker";

function ImagePicker() {
    const [cameraPermissionsInformation, requestPermission] = useCameraPermissions();

    async function verifyPermission(){

        if (cameraPermissionsInformation.status=== PermissionStatus.UNDETERMINED){
            const permissionResponse=   await requestPermission();
            return permissionResponse.granted;

        }
        if (cameraPermissionsInformation.status===PermissionStatus.DENIED){
            Alert.alert('Insufficient Permission !',
                'You need to grant camera permission to use this App.');
            return false;
        }
        return true;
    }

    async function takeImageHandler() {
       const hasPermission = await verifyPermission();
if (!hasPermission){
    return;
}
       const image = await launchCameraAsync({

            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.5,
        })
        console.log(image);
    }

    return (
        <View>
            <View>

            </View>
            <Button title='Take Image' onPress={takeImageHandler}/>
        </View>
    );

}

export default ImagePicker;
