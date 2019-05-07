import React,{Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import {ADD_POST} from "./reducers";




const _Reddit =(props)=> (
    <View>
        {props.posts.map(posts=><Text>{posts.name}</Text>)}
        <TouchableOpacity onPress={props.addRddtPost}>
            <Text>add</Text>
        </TouchableOpacity>
    </View>
)

const mapStateToProps=(state)=>({
    posts:state.reddit
})

const mapActionsToProps=(dispatch)=>({
    addRddtPost(post={name:'new post'}){
        dispatch({type:ADD_POST,payload:post});
    }

});



export const Reddit = connect(mapStateToProps,mapActionsToProps)(_Reddit)





/*export default class Reddit extends Component{
    constructor(){
        super();
        this.state = {
            posts:[],
        }

    }

    componentWillMount(){
        fetch('https://www.reddit.com/.json', {
            Accept:'Application/json'
        })
            .then(res=>res.json())
            .then(data=> {
                this.setState({posts:data.data.children});
            });
    }

    render(){
        return(
            <View>
                <Text>Reddis</Text>
                <View>
                    {this.state.posts.map(post=>(
                        <Text >{post.data.author}</Text>
                    ) )}

                </View>
            </View>




        )
    }

}*/


