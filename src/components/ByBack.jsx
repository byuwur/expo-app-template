import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { tw } from "../libs";
import { useBack } from "../hooks/useNavigation";
import { ByIcon } from "./ByIcon";

export const ByBack = ({ text, action = () => {} }) => {
	return (
		<TouchableOpacity
			style={tw`flex flex-row`}
			onPress={() => {
				useBack();
				action();
			}}>
			<ByIcon name="chevron-back" twStyles="w-5 h-10" />
			{text && <Text style={tw`text-white self-center`}>{text}</Text>}
		</TouchableOpacity>
	);
};
