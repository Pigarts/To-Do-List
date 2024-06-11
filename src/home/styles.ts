import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    header: {
        backgroundColor: "#0D0D0D",
        flex: 1,
        maxHeight: 173,
        justifyContent: "center",
        alignItems: "center",
        
    },
    body: {
        backgroundColor: "#1a1a1a",
        flex: 1,
        padding: 24,
        
    }, 
    toCenter: {
       
        
    },
    inputWhrapper: {
        flexDirection: "row",
        width: "100%",
        gap: 4,
        marginTop: -50, 
       
    },
    input: {
        backgroundColor: "#262626",
        height: 56,
        borderRadius: 5,
        color: "#fff",
        padding: 16,
        fontSize: 16,
        width: "85%"
    },
    button: {
        backgroundColor: "#1e6f9f",
        width: 55,
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    img: {
        height: 15,
        width: 15
    },
    logo: {
        height: 34,
        width: 110
    },
    counterBox: {
        marginTop: 32,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20, 
       
    },
    counters: {
        flexDirection: "row",
        gap: 8,
        alignItems: "center"
    },
    counter: {
        backgroundColor:"#333333",
        paddingHorizontal: 8,
        color: "#fff",
        borderRadius: 50
    },
    createds: {
        color: "#4ea8de",
        fontSize: 14,
        fontWeight: "bold"
    },
    finisheds: {
        color: "#8284fa",
        fontSize: 14,
        fontWeight: "bold"
    },
    separator: {
        backgroundColor:"#333333",
        height: 1,
        width: "100%"
    },
    list: {
        marginBottom: 8
    },  
    enpty:{
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
    }



})