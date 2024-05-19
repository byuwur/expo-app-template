import React, { useState } from "react";
import { ByButton, ByContainer, ByInput } from "../components";
import { DARK } from "../components/colors";
import { useNavigate } from "../hooks/useNavigation";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<ByContainer>
			<ByInput label="Correo electrónico" placeholder="example@mail.com" value={email} onChange={(value) => setEmail(value)} onDelete={() => setEmail("")} />
			<ByInput label="Contraseña" placeholder="********" value={password} onChange={(value) => setPassword(value)} isPassword />
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
