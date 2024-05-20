import React from "react";
import { ImageBackground, ScrollView, View } from "react-native";
import { tw } from "../libs";
import { IMG_TRANSPARENT } from "../resources";
import { LIGHT, TRANSPARENT, WHITE } from "./colors";
import { CONTAINER_PADDING } from "./values";

export const ByContainer = ({ children, bgImg, bgColor = WHITE, isRounded = false, twStyles = "" }) => {
	const Children = () => <ScrollView style={tw`flex-1 bg-[${TRANSPARENT}]`}>{children}</ScrollView>;
	const Container = () =>
		bgImg ? (
			<ImageBackground source={bgImg} defaultSource={IMG_TRANSPARENT} style={tw`flex-1 m-0 p-${CONTAINER_PADDING} ${twStyles}`}>
				<Children />
			</ImageBackground>
		) : (
			<View style={tw`flex-1 m-0 p-${CONTAINER_PADDING} bg-[${bgColor}] ${isRounded ? `rounded-t-${CONTAINER_PADDING * 2}` : ""} ${twStyles}`}>
				<Children />
			</View>
		);
	return (
		<View style={tw`flex-1 bg-[${isRounded ? LIGHT : TRANSPARENT}]`}>
			<Container />
		</View>
	);
};
