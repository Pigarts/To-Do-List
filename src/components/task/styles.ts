import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        backgroundColor:"#262626",
        borderRadius: 10,
        width: "100%",
        padding: 12,
        gap: 8,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#333333",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8
    },
    icons:{
        width: 18,
        height: 18
    },
    text: {
        color: "#fff",
        fontSize: 14,
        maxWidth: 235
    },
    textDone: {
        color: "#808080",
        fontSize: 14,
        maxWidth: 235,
        textDecorationLine: "line-through"
    }



})