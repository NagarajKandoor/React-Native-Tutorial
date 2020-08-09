import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDeatils from '../Components/ImageDeatils'
const ImageScreen = () => {
    return (
        <View>
            <ImageDeatils imageName="Icon" imageSource={require('../../assets/icon.png')} />
            <ImageDeatils imageName="Splash" imageSource={require('../../assets/icon.png')} />
        </View>
    );
};

const styleSheet = StyleSheet.create({

});

export default ImageScreen;