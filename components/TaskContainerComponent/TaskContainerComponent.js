import React, {Component} from 'react';
import {View, Text, TouchableHighlight, Image} from 'react-native';
import styles from "./styles/styles";
import CheckboxComponent from '../CheckboxComponent/CheckboxComponent';
import PropTypes from 'prop-types';

export default class TaskContainerComponent extends Component{

    constructor() {
        super();
        this.onPress = this.onPress.bind(this);
        this.state= {
            checked: false,
        };
    }

    static propTypes = {
        type: PropTypes.string,
        data: PropTypes.string,
    };

    onPress = () => {
        this.setState({ checked: !this.state.checked });
    };

    render(){
        return (
            <TouchableHighlight underlayColor={"rgba(0,0,0,0)"} onPress = { this.onPress }>
                    <View style={styles.taskObject}>
                        <View style={styles.textFlex}>
                            {this.props.type === "image" ? <Image style={styles.image} source={require("../../assets/icon.png")}/>
                                    : <Text>{this.props.data}</Text>}
                        </View>
                        <View style={styles.checkFlex}>
                            <CheckboxComponent checked={this.state.checked} onPress={this.onPress}/>
                        </View>
                        <Text style={styles.dateStyle}>04.20.69</Text>
                    </View>
            </TouchableHighlight>
        );
    }
}
