import * as React from "react";
import { View, Button } from "react-native";

export default function CustomButton(props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title={props.title} color="#841584"></Button>
    </View>
  );
}
