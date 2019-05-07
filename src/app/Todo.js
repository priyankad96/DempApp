import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
    Switch,
} from 'react-native';
import {Reddit} from "./Reddit";

export  default class Todo extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            newTodo: " ",
        }
        //  throw new Error(JSON.stringify(this.state, null, 2));
        //console.warn('yooo);

    }
    handleChange(text) {
        this.setState({ newTodo: text })

    }
    handlePress() {
        const todos = [...this.state.todos, this.state.newTodo];
        this.setState({ todos, newTodo: '' });

    }
    render() {
        return (
            <View style={styles.container}>
                <Reddit/>
                <View style={styles.form}>
                <TextInput value={this.state.newTodo}
                           placeholder='Type here'
                           onChangeText={this.handleChange.bind(this)}
                            style={styles.input}>
                </TextInput>
                <TouchableOpacity style={styles.button}   onPress={this.handlePress.bind(this)}>
                    <Text style={styles.buttonText}>create</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.todos}>


                    {this.state.todos.map((todo, i) =>
                        <View style={styles.todo} key={i}>
                        <Text  style={styles.todoText} > {todo}
                        </Text>
                        </View>
                    )}


                </View>

            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:50,
    },

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
    todos:{
        marginTop:60,

    },
    todo:{
        borderBottomWidth:1,
        marginBottom:10,
        borderBottomColor:'lightgrey',

    },
    todoText:{
        fontSize:24,

    }


})
