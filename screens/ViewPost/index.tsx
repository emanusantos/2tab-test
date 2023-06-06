import React from "react";

import { Image, TouchableOpacity, View } from "react-native";

import EStyleSheet from "react-native-extended-stylesheet";
import { SafeAreaView } from "react-native-safe-area-context";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import { PostsStackParams } from "../../routes/PostsStack";

type ViewPostProps = NativeStackScreenProps<PostsStackParams, "ViewPost">;

export const ViewPost: React.FC<ViewPostProps> = ({ navigation, route }) => {
  const url = route.params.url;

  return (
    <SafeAreaView>
      <View style={{ padding: EStyleSheet.value("1rem") }}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Ionicons name="chevron-back-outline" size={30} />
        </TouchableOpacity>
      </View>

      <Image
        source={{ uri: url }}
        style={{ width: "100%", height: EStyleSheet.value("35rem") }}
      />
    </SafeAreaView>
  );
};
