import { useState } from "react";
import Clock from "./components/Clock";
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View} from 'react-native';

const App = () => {
    const [on, setOn] = useState(false);

    const toogleClock = () => {
        setOn(!on);
    };

    return (
        <View style={styles.container}>
          {on && <Clock />}
          <Button 
            title={`Turn clock ${on? 'Off':'On'}`}
            onPress={toogleClock}
            />
          <StatusBar style="dark" />
        </View>
      );
}


styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default App;