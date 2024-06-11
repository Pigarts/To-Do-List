import { useEffect, useState } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { styles } from "./styles";

type cardProps = {
    name: string
    onRemove: () => void
    onCheck: () => void
}

export function Task({ name, onRemove, onCheck}: cardProps) {
    const [checked, setChecked] = useState(false)

    function handlePress () {
        setChecked(!checked)
        onCheck()
    }

    return(
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            
                {
                    checked ? 
                    <Image source={require("../../../assets/icons/check.png")} style={styles.icons}/> 
                    : 
                    <Image source={require("../../../assets/icons/uncheck.png")} style={styles.icons}/>
                }
            
            <Text style={checked ? styles.textDone : styles.text}>{name}</Text>
            <TouchableOpacity onPress={onRemove}>
                 <Image source={require("../../../assets/icons/delete.png")}style={styles.icons}/>
            </TouchableOpacity>
        </TouchableOpacity>

    )
}