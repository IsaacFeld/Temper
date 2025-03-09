import React from 'react';
import {StyleSheet, Text, Animated, Pressable} from 'react-native';
const Button = () => {
    const backgroundColorRef = new Animated.Value(0)
    const handlePress = () =>{
        Animated.timing(backgroundColorRef, {
            toValue: 1,
            duration: 60,
            useNativeDriver: true,
        }).start()
    }
    const handleRelease = () =>{
        Animated.timing(backgroundColorRef, {
            toValue: 0,
            duration: 60,
            useNativeDriver: true,
        }).start()
    }
    const backgroundColor = backgroundColorRef.interpolate({
        inputRange: [0, 1],
        outputRange: ['#F0C808', '#F0AB02']
    })
    return (
    <Pressable 
    onPressIn={handlePress} 
    onPressOut={handleRelease}
    onPress={() => console.log('You clicked a button')}>
        <Animated.View style={[styles.buttonContainer, {backgroundColor}]}>
        <Text style={styles.buttonText}>Get Started</Text>
        </Animated.View>
    </Pressable>
    )
};

const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Sour'
  },
  buttonContainer: {
    backgroundColor:'#F0C808',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 12,

  }
});

export default Button;