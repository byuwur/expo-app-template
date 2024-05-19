import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { tw } from "../libs";
import { TRANSPARENT, WHITE } from "./colors";

export const ByIcon = ({ name, action = () => {}, color = WHITE, background = TRANSPARENT, twStyles = "" }) => (
	<TouchableOpacity onPress={action} style={tw``}>
		<Icon name={name} type="ionicon" color={color} style={tw`justify-center items-center rounded-lg bg-[${background}] ${twStyles}`} />
	</TouchableOpacity>
);
