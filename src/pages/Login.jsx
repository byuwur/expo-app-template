import React from "react";
import { useNavigate } from "../hooks/useNavigation";
import { ByButton, ByContainer, ByInput, ByPassword } from "../components";
import { DARK } from "../components/colors";

export const Login = () => {
	return (
		<ByContainer>
			<ByInput label="Test" />
			<ByPassword label="Testing" />
			<ByButton
				textColor={DARK}
				text="Go to Splash"
				textSize="sm"
				action={() => {
					useNavigate("Splash");
				}}
			/>
		</ByContainer>
	);
};
