import { Box, Divider, Typography, Avatar, Hidden } from "@mui/material";

import Grid from "@mui/material/Unstable_Grid2";
import { grey } from "@mui/material/colors";

function SideBar() {
	return (
		<>
			<Grid
				xs={0}
				sm={0}
				md={3}
				lg={2}
				xl={2}
				sx={{ backgroundColor: grey[900] }}
			>
				<Box sx={{ textAlign: "center", mt: 2, justifyContent: "center" }}>
					<Hidden mdDown>
						<Avatar
							alt="my photo"
							sx={{
								height: 200,
								width: 200,
								margin: "0 auto",
								border: "2px solid grey",
								mb: 1,
							}}
							src={require("../../helpers/images/profile.jpg")}
						/>
					</Hidden>

					<Typography color="whitesmoke" sx={{ mb: 1 }} variant="h5">
						 Mohammad Farnoud
					</Typography>
					<Typography color="whitesmoke" variant="caption">
						برنامه نویس و توسعه دهنده وب
					</Typography>
					<Divider variant="middle" color={grey[600]} sx={{ mt: 2 }} />
				</Box>
			</Grid>
		</>
	);
}

export default SideBar;
