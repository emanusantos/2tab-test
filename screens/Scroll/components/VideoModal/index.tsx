import React from "react";

import { Modal, TouchableOpacity, View } from "react-native";

import { Video, ResizeMode } from "expo-av";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";

interface VideoModalProps {
  isVisible: boolean;
  onRequestClose: () => void;
}

const VIDEO_URL =
  "https://videokits-apps.s3-us-west-1.amazonaws.com/riza/usrHoJb5oxGmfytFgabwwyO/Video/fiAoW59l6J54or7NY3vax3kV2gGRv1Xtj.mov/HLS/fiAoW59l6J54or7NY3vax3kV2gGRv1Xtj.m3u8";

export const VideoModal: React.FC<VideoModalProps> = ({
  isVisible,
  onRequestClose,
}) => {
  const videoRef = React.useRef<Video>(null);

  return (
    <Modal visible={isVisible} animationType="fade">
      <StatusBar backgroundColor="#171717" />
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={onRequestClose}>
          <Ionicons
            name="close"
            size={30}
            style={styles.closeIcon}
            color="white"
          />
        </TouchableOpacity>

        <View style={styles.viewVideo}>
          <Video
            ref={videoRef}
            resizeMode={ResizeMode.COVER}
            onLoad={() => videoRef.current?.playAsync()}
            source={{
              uri: VIDEO_URL,
            }}
            style={styles.video}
            useNativeControls
          />
        </View>
      </View>
    </Modal>
  );
};
