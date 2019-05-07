import {Dimensions, StyleSheet,Platform} from "react-native";

const {width,height}=Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        padding: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box:{
        backgroundColor: 'white',
        height:height/4,
        width:width/2,
        position:"absolute",
        top:50,
        left:50,
        borderRadius:20,
    },
    text:{
        color:"white",
        fontSize:34,
        fontWeight: 'bold',
    }
})