import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  wrapper: {
    width: "100%",
    height: "5rem",
    backgroundColor: "#777",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: "center",
    paddingHorizontal: "2rem",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default styles;
