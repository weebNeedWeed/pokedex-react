import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline } from "@mui/material";

import App from "./components/App.component";
import AppGlobalStyles from "./components/AppGlobalStyles.component";
import AppStoreProvider from "./components/AppStoreProvider.component";
import AppThemeProvider from "./components/AppThemeProvider.component";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<AppStoreProvider>
			<AppThemeProvider>
				<CssBaseline />
				<AppGlobalStyles />
				<App />
			</AppThemeProvider>
		</AppStoreProvider>
	</React.StrictMode>,
);
