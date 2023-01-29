import React from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import SideBar from "./SideBar";



function MainPage() {
	return (
		<Grid
			container
			sx={{ height: "100vh", textAlign: "center" }}
		>
			<SideBar/>
			<Grid
				xs={12}
				sm={12}
				md={9}
				lg={10}
				xl={10}
				backgroundColor="secondary.main"
			>
				<Typography variant="h5">محتوای اصلی</Typography>
			</Grid>
		</Grid>
	);
}

export default MainPage;
