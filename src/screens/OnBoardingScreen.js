import React from "react";
import { View, StyleSheet, Text } from "react-native";

import colors from "../utils/colors";
import { Pages } from "react-native-pages";
import ViewPagerComponent from "../components/OnBoardingScreen/ViewPagerComponent";

const OnBoardingScreen = () => {
  const images = [
    require("../../assets/images/viewPagerLogin.png"),
    require("../../assets/images/viewPagerScan.png"),
    require("../../assets/images/viewPagerCheckIn.png"),
  ];
  const viewPager = (
    <Pages containerStyle={styles.pagesStyle}>
      {images.map((imgSrc, index, __) => {
        return (
          <View collapsable={false} key={`${index + 1}`}>
            <ViewPagerComponent imgSrc={imgSrc} />
          </View>
        );
      })}
    </Pages>
  );
  return (
    <View style={styles.screenContainer}>
      <View style={styles.viewPagerContainer}>{viewPager}</View>
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
    flex: 3,
    width: "100%",
    justifyContent: "center",
    backgroundColor: colors.lightBlue,
  },
  pagesStyle: {
    marginTop: "35%",
  },
  detailContainer: {
    backgroundColor: colors.white,
    flex: 2,
    width: "100%",
  },
});

export default OnBoardingScreen;
