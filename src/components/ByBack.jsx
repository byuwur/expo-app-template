import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useBack } from "../hooks/useNavigation";
import { tw } from "../libs";
import { ByIcon } from "./ByIcon";
import { WHITE } from "./colors";
import { BACK_ICON_HEIGHT, BACK_ICON_WIDTH } from "./values";

export const ByBack = ({ text, color = WHITE, action = () => {} }) => {
	return (
		<TouchableOpacity
			style={tw`flex flex-row`}
			onPress={() => {
				useBack();
				action();
			}}>
			<ByIcon name="chevron-back" color={color} twStyles={`w-${BACK_ICON_WIDTH} h-${BACK_ICON_HEIGHT}`} />
			{text && <Text style={tw`text-[${color}] self-center`}>{text}</Text>}
		</TouchableOpacity>
	);
};
