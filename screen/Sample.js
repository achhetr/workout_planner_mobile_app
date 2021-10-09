import * as React from "react";
import { View } from "react-native";

import CustomButton from "../components/CustomButton";

export default function Sample() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CustomButton title="Sample" />
    </View>
  );
}
