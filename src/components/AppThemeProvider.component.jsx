import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
	typeColors: {
		normal: "#BCBCAC",
		fighting: "#BC5442",
		flying: "#669AFF",
		poison: "#AB549A",
		ground: "#DEBC54",
		rock: "#BCAC66",
		bug: "#ABBC1C",
		ghost: "#6666BC",
		steel: "#ABACBC",
		fire: "#FF421C",
		water: "#2F9AFF",
		grass: "#78CD54",
		electric: "#FFCD30",
		psychic: "#FF549A",
		ice: "#78DEFF",
		dragon: "#7866EF",
		dark: "#785442",
		fairy: "#FFACFF",
		shadow: "#0E2E4C",
	},
});

function AppThemeProvider({ children }) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default AppThemeProvider;
