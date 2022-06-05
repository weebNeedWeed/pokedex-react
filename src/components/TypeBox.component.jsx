import React from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

function TypeBox({ typeName }) {
	return (
		<Box
			sx={{
				backgroundColor: (theme) => theme.typeColors[typeName.toLowerCase()],
				height: "24px",
				padding: "3px 7px",
				textTransform: "capitalize",
				fontSize: "14px",
				fontWeight: "600",
				borderRadius: "5px",
			}}
		>
			{typeName}
		</Box>
	);
}

TypeBox.propTypes = {
	typeName: PropTypes.string,
};

export default TypeBox;
