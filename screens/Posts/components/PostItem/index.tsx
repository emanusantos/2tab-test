import React from "react";

import { Image, Pressable, Text, View } from "react-native";

import EStyleSheet from "react-native-extended-stylesheet";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface PostItemProps {
  fullName: string;
  dateCreated: string;
  title: string;
  description: string;
  fileUrl?: string;
}

const PostItem: React.FC<PostItemProps> = ({
  fullName,
  dateCreated,
  title,
  description,
  fileUrl,
}) => {
  const { navigate } = useNavigation();

  const calculateDaysAgo = () => {
    const [month, day, year] = dateCreated.slice(0, 10).split("/");

    const postCreatedDate = new Date(`${year}-${month}-${day}`);

    const difference = new Date().getTime() - postCreatedDate.getTime();

    const differenceInDays = Math.ceil(difference / (1000 * 3600 * 24));

    return `${differenceInDays} days ago`;
  };

  const handlePress = () => {
    navigate("ViewPost");
  };

  return (
    <Pressable onPress={handlePress}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            name="person-circle-outline"
            size={40}
            style={{ marginRight: EStyleSheet.value(5) }}
          />
          <View>
            <Text>{title}</Text>
            <Text style={{ fontSize: 10 }}>{calculateDaysAgo()}</Text>
          </View>
        </View>

        <Ionicons
          name="ellipsis-horizontal-outline"
          size={20}
          style={{ marginRight: EStyleSheet.value(5) }}
        />
      </View>
      {fileUrl ? (
        <Image
          source={{ uri: fileUrl }}
          style={{
            width: "100%",
            height: EStyleSheet.value("20rem"),
          }}
        />
      ) : null}

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: EStyleSheet.value(5),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: EStyleSheet.value(10),
            marginVertical: EStyleSheet.value(5),
          }}
        >
          <Ionicons
            name="heart-outline"
            size={30}
            style={{ marginRight: EStyleSheet.value(5) }}
          />

          <Ionicons
            name="chatbubble-outline"
            size={25}
            style={{ marginRight: EStyleSheet.value(5) }}
          />

          <Ionicons
            name="share-social-outline"
            size={28}
            style={{ marginRight: EStyleSheet.value(5) }}
          />
        </View>

        <Ionicons
          name="bookmark-outline"
          size={25}
          style={{ marginRight: EStyleSheet.value(5) }}
        />
      </View>

      <Text
        style={{
          marginHorizontal: EStyleSheet.value(5),
          marginBottom: EStyleSheet.value(10),
        }}
      >
        <Text style={{ fontWeight: "bold" }}>{fullName}</Text> {description}
      </Text>
    </Pressable>
  );
};

export default React.memo(PostItem);
