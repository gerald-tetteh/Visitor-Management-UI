import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button } from "react-native";

import colors from "../utils/colors";
import { Pages } from "react-native-pages";
import ViewPagerComponent from "../components/OnBoardingScreen/ViewPagerComponent";
import PageDetailComponent from "../components/OnBoardingScreen/PageDetailComponent";

const OnBoardingScreen = () => {
  const [skipState, setSkipState] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    require("../../assets/images/viewPagerLogin.png"),
    require("../../assets/images/viewPagerScan.png"),
    require("../../assets/images/viewPagerCheckIn.png"),
  ];
  const contentList = [
    {
      onClick: () => onNextHandler(currentIndex),
      content: "Login to app with the checkpoint name and pin-code.",
      title: "login",
    },
    {
      onClick: () => onNextHandler(currentIndex),
      content:
        "Scan Qr tags or enter visitor code to view visitor information.",
      title: "scan",
    },
    {
      onClick: () => console.log("hello"),
      content:
        "Check in visitors by verifying their info and given them a pass.",
      title: "check in",
    },
  ];

  const pagesRef = React.createRef();
  const updateSkipState = (index) => {
    if (index === 2) {
      setSkipState(false);
    } else {
      setSkipState(true);
    }
  };
  const onNextHandler = (index) => {
    if (index === 2) {
      console.log("last");
    } else {
      pagesRef.current.scrollToPage(index + 1);
      setCurrentIndex(currentIndex + 1);
    }
  };
  const onSkipHandler = () => {
    pagesRef.current.scrollToPage(2);
    setCurrentIndex(2);
  };
  return (
    <View style={styles.screenContainer}>
      <View style={styles.viewPagerContainer}>
        <TouchableOpacity
          style={styles.skipButton}
          onPress={skipState ? () => onSkipHandler() : null}
        >
          <View>
            <Text style={styles.skipButtonText}>
              {skipState ? "SKIP" : " "}
            </Text>
          </View>
        </TouchableOpacity>
        <Pages
          ref={pagesRef}
          containerStyle={styles.pagesStyle}
          indicatorColor={colors.primary500}
          indicatorOpacity={0.1}
          scrollEnabled={false}
          onScrollEnd={(index) => updateSkipState(index)}
        >
          {images.map((imgSrc, index, __) => {
            const isCheckIn = index === 2;
            return (
              <View collapsable={false} key={`${index}`}>
                <ViewPagerComponent imgSrc={imgSrc} isCheckIn={isCheckIn} />
              </View>
            );
          })}
        </Pages>
      </View>
      <View style={styles.detailContainer}>
        <PageDetailComponent props={contentList[currentIndex]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    width: "100%",
    paddingTop: 35,
    backgroundColor: colors.lightBlue,
  },
  viewPagerContainer: {
    flex: 3,
    width: "100%",
    justifyContent: "center",
    backgroundColor: colors.lightBlue,
  },
  pagesStyle: {},
  skipButton: {
    alignItems: "flex-end",
    marginEnd: 20,
    marginTop: 10,
  },
  skipButtonText: {
    color: colors.grey800,
    fontSize: 15,
    fontWeight: "700",
  },
  detailContainer: {
    backgroundColor: colors.white,
    flex: 2,
    width: "100%",
    paddingBottom: 10,
  },
});

export default OnBoardingScreen;
