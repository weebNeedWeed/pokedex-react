import React from "react";
import Box from "@mui/material/Box";

import SearchBar from "./SearchBar.component";
import InformationBox from "./InformationBox.component";

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
				<InformationBox />
			</Box>
		</Box>
	);
}

export default App;
