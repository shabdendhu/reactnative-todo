import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";

const Task = ({ text, completetask }) => {
//   const colorList = ["#9eddff", "#f9dc4b", "#ffb2e9"];
  const colorList = ["#FFF"];
  const color = colorList[Math.floor(Math.random() * colorList.length)];
  const leftSwipe = () => {
    return (
      <View style={styles.doneTask}>
        <Text style={styles.actionText}> Done</Text>
      </View>
    );
  };
  return (
    <GestureHandlerRootView>
      <Swipeable
        onSwipeableWillOpen={completetask}
        renderLeftActions={leftSwipe}
      >
        <View style={[styles.item, { backgroundColor: color }]}>
          <View style={styles.itemLeft}>
            <View style={styles.square}></View>
          </View>
          <Text style={styles.itemText}>{text}</Text>
          <View style={styles.circular}></View>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default Task;

const styles = StyleSheet.create({
  item: {
    // backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    height: 24,
    width: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
    right: 15,
    position: "absolute",
  },
  doneTask: {
    backgroundColor: "#3343CE",
    height: 54,
    width: "100%",
    borderRadius: 10,
    // alignItems:'center',
    justifyContent: "center",
    left: 5,
  },
  actionText: {
    color: "white",
    fontSize: 20,
  },
});
