import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { tw } from "../libs";
import { GRAY, WHITE } from "./colors";
import { ByIcon } from "./ByIcon";

export const ByButton = ({ twStyles, background = WHITE, disabled = false, action, text, textSize = "lg", textColor, imageSource, imageStyle, iconRight = false, iconName, iconColor = WHITE, iconBackground = WHITE, iconAction }) => {
	const ThisButtonIcon = () => <ByIcon action={iconAction ?? action} background={iconBackground} color={iconColor} name={iconName} />;
	return (
		<View style={tw`border-2 border-[#0001] w-full rounded-xl my-1 p-2 bg-[${background}] ${twStyles}`}>
			<TouchableOpacity style={tw`flex flex-row`} onPress={action} disabled={disabled}>
				{iconName && !iconRight && <ThisButtonIcon />}
				{imageSource && (
					<Image
						source={imageSource}
						style={{
							width: 50,
							height: 50,
							resizeMode: "contain",
							...imageStyle
						}}
					/>
				)}
				<Text style={tw`flex-1 text-[${disabled ? GRAY : textColor ?? iconBackground}] text-center self-center text-${textSize} font-bold`}>{text}</Text>
				{iconName && iconRight && <ThisButtonIcon />}
			</TouchableOpacity>
		</View>
	);
};
