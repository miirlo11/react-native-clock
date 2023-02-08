import { useState } from "react";

export default function Clock(){
    let [time, setTime] = useState('00:00');
    // {time: '00:00', setTime: (value)=>{
    //   setState({time: value})    
    // }}
    let tick = 0;
    return (
        <View>
            <Text>
                {time}
            </Text>
        </View>
    );
}