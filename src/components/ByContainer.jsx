import React from "react";
import { ImageBackground, View } from "react-native";
import { tw } from "../libs";

export const ByContainer = ({ children, imgBgSrc, background = "#EEE", twStyles = "" }) => {
	return imgBgSrc ? (
		<ImageBackground source={imgBgSrc} style={tw`flex-1 m-0 py-2 px-4`}>
			{children}
		</ImageBackground>
	) : (
		<View style={tw`flex-1 m-0 py-2 px-4 bg-[${background}] ${twStyles}`}>{children}</View>
	);
};
