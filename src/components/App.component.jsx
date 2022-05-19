import React from "react";
import Box from "@mui/material/Box";

import SearchBar from "./SearchBar.component";
import InfomationBox from "./InfomationBox.component";

function App() {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "space-between",
				columnGap: "20px",
				padding: "0 10vw",
			}}
		>
			<Box sx={{ flexBasis: "100%" }}>
				<Box sx={{ margin: "30px 10px" }}>
					<SearchBar />
				</Box>
			</Box>
			<Box sx={{ minWidth: "350px" }}>
				<InfomationBox />
			</Box>
		</Box>
	);
}

export default App;
