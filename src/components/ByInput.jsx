import React, { forwardRef, useState } from "react";
import { Input } from "react-native-elements";
import { tw } from "../libs";
import { ByIcon } from "./ByIcon";
import { BLACK, LIGHT } from "./colors";
import { INPUT_MARGIN_TOP, INPUT_PADDING } from "./values";

export const ByInput = forwardRef(({ placeholder, label = "", twStyles = "", textColor = BLACK, isPassword = false, value = "", onDelete = () => {}, ...props }, ref) => {
	const [showPassword, setShowPassword] = useState(false);
	const InputIcon = () => {
		if (isPassword) return <ByIcon name={showPassword ? "eye" : "eye-off"} color={BLACK} action={() => setShowPassword((prev) => !prev)} />;
		if (value != "") return <ByIcon name="backspace-outline" color={BLACK} action={onDelete} />;
		return <></>;
	};
	return (
		<Input
			ref={ref}
			secureTextEntry={!showPassword}
			value={value}
			accessibilityLabel={label}
			accessibilityHint={label}
			style={tw`text-[${textColor}]`}
			inputContainerStyle={tw`border-0 border-[${LIGHT}33] bg-[${LIGHT}33] rounded-xl mt-${INPUT_MARGIN_TOP} pl-${INPUT_PADDING} pr-${INPUT_PADDING * 3} ${twStyles}`}
			label={label}
			labelStyle={tw`text-[${textColor}] font-normal m-0`}
			placeholder={placeholder ?? label}
			placeholderTextColor={`${textColor}77`}
			errorStyle={tw`text-red-600 mx-0 my-1`}
			rightIcon={<InputIcon />}
			rightIconContainerStyle={{ position: "absolute", right: 10 }}
			{...props}
		/>
	);
});
