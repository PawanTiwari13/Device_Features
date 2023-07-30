import {Alert, Button, Image, Text, View,StyleSheet} from "react-native";
import {launchCameraAsync, useCameraPermissions,PermissionStatus} from "expo-image-picker";
import {useState} from "react";
import {Colors} from "../../constants/colors";
import OutlinedButton from "../UI/OutlinedButton";

function ImagePicker() {
    const [cameraPermissionsInformation, requestPermission] = useCameraPermissions();
const [pickedImage, setPickedImage]=useState();
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
        setPickedImage(image.uri);
    }

    let imagePreview=<Text style={styles.text}> No Image Taken Yet.</Text>
    if (pickedImage){
        imagePreview=<Image source={{uri:pickedImage}} style={styles.image}/>
    }
    return (
        <View>
            <View style={styles.imagePreview}>
                {imagePreview}
            </View>
            <OutlinedButton  icon='camera' onPress={takeImageHandler}> Take Image</OutlinedButton>
        </View>
    );

}

export default ImagePicker;
const styles=StyleSheet.create({
imagePreview:{
    width:'100%',
    height:200,
    marginVertical:8,
    justifyContent:'center',
    alignSelf:'center',
    backgroundColor:Colors.primary100,
    borderRadius:10
},
    image:{
    width:'100%',
        height:'100%',
        borderRadius:10
    },
    text:{
    justifyContent:'center',
        alignSelf:'center',
        fontSize:26,
    }
})
