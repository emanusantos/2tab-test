import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  scrollableChild: {
    flexDirection: "row",
    width: "15rem",
    backgroundColor: "#77777790",
    borderRadius: 15,
    marginRight: "1rem",
  },
  leftChild: {
    backgroundColor: "#777",
    height: "100%",
    width: "45%",
    borderRadius: 15,
  },
  smallerViewsContainer: { width: "100%", marginTop: EStyleSheet.value(10) },
  smallerView: {
    backgroundColor: "#777",
    height: 10,
    width: "40%",
    borderRadius: 15,
    marginLeft: 15,
    marginBottom: 10,
  },
});

export default styles;
