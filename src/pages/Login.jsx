import React, { useState } from "react";
import { View } from "react-native";
import { ByButton, ByContainer, ByInput } from "../components";
import { DARK, LIGHT } from "../components/colors";
import { useNavigate } from "../hooks/useNavigation";
import { tw } from "../libs";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<ByContainer isRounded>
			<ByInput label="Correo electrónico" placeholder="example@mail.com" value={email} onChange={(value) => setEmail(value)} onDelete={() => setEmail("")} />
			<ByInput label="Contraseña" placeholder="********" value={password} onChange={(value) => setPassword(value)} isPassword />
			<View style={tw`mt-4 items-center`}>
				<ByButton
					textColor={DARK}
					background={LIGHT}
					text="Volver"
					textSize="sm"
					twStyles="w-1/2"
					action={() => {
						useNavigate("Splash");
					}}
				/>
			</View>
		</ByContainer>
	);
};
