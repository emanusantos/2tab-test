import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "1rem",
    marginVertical: "1rem",
  },
  title: { fontSize: 20, fontWeight: "bold" },
  iconsContainer: { flexDirection: "row", gap: EStyleSheet.value("1rem") },
  icon: { marginRight: 5 },
});

export default styles;
