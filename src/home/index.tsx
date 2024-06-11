import { Alert, FlatList, Image, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";
import { Separetor } from "../components/separetor";
import { useEffect, useState } from "react";
import { Task } from "../components/task";

export function Home() {
const [ name, setName ] = useState<string>("")
const [ tasks, setTasks ] = useState<string[]>([])
const [ tasksFinisheds, setTasksFinisheds ] = useState<string[]>([])


function handleAdd() {
    if(tasks.includes(name)) {
        return Alert.alert("Ops,", "Parece que esta tarefa ja esta na lista") 
    }
    if(name.length == 0) {
        return Alert.alert("Ops,", "A tarefa precisa de uma titulo.") 
    }
    setTasks(prevState => [...prevState, name])
}

function handleCheck(name: string) {
    console.log("check")
    if(tasksFinisheds.includes(name)) {
        setTasksFinisheds(tasksFinisheds.filter(item => item != name )) 
    } else {
        setTasksFinisheds(prevState => [...prevState, name])
    }
}

function handleRemove(name: string) {
    Alert.alert("Tem certeza?", `Remover a tarefa ${name} da lista?`, [
        {
            text: "Sim",
            onPress: () => {
               setTasks(tasks.filter(item => item != name )) 
               setTasksFinisheds(tasksFinisheds.filter(item => item != name )) 

            }
        },
        {
            text: "Cancelar",
            style: "cancel"
        }
    ])
}

useEffect(() => {
console.log(`
tasks: ${tasks};
finsheds: ${tasksFinisheds}
`)
}, [tasks, tasksFinisheds])
    return(
        <>
            <View style={styles.header}>
            <Image source={require('../../assets/icons/Logo.png')} style={styles.logo} />

            </View>
            <View style={styles.body}>
            <View style={styles.toCenter}>

                <View style={styles.inputWhrapper}>
                    <TextInput 
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa" 
                    placeholderTextColor={"#808080"}
                    onChangeText={(value)=> setName(value)}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleAdd}>
                    <Image source={require('../../assets/icons/plus_icon.png')} style={styles.img} />
                    </TouchableOpacity>
                </View>
            </View>
                <View style={styles.counterBox}>
                    <View style={styles.counters}>
                        <Text style={styles.createds}>Criadas</Text><Text style={styles.counter}>{tasks.length}</Text>
                    </View>
                    <View style={styles.counters}>
                        <Text style={styles.finisheds}>Concluídas</Text><Text style={styles.counter}>{tasksFinisheds.length}</Text>
                    </View>
                </View>
                <FlatList 
                    data={tasks}
                    keyExtractor={item => item}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => ( 
                        <Task
                        key={item}
                        name={item}
                        onRemove={() => handleRemove(item)}
                        onCheck={() => handleCheck(item)}
                        />
                        
                    )}
                    ListEmptyComponent={() => (
                        <View style={styles.enpty}>
                        <Separetor/>
                            <Image source={require("../../assets/icons/Clipboard.png")}/>
                        <Text style={{
                            textAlign: "center",
                            fontSize: 14,
                            fontWeight: "medium",
                            color: "#808080"
                            }}
                            >Você ainda não tem tarefas cadastradas
                        Crie tarefas e organize seus itens a fazer </Text> 
                        </View>
                    )}
                />
            </View>
        </>
    );
}
