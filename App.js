import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from "react-native";
import Task from "./components/Task";
import "react-native-gesture-handler";
import { FlatList } from "react-native-gesture-handler";
import Example from "./components/calender";

export default function App() {
  const [task, settask] = useState();
  const [taskList, settaskList] = useState([]);
  const handleAddTask = (e) => {
    Keyboard.dismiss();
    settaskList([...taskList, task]);
    settask(null);
  };
  const completetask = (index) => {
    let itemsCopy = [...taskList];
    itemsCopy.splice(index, 1);
    settaskList(itemsCopy);
  };
  return (
    <View style={styles.container}>
      {/* Todays Tasks */}
      <Example />
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Todays tasks</Text>
        <ScrollView style={styles.items}>
          {taskList.map((e, i) => (
            <Task completetask={() => completetask(i)} text={e} key={e} />
          ))}
          {taskList.length===0&&
          <Image source={require('./assets/icon.png')} />
          }
          {/* <FlatList
            data={taskList}
            renderItem={({ item, index }) => (
              <Task
                completetask={() => completetask(index)}
                text={item}
                key={item}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          /> */}
          {/* {taskList.map((e, i) => (
            <Task index={i} completetask={()=>completetask(i)} text={e} key={i} />
          ))} */}
        </ScrollView>


      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          value={task}
          onChangeText={(e) => {
            settask(e);
          }}
          style={styles.input}
          placeholder={"Write a task"}
        />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addtext}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  taskWrapper: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    // paddingBottom: 10,
  },
  items: { marginTop: 20 },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderWidth: 1,
    width: "80%",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    height: 50,
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: "#FFF",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  addtext: {
    fontSize: 30,
    fontWeight: "bold",
    color: "green",
  },
});
