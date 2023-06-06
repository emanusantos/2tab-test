import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  wrapper: {
    width: "100%",
    height: "4rem",
    justifyContent: "center",
    backgroundColor: "#777",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingHorizontal: "2rem",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  personIcon: { marginRight: 5 },
  smallText: { fontSize: 10 },
});

export default styles;
