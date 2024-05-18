import { createNavigationContainerRef } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export function useNavigate(name, params) {
	if (!navigationRef.isReady()) return false;
	navigationRef.navigate(name, params);
}

export function useBack() {
	if (!navigationRef.isReady()) return false;
	navigationRef.goBack();
}

export function useURL() {
	if (!navigationRef.isReady()) return false;
	return navigationRef.getCurrentRoute();
}
