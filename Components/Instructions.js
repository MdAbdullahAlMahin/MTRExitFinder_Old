import React from "react";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import * as Speech from "expo-speech";

const Instructions = ({ route, navigation }) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      Speech.speak("");
    });
    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);
  const { goto } = route.params;
  return (
    <SafeAreaView style={styles.container}>
        {/* Instructions */}
  
        <View style={styles.parent2}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button2}
          onPress={() => {
            Speech.speak()
          }}
        >
          <Text style={styles.text}>朗讀頁面</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.parent3}>
        <Text style={styles.normaltext}>如何使用本應用程式：</Text>
        <ScrollView>
          <Text style={styles.longtext}>
          本應用程式所有導航指示均以「優先使用升降機」在大堂的位置為起點, 開始計算步數和指引方向 {"\n"}
          1. 輸入您的步伐距離然後按“下一步”，您的步伐距離資料就會被儲存{"\n"}
            2. 主頁的左下角為“設定”按鈕；右下角為“開始導航”按鈕；在每一頁的右上角都有一個“朗讀頁面”的按鈕 {"\n"}
            3. 請按“開始導航”以開始你的旅程；或按“設定”改變你的步伐距離；或按下方中間位置的按鈕回到主頁，再按“使用說明” 再次聆聽本使用說明 {"\n"}
            4. 開始導航後，請輸入您所在的地鐵站，然後按“下一步”{"\n"}
            5. 如果您想返回上一頁請按“返回上一頁”{"\n"}
            6. 請使用下方中間位置的按鈕選擇你想要的出口，然後按右下角的“下一步” 按鈕
            {"\n"}
            7. 請按照語音指示選擇您喜歡的模式{"\n"}
            8. 本應用程式會提供地鐵站附近的地標以作參考，請按右下角的“下一步” 按鈕以繼續 {"\n"}
            9. 聆聽指示：按右下角的按鈕以聆聽下一步指示； 或按左下角的按鈕以聆聽上一步指示{"\n"}
            10. 如果你想提前結束導航,請按上方中間位置的按鈕; 如果你需要撥打緊急熱線求助, 請按左上方的按鈕以聯絡你所在的港鐵站職員, 或者撥打緊港鐵熱線2881 8888以尋求一般援助
            {"\n"}
            11. 當你已經完成導航，請按右下角的按鈕以返回主頁
          </Text>
        </ScrollView>
      </View>
      <View style={styles.parent}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={() => {
            navigation.navigate(goto, { gobackto: "Instructions" });
            if (goto === "Settings") {
              Speech.stop();
              Speech.speak("");
            } else {
              Speech.stop();
              Speech.speak("");
            }
          }}
        >
          <Text style={styles.text}>
            {goto === "設定" ? "返回上一頁" : "變更步伐距離"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  parent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 15,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#1167b1",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderColor: "white",
    width: "95%",
    height: 50,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    // fontFamily: 'Helvetica',
    letterSpacing: 0.25,
    color: "white",
  },
  normaltext: {
    fontSize: 16,
    lineHeight: 21,
    // fontFamily: 'Helvetica',
    letterSpacing: 0.25,
    color: "black",
    textAlign: "center",
    marginTop: 15,
  },
  longtext: {
    fontSize: 12,
    lineHeight: 15,
    // fontFamily: 'Helvetica',
    letterSpacing: 0.25,
    color: "black",
    textAlign: "justify",
    margin: 19,
  },
  parent2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    right: 0,
    top: 10
  },
  parent3: {
    position: "absolute",
    top: 90,
  },
  button2: {
    marginTop: 30,
    borderRadius: 10,
    backgroundColor: "#1167b1",
    paddingVertical: 12,
    paddingHorizontal: 32,
    margin: 20,
    marginBottom: 0,
    alignContent: "center",
  },
});

export default Instructions;
