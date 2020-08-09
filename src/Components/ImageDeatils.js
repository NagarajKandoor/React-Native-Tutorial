import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDeatils = props => {
    return (
        <View>
            <Image source={props.imageSource} />
            <Text>
                {props.imageName}
            </Text>
        </View>
    );
};

const styleSheet = StyleSheet.create({

});

export default ImageDeatils;