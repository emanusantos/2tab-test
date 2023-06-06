import React from "react";

import { Modal, Text, TouchableOpacity, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import { Video, ResizeMode } from "expo-av";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";

interface VideoModalProps {
  isVisible: boolean;
  onRequestClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isVisible,
  onRequestClose,
}) => {
  const videoRef = React.useRef<Video>(null);

  return (
    <Modal visible={isVisible} animationType="fade">
      <StatusBar backgroundColor="#171717" />
      <View
        style={{
          flex: 1,
          backgroundColor: "#171717",
        }}
      >
        <TouchableOpacity onPress={onRequestClose}>
          <Ionicons
            name="close"
            size={30}
            style={{
              paddingVertical: EStyleSheet.value(48),
              paddingHorizontal: EStyleSheet.value(28),
            }}
            color="white"
          />
        </TouchableOpacity>

        <View style={styles.viewVideo}>
          <Video
            ref={videoRef}
            resizeMode={ResizeMode.COVER}
            onLoad={() => videoRef.current?.playAsync()}
            source={{
              uri: "https://videokits-apps.s3-us-west-1.amazonaws.com/riza/usrHoJb5oxGmfytFgabwwyO/Video/fiAoW59l6J54or7NY3vax3kV2gGRv1Xtj.mov/HLS/fiAoW59l6J54or7NY3vax3kV2gGRv1Xtj.m3u8",
            }}
            style={styles.video}
            useNativeControls
          />
        </View>
      </View>
    </Modal>
  );
};
