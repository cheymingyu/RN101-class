
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

export default function App() {
    const checkHandler = () => console.log('Clicked!');

    return (
        <View style={styles.container}>
            <Button title={'click me!'} onPress={() => console.log(clickHandler)} />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
});

