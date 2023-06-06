import React from "react";

import { Image, Pressable, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { PostItemProps, PostListScreenNavigator } from "./types";

import styles from "./styles";

const PostItem: React.FC<PostItemProps> = ({
  fullName,
  dateCreated,
  title,
  description,
  fileUrl,
}) => {
  const { navigate } = useNavigation<PostListScreenNavigator>();

  const calculateDaysAgo = () => {
    const [month, day, year] = dateCreated.slice(0, 10).split("/");

    const postCreatedDate = new Date(`${year}-${month}-${day}`);

    const difference = new Date().getTime() - postCreatedDate.getTime();

    const differenceInDays = Math.ceil(difference / (1000 * 3600 * 24));

    return `${differenceInDays} days ago`;
  };

  const handlePress = () => {
    if (fileUrl) navigate("ViewPost", { url: fileUrl });
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.postHeaderContainer}>
        <View style={styles.titleAndAvatarContainer}>
          <Ionicons
            name="person-circle-outline"
            size={40}
            style={{ marginRight: 5 }}
          />
          <View>
            <Text>{title}</Text>
            <Text style={{ fontSize: 10 }}>{calculateDaysAgo()}</Text>
          </View>
        </View>

        <Ionicons
          name="ellipsis-horizontal-outline"
          size={20}
          style={{ marginRight: 5 }}
        />
      </View>
      {fileUrl ? (
        <Image source={{ uri: fileUrl }} style={styles.postImage} />
      ) : null}

      <View style={styles.iconsRowContainer}>
        <View style={styles.iconsRow}>
          <Ionicons name="heart-outline" size={30} style={{ marginRight: 5 }} />

          <Ionicons
            name="chatbubble-outline"
            size={25}
            style={{ marginRight: 5 }}
          />

          <Ionicons
            name="share-social-outline"
            size={28}
            style={{ marginRight: 5 }}
          />
        </View>

        <Ionicons
          name="bookmark-outline"
          size={25}
          style={{ marginRight: 5 }}
        />
      </View>

      <Text
        style={{
          marginHorizontal: 5,
          marginBottom: 10,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>{fullName}</Text> {description}
      </Text>
    </Pressable>
  );
};

export default React.memo(PostItem);
