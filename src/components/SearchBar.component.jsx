import React from "react";
import Box from "@mui/material/Box";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function SearchBar() {
	return (
		<Box
			sx={{
				width: "100%",
				padding: (theme) => theme.container.padding,
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				boxShadow: (theme) => theme.container.boxShadow,
				backgroundColor: "white",
				borderRadius: (theme) => theme.container.borderRadius,
				columnGap: "10px",
			}}
		>
			<Box
				component="input"
				sx={{
					flexBasis: "100%",
					fontSize: "18px",
					fontFamily: (theme) => theme.typography.fontFamily,
					border: "none",
					outline: "none",
				}}
				placeholder="Search your pokemon"
			/>

			<Box
				component="button"
				sx={{
					borderRadius: "10px",
					cursor: "pointer",
					boxShadow: "#ff535088 5px 5px 15px",
					color: "white",
					backgroundColor: "#ff5350",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "40px",
					minWidth: "40px",
					border: "none",
					fontWeight: "bold",
				}}
			>
				<SearchOutlinedIcon />
			</Box>
		</Box>
	);
}

export default SearchBar;
