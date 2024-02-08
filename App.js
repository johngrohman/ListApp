import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {View,
        Text,
        TextInput,
        TouchableOpacity,
        StyleSheet,
        KeyboardAvoidingView,
        Platform,
        Keyboard,
} from 'react-native';
import ListItem from './src/components/ListItem';
import AddButton from './src/components/AddButton';

export default function App() {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const handleAddTask = () => {
        // Basically an append function. Tasks
        Keyboard.dismiss();
        setTaskItems([...taskItems, task])
        setTask(null);
    }

    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    }

    const keyboardVerticalOffset = Platform.OS === 'ios' ? 90 : 0

    return (
        <View style={styles.container}>

            <Text style={styles.sectionTitle}>My List</Text>

            <View style={styles.items}>
                {
                    taskItems.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                                <ListItem key={index} text={item} />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>

            <KeyboardAvoidingView
                behavior='padding'
                keyboardVerticalOffset={keyboardVerticalOffset}
                style={styles.writeTaskWrapper}
            >

                <TextInput style={styles.input} placeholder={'Write a Task'} value={task} onChangeText={(text) => setTask(text)} />

                <TouchableOpacity onPress={() => handleAddTask()}>

                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>

                </TouchableOpacity>

            </KeyboardAvoidingView>
            
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 78,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 40, 
    fontWeight: "bold", 
    marginBottom: 7, 
    textAlign: "left",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: 'lightgray',
    borderRadius: 60,
    borderColor: "gray",
    borderWidth: 1,
    
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "lightgray",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 1,
  },
});
