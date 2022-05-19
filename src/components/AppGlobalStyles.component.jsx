import React from "react";
import GlobalStyles from "@mui/material/GlobalStyles";

import PokeballIcon from "./../assets/images/pokeball-icon.png";
const styles = {
	body: {
		minHeight: "100vh",
		backgroundImage: `url('${PokeballIcon}')`,
		backgroundRepeat: "no-repeat",
		backgroundPositionX: "-180px",
		backgroundPositionY: "-80px",
		backgroundColor: "#F6F8FC",
		backgroundAttachment: "fixed",
	},
};

function AppGlobalStyles() {
	return <GlobalStyles styles={styles} />;
}

export default AppGlobalStyles;
