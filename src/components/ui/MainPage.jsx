import { Box, Divider, Typography, Avatar } from "@mui/material";
import { gray } from "@mui/material/colors";
import Grid from "@mui/material/Unstable_Grid2";

import React from "react";

function MainPage() {
	return (
		
			<Grid container sx={{ height: "100vh", textAlign: "center" }}>
				<Grid
					xs={0}
					sm={0}
					md={3}
					lg={2}
					xl={2}
					sx={{ backgroundColor: "primary.main" }}
				>
					<Typography variant="h5">سایدبار</Typography>
				</Grid>
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
