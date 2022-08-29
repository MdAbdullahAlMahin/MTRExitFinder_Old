import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
  Touchable,
} from "react-native";
import * as Speech from "expo-speech";
import { Linking } from "react-native";

const Directions = ({ route, navigation }) => {
  const phoneNumber = 23075366;
  const { mode, stepSize, station, exit } = route.params;
  function convertDistToStep(stepSize, distance) {
    return Math.round((distance / stepSize) * 100) / 100;
  }
  const routes = {
    A: {
      Elevator: [
        `向前行${convertDistToStep(stepSize, 14.54)}步`,
        `在分岔口轉右 然後行${convertDistToStep(
          stepSize,
          6.43
        )}步 你將會遇到兩個分岔口  請在第二個分岔口停下`,
        `在分岔口轉右 然後行${convertDistToStep(stepSize, 13.02)}步 拍卡出閘`,
        `向前行 ${convertDistToStep(stepSize, 7.54)}步`,
        `在分岔口轉右 然後行${convertDistToStep(stepSize, 11.56)}步`,
        `在分岔口轉左 然後沿著引路徑行${convertDistToStep(
          stepSize,
          3.77
        )}步 就會到達升降機`,
        `使用升降機到達A出口`,
      ],
      Escalator: [
        `向前行${convertDistToStep(stepSize, 14.54)}步`,
        `在分岔口轉右 然後行${convertDistToStep(stepSize, 4.93)}步`,
        `在分岔口轉左 然後行${convertDistToStep(
          stepSize,
          30.66
        )}步 你將會遇到兩個分岔口  請在第二個分岔口停下`,
        `在分岔口轉左 然後行${convertDistToStep(
          stepSize,
          7.7
        )}步 你將會再次遇到兩個分岔口  請在第二個分岔口停下`,
        `在分岔口轉右 然後行${convertDistToStep(stepSize, 4.13)}步 拍卡出閘`,
        `向前行${convertDistToStep(
          stepSize,
          9.76
        )}步 在分岔口轉左 然後行${convertDistToStep(stepSize, 6.1)}步`,
        `到達A出口 這是引路徑的終點`,
        `請離開引路徑 向西北方向大約行${convertDistToStep(
          stepSize,
          0
        )}步 扶手電梯在你的左手邊 而樓梯則在你的右手邊`,
        `在使用扶手電梯或樓梯後 請繼續前行 並使用樓梯到達地面`,
      ],
      Stairs: [
        `向前行${convertDistToStep(stepSize, 14.54)}步`,
        `在分岔口轉右 然後行${convertDistToStep(stepSize, 4.93)}步`,
        `在分岔口轉左 然後行${convertDistToStep(
          stepSize,
          30.66
        )}步 你將會遇到兩個分岔口  請在第二個分岔口停下`,
        `在分岔口轉左 然後行${convertDistToStep(
          stepSize,
          7.7
        )}步 你將會再次遇到兩個分岔口  請在第二個分岔口停下`,
        `在分岔口轉右 然後行${convertDistToStep(stepSize, 4.13)}步 拍卡出閘`,
        `向前行${convertDistToStep(
          stepSize,
          9.76
        )}步 在分岔口轉左 然後行${convertDistToStep(stepSize, 6.1)}步`,
        `到達A出口 這是引路徑的終點`,
      ],
      Places: ["Chi Sun", "Shun Hing"],
    },
    B1: {
      Escalator: [
        `向前行${convertDistToStep(stepSize, 14.54)}步`,
        `在分岔口轉右 然後行${convertDistToStep(
          stepSize,
          6.43
        )}步  你將會遇到兩個分岔口  請在第二個分岔口停下`,
        `在分岔口轉右 然後行${convertDistToStep(stepSize, 13.02)}步 拍卡出閘`,
        `向前行${convertDistToStep(
          stepSize,
          14.34
        )}步 你將會遇到兩個分岔口  請在第二個分岔口停下`,
        `在分岔口轉左 然後行${convertDistToStep(stepSize, 5.1)}步`,
        `到達B出口 這是引路徑的終點`,
        `請離開引路徑 向西北方向行 扶手電梯在你的左手邊`,
        `在使用扶手電梯後 B1出口在你的右手邊 請繼續沿著路徑到達地面`,
      ],
      Stairs: [
        `向前行${convertDistToStep(stepSize, 14.54)}步`,
        `在分岔口轉右 然後行${convertDistToStep(
          stepSize,
          6.43
        )}步  你將會遇到兩個分岔口  請在第二個分岔口停下`,
        `在分岔口轉右 然後行${convertDistToStep(stepSize, 13.02)}步 拍卡出閘`,
        `向前行${convertDistToStep(
          stepSize,
          14.34
        )}步 你將會遇到兩個分岔口  請在第二個分岔口停下`,
        `在分岔口轉左 然後行${convertDistToStep(stepSize, 5.1)}步`,
        `到達B出口 這是引路徑的終點`,
        `請離開引路徑 向西北方向行 樓梯在你的右手邊`,
        `在使用樓梯後 B1出口在你的右手邊 請繼續沿著路徑到達地面`,
      ],
      Places: ["x", "y"],
    },
    B2: {
      Escalator: [
        `向前行${convertDistToStep(stepSize, 14.54)}步`,
        `在分岔口轉右 然後行${convertDistToStep(
          stepSize,
          6.43
        )}步  你將會遇到兩個分岔口  請在第二個分岔口停下`,
        `在分岔口轉右 然後行${convertDistToStep(stepSize, 13.02)}步 拍卡出閘`,
        `向前行${convertDistToStep(
          stepSize,
          14.34
        )}步 你將會遇到兩個分岔口  請在第二個分岔口停下`,
        `在分岔口轉左 然後行${convertDistToStep(stepSize, 5.1)}步`,
        `到達B出口 這是引路徑的終點`,
        `請離開引路徑 向西北方向行 扶手電梯在你的左手邊`,
        `在使用扶手電梯後 請繼續前行並使用樓梯到達B2出口`,
      ],
      Stairs: [
        `向前行${convertDistToStep(stepSize, 14.54)}步`,
        `在分岔口轉右 然後行${convertDistToStep(
          stepSize,
          6.43
        )}步  你將會遇到兩個分岔口  請在第二個分岔口停下`,
        `在分岔口轉右 然後行${convertDistToStep(stepSize, 13.02)}步 拍卡出閘`,
        `向前行${convertDistToStep(
          stepSize,
          14.34
        )}步 你將會遇到兩個分岔口  請在第二個分岔口停下`,
        `在分岔口轉左 然後行${convertDistToStep(stepSize, 5.1)}步`,
        `到達B出口 這是引路徑的終點`,
        `請離開引路徑 向西北方向行 樓梯在你的右手邊`,
        `在使用樓梯後 請繼續前行並使用樓梯到達B2出口`,
      ],
      Places: ["x", "y"],
    },
    C: {
      Escalator: [
        `向前行${convertDistToStep(stepSize, 14.54)}步`,
        `在分岔口轉右 然後行${convertDistToStep(stepSize, 4.93)}步`,
        `在分岔口轉左 然後行${convertDistToStep(
          stepSize,
          30.66
        )}步 你將會遇到兩個分岔口  請在第二個分岔口停下`,
        `在分岔口轉左 然後行${convertDistToStep(
          stepSize,
          7.7
        )}步 你將會遇到兩個分岔口  請在第二個分岔口停下`,
        `在分岔口轉右 然後行${convertDistToStep(stepSize, 4.13)}步 拍卡出閘`,
        `向前行${convertDistToStep(
          stepSize,
          21.46
        )}步 你將會遇到兩個分岔口  請在第二個分岔口停下`,
        `在分岔口轉右 然後行${convertDistToStep(stepSize, 9.2)}步`,
        `在分岔口轉左 然後行${convertDistToStep(stepSize, 8.1)}步`,
        `在分岔口轉右 然後行${convertDistToStep(stepSize, 5.05)}步`,
        `到達C出口 這是引路徑的終點`,
        `請離開引路徑 向西北方向行 扶手電梯在你的左手邊`,
        `在使用扶手電梯後 請繼續前行並使用樓梯到達C出口`,
      ],
      Stairs: [
        `向前行${convertDistToStep(stepSize, 14.54)}步`,
        `在分岔口轉右 然後行${convertDistToStep(stepSize, 4.93)}步`,
        `在分岔口轉左 然後行${convertDistToStep(
          stepSize,
          30.66
        )}步 你將會遇到兩個分岔口  請在第二個分岔口停下`,
        `在分岔口轉左 然後行${convertDistToStep(
          stepSize,
          7.7
        )}步 你將會遇到兩個分岔口  請在第二個分岔口停下`,
        `在分岔口轉右 然後行${convertDistToStep(stepSize, 4.13)}步 拍卡出閘`,
        `向前行${convertDistToStep(
          stepSize,
          21.46
        )}步 你將會遇到兩個分岔口  請在第二個分岔口停下`,
        `在分岔口轉右 然後行${convertDistToStep(stepSize, 9.2)}步`,
        `在分岔口轉左 然後行${convertDistToStep(stepSize, 8.1)}步`,
        `在分岔口轉右 然後行${convertDistToStep(stepSize, 5.05)}步`,
        `到達C出口 這是引路徑的終點`,
        `請離開引路徑 向西北方向行 樓梯在你的右手邊`,
        `在使用樓梯後 請繼續前行並使用樓梯到達C出口`,
      ],
      Places: ["x", "y"],
    },
  };
  const dir = routes[exit][mode];
  const directions = [
    "開始導航",
    ...dir,
    "恭喜您，您已到達終點！按一下右下方的按鈕以返回主頁",
  ];
  const [curr, set_curr] = useState(0);
  const update_curr = (dir) => {
    console.log(dir);
    var num = curr + dir;
    if (num < 0) {
      navigation.navigate("Select Type Of Exit", { stepSize, station, exit });
    } else if (num >= directions.length) {
      navigation.navigate("Home", { stepSize });
    } else {
      Speech.speak(directions[num]);
    }
    set_curr(num);
    console.log(curr);
    console.log(directions[curr]);
    console.log(directions[curr + 1]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.parent2}>
          <TouchableOpacity
            style={styles.button3}
            activeOpacity={0.5}
            onPress={() => {
              Linking.openURL(`tel:${phoneNumber}`);
              Speech.stop();
              Speech.speak();
            }}
          >
            <Text style={styles.text}>撥打緊急熱綫</Text>
          </TouchableOpacity>
          {curr != directions.length - 1 ? (
            <TouchableOpacity
              style={styles.button3}
              activeOpacity={0.5}
              onPress={() => {
                navigation.navigate("Home", { stepSize });
                Speech.stop();
                Speech.speak();
              }}
            >
              <Text style={styles.text}>結束導航</Text>
            </TouchableOpacity>
          ) : null}
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.button3}
            onPress={() => {
              Speech.stop();
              Speech.speak(
                "Bottom left of the screen to go back, bottom right to proceed. On this row, there are three buttons, This button is on the right, Press middle button to end journey, Press left button to call MTR hotline for help."
              );
            }}
          >
            <Text style={styles.text}>朗讀頁面</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.parent3}>
        <Text style={styles.normaltext}>{directions[curr]}</Text>
      </View>
      <View style={styles.container2}>
        <View style={styles.parent}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Speech.stop();
              Speech.speak();
              update_curr(-1);
            }}
          >
            <Text style={styles.text}>
              {curr !== 0 ? "返回上一頁" : "返回上一頁"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Speech.stop();
              Speech.speak();
              update_curr(+1);
            }}
          >
            <Text style={styles.text}>
              {curr === directions.length - 1 ? "下一步" : "下一步"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex: 1,
    alignItems: "center",
  },
  parent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 10,
  },
  parent2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#1167b1",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderColor: "white",
    height: 50,
    minWidth: "48%",
  },
  parent3: {
    position: "absolute",
    top: 90,
  },
  button2: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#1167b1",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderColor: "white",
    width: "20%",
    height: 50,
  },
  button3: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#1167b1",
    padding: 10,
    borderColor: "white",
    width: "33%",
    height: 50,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    // fontFamily: "Helvetica",
    // arial,
    letterSpacing: 0.25,
    color: "white",
  },
  normaltext: {
    fontSize: 30,
    lineHeight: 50,
    // fontFamily: "Helvetica",
    // arial,
    letterSpacing: 0.25,
    color: "black",
    textAlign: "center",
    margin: 20,
  },
  parent3: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
export default Directions;
