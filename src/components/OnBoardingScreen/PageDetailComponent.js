import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Icon } from "react-native-elements";

import colors from "../../utils/colors";
import fonts from "../../utils/fonts";

const PageDetailComponent = ({ props }) => {
  return (
    <View style={styles.containerView}>
      <Text style={{ ...styles.loginText, ...fonts.heading1 }}>
        {props.title}
      </Text>
      <Text style={{ ...fonts.regular }}>{props.content}</Text>
      <TouchableOpacity style={styles.nextButtonStyle} onPress={props.onClick}>
        <Text style={{ ...fonts.regular, ...styles.buttonText }}>next</Text>
        <Icon
          name="angle-right"
          type="font-awesome"
          color={colors.neutralGrey}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    position: "relative",
    margin: 30,
    flex: 1,
  },
  loginText: {
    marginBottom: 10,
  },
  buttonText: {
    textTransform: "uppercase",
    marginEnd: 19,
  },
  nextButtonStyle: {
    alignItems: "center",
    position: "absolute",
    right: 10,
    bottom: 0,
    borderWidth: 0.5,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
    borderColor: colors.neutralGrey,
    flexDirection: "row",
  },
});

export default PageDetailComponent;
