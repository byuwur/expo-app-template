import React from "react";
import { useNavigate } from "../hooks/useNavigation";
import { ByButton, ByContainer } from "../components";
import { DARK } from "../components/colors";

export const Splash = () => {
	return (
		<ByContainer>
			<ByButton
				textColor={DARK}
				text="Go to Login"
				textSize="sm"
				action={() => {
					useNavigate("Login");
				}}
			/>
		</ByContainer>
	);
};
