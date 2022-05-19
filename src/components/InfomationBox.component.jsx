import React from "react";
import Box from "@mui/material/Box";

import noPokemonSelectedImage from "./../assets/images/no-pokemon-selected-image.png";

function InfomationBox() {
	return (
		<Box
			sx={{
				position: "fixed",
				height: "82vh",
				bottom: "0",
				borderRadius: (theme) => theme.container.borderRadius,
				borderBottomLeftRadius: "0",
				borderBottomRightRadius: "0",
				backgroundColor: "white",
				width: "350px",
				boxShadow: (theme) => theme.container.boxShadow,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Box
				component="img"
				src={noPokemonSelectedImage}
				alt="No pokemon selected"
				sx={{
					position: "absolute",
					bottom: "77vh",
					margin: "0 auto",
					right: "0",
					left: "0",
					maxHeight: "22vh",
				}}
			/>

			<Box
				component="span"
				sx={{
					fontSize: "18px",
					textAlign: "center",
					color: (theme) => theme.palette.text.tertiary,
				}}
			>
				Select pokemon
				<br />
				to display here.
			</Box>
		</Box>
	);
}

export default InfomationBox;
