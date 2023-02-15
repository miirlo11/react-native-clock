import { useEffect, useState } from "react";
import { View, Text } from "react-native";

export default function Clock(){
    let [time, setTime] = useState('00:00');
    // {time: '00:00', setTime: (value)=>{
    //   setState({time: value})    
    // }}
    let tick = 0;

    useEffect(() => {
        console.info('ComponentDidMount called');
        let tick = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
            console.info('tick');
        }, 1000);
        return () => {
            clearInterval(tick);
        };
    }, []);
    
    
    
    return (
        <View>
            <Text>
                {time}
            </Text>
        </View>
    );
}