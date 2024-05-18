import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { tw } from "../libs";
import { TRANSPARENT, WHITE } from "./colors";

export const ByIcon = ({ name, action = () => {}, color = WHITE, background = TRANSPARENT, twStyles = "" }) => (
	<TouchableOpacity onPress={action}>
		<Icon name={name} type="ionicon" color={color} style={tw`justify-center w-12 h-12 rounded-md bg-[${background}] ${twStyles}`} />
	</TouchableOpacity>
);
