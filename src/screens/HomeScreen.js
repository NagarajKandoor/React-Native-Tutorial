import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = props => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => props.navigation.navigate('Components')}
        title="Go to ComponentDemo" />
      <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
      <Button
        onPress={() => props.navigation.navigate('ImageScreen')}
        title="Go to ImageScreen Demo" />
      <Button
        onPress={() => props.navigation.navigate('CounterScreen')}
        title="Go to CounterScreen" />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
