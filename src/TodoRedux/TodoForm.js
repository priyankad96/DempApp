import React,{Component} from 'react';
import {Text, TextInput, TouchableOpacity, View,StyleSheet} from "react-native";




export const TodoForm=(props)=>(
    <View style={styles.form}>
        <TextInput
            value={props.newTodo}
            placeholder='Type here'
            onChangeText={props.handleChange}
            style={styles.input}>
        </TextInput>
        <TouchableOpacity
            style={styles.button}
            onPress={props.handlePress}>
            <Text style={styles.buttonText}>
                create
            </Text>
        </TouchableOpacity>
    </View>
)

const styles=StyleSheet.create({

    form:{
        flexDirection:'row',
    },
    button:{
        flex:0.3,
        borderWidth:1,
        borderColor:'blue',
        borderRadius:3,
        justifyContent:"center",
        alignItems:'center',

    },
    input:{
        flex:0.7,
        fontSize:28,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 20,

    },

})



