import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TypeBox from "./TypeBox.component";

function PokemonCard() {
	const imgUrl =
		"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png";

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				boxShadow: (theme) => theme.container.boxShadow,
				border: "2px solid white",
				borderRadius: (theme) => theme.container.borderRadius,
				backgroundColor: "white",
				marginLeft: "16px",
				justifyContent: "center",
				alignItems: "center",
				width: "calc(calc(100% / 3) - 16px)",
				boxSizing: "border-box",
				padding: "15px",
				paddingTop: "40px",
				marginTop: "60px",
				position: "relative",
				cursor: "pointer",

				"&:hover": {
					border: "2px solid #e0e0e0",

					"& .pokemonImage": {
						transition: "all .1s",
						transform: "scale(1.15)",
					},
				},
			}}
		>
			<Box
				className="pokemonImage"
				component="img"
				src={imgUrl}
				alt="Pokemon"
				sx={{
					position: "absolute",
					top: "-40%",
					width: "96px",
					height: "96px",
				}}
			/>

			<Typography
				variant="subtitle1"
				component="span"
				sx={{
					fontSize: "12px",
					fontWeight: "bold",
					color: (theme) => theme.palette.text.tertiary,
				}}
			>
				N° 2
			</Typography>

			<Typography
				variant="h3"
				component="h3"
				sx={{
					color: (theme) => theme.palette.text.primary,
					fontSize: "20px",
					fontWeight: "bold",
					margin: "0 5px",
				}}
			>
				Bulbasaur
			</Typography>

			<Box sx={{ display: "flex", marginTop: "15px", columnGap: "10px" }}>
				<TypeBox typeName="normal" />
				<TypeBox typeName="fairy" />
			</Box>
		</Box>
	);
}

export default PokemonCard;
