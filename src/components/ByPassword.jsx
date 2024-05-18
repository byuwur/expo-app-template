import React, { forwardRef, useState } from "react";
import { Icon, Input } from "react-native-elements";
import { tw } from "../libs";
import { BLACK } from "./colors";

export const ByPassword = forwardRef((props, ref) => {
	const [showPassword, setShowPassword] = useState(true);
	return (
		<Input
			ref={ref}
			secureTextEntry={showPassword}
			placeholder={props.label}
			label=""
			accessibilityLabel={props.label}
			accessibilityHint={props.label}
			labelStyle={{ color: BLACK }}
			style={tw`text-[${BLACK}]`}
			inputContainerStyle={tw`border-[${BLACK}]`}
			placeholderTextColor={BLACK}
			errorStyle={tw`text-[${BLACK}]`}
			rightIcon={<Icon name={showPassword ? "eye" : "eye-off"} color={BLACK} type="ionicon" onPress={() => setShowPassword((prev) => !prev)} />}
			rightIconContainerStyle={{ position: "absolute", right: 0 }}
			{...props}
		/>
	);
});
