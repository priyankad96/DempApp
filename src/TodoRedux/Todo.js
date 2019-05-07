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
import {TodoForm} from "./TodoForm";
import {connect } from 'react-redux';
import {CREATE_TODO} from "./reducers";





 export default class _Todo extends Component {
   static defaultProps={
        todos:[]
    }

    constructor() {
        super();
        this.state = {
            newTodo: " ",
        }
        //  throw new Error(JSON.stringify(this.state, null, 2));
        //console.warn('yooo);

    }
    handleChange(text) {
        this.setState({ newTodo: text })

    }
    handlePress() {
        //const todos = [...this.state.todos, this.state.newTodo];
        //this.setState({ todos, newTodo: '' });
        this.props.createTodo(this.state.newTodo)
        this.setState({newTodo: ''})

    }
    render() {
        return (
            <View style={styles.container}>
                <TodoForm
                    handleChange={this.handleChange.bind(this)}
                    handlePress={this.handlePress.bind(this)}
                    value={this.state.newTodo}

                />
                <View style={styles.todos}>
                    {this.props.todos.map((todo, i) =>
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

const mapActionsToProps=(dispatch)=>({
    createTodo(todo){
        dispatch({type:'CREATE_TODO',payload:todo});
    }
});

const mapStateToProps=(state)=>({
    todos:state.todos
});



export const Todo=connect(mapStateToProps,mapActionsToProps)(_Todo);

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
