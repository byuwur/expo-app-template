import { registerRootComponent } from "expo";
import React, { StrictMode } from "react";
import { useDeviceContext } from "twrnc";
import { Providers } from "./src/contexts";
import { Routes } from "./src/routes";
import { tw } from "./src/libs/";

export const APP_ENV = "DEV"; // DEV, QA, PROD...

const App = () =>
	APP_ENV === "DEV" ? (
		<StrictMode>
			<Providers>
				<Routes />
			</Providers>
		</StrictMode>
	) : (
		<Providers>
			<Routes />
		</Providers>
	);

const Main = () => {
	console.log("APP_ENV=", APP_ENV);
	useDeviceContext(tw);
	return <App />;
};

registerRootComponent(Main);
