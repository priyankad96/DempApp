import React,{Component} from 'react';
import {SafeAreaView} from 'react-native';
import Todo from './Todo';

export const Main=(props)=>(
    <SafeAreaView style={{flex:1}}>
    <Todo/>
    </SafeAreaView>
);