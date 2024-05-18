import React, { forwardRef } from "react";
import { Input } from "react-native-elements";
import { tw } from "../libs";
import { BLACK } from "./colors";

export const ByInput = forwardRef((props, ref) => {
	return (
		<Input
			ref={ref}
			secureTextEntry={false}
			placeholder={props.label}
			label=""
			accessibilityLabel={props.label}
			accessibilityHint={props.label}
			labelStyle={{ color: BLACK }}
			style={tw`text-[${BLACK}]`}
			inputContainerStyle={tw`border-[${BLACK}]`}
			placeholderTextColor={BLACK}
			errorStyle={tw`text-[${BLACK}]`}
			rightIconContainerStyle={{ position: "absolute", right: 0 }}
			{...props}
		/>
	);
});
