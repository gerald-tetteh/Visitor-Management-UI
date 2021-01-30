import React from "react";
import { View, StyleSheet, Text, Button, TouchableOpacity } from "react-native";

import colors from "../utils/colors";
import { Pages } from "react-native-pages";
import ViewPagerComponent from "../components/OnBoardingScreen/ViewPagerComponent";

const OnBoardingScreen = () => {
  const images = [
    require("../../assets/images/viewPagerLogin.png"),
    require("../../assets/images/viewPagerScan.png"),
    require("../../assets/images/viewPagerCheckIn.png"),
  ];
  const pagesRef = React.createRef();
  return (
    <View style={styles.screenContainer}>
      <View style={styles.viewPagerContainer}>
        <TouchableOpacity style={styles.skipButton}>
          <Text style={styles.skipButtonText}>SKIP</Text>
        </TouchableOpacity>
        <Pages
          ref={pagesRef}
          containerStyle={styles.pagesStyle}
          indicatorColor={colors.primary500}
          indicatorOpacity={0.1}
        >
          {images.map((imgSrc, index, __) => {
            return (
              <View collapsable={false} key={`${index}`}>
                <ViewPagerComponent imgSrc={imgSrc} />
              </View>
            );
          })}
        </Pages>
      </View>
      <View style={styles.detailContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    width: "100%",
  },
  viewPagerContainer: {
    position: "relative",
    flex: 3,
    width: "100%",
    justifyContent: "center",
    backgroundColor: colors.lightBlue,
  },
  pagesStyle: {
    marginTop: "35%",
  },
  skipButton: {
    position: "absolute",
    top: 40,
    right: 31,
  },
  skipButtonText: {
    color: colors.grey800,
    fontSize: 15,
    fontWeight: "700"
  },
  detailContainer: {
    backgroundColor: colors.white,
    flex: 2,
    width: "100%",
  },
});

export default OnBoardingScreen;
