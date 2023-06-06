import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  postHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleAndAvatarContainer: { flexDirection: "row", alignItems: "center" },
  postImage: {
    width: "100%",
    height: "20rem",
  },
  iconsRowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 5,
  },
  iconsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: EStyleSheet.value(10),
    marginVertical: EStyleSheet.value(5),
  },
});

export default styles;
