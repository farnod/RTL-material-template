import {
	Box,
	Divider,
	Typography,
	Avatar,
	Hidden,
	Tabs,
	Tab,
} from "@mui/material";

import Grid from "@mui/material/Unstable_Grid2";
import { grey } from "@mui/material/colors";
import {
	HomeRounded,
	TextSnippetRounded,
	PhoneEnabledRounded,
	Terminal,
	AccountCircleRounded,
	MessageRounded,
} from "@mui/icons-material";

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
				<Box >
				{/* sx={{textAlign:"center"  mt: 2, justifyContent: "center"}} */}
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
					<Tabs
						orientation="vertical"
						variant="scrollable"
						ScrollButton="auto"
						allowScrollButtonsMobile
						
					>
						<Tab
							label="صفحه اصلی"
							icon={<HomeRounded  sx={{paddingLeft:6}}/>}
							iconPosition="start"
							sx={{display:"flex", justifyContent:"flex-start", }}
							
						/>
						<Tab
							label="درباره من"
							icon={<AccountCircleRounded sx={{paddingLeft:6}} />}
							iconPosition="start"
							sx={{display:"flex", justifyContent:"flex-start"}}
							
						/>
						<Tab
							label="رزومه من"
							icon={<TextSnippetRounded sx={{paddingLeft:6}} />}
							iconPosition="start"
							sx={{display:"flex", justifyContent:"flex-start"}}
							
						/>
						<Tab label="نمونه کارها" 
							icon={<Terminal sx={{paddingLeft:6}} />} 
							iconPosition="start" 
							sx={{display:"flex", justifyContent:"flex-start"}}
							
							/>
						<Tab
							label="نظرات دانشجویان"
							icon={<MessageRounded sx={{paddingLeft:6}} />}
							iconPosition="start"
							sx={{display:"flex", justifyContent:"flex-start"}}
							
						/>
						<Tab
							label="ارتباط با من"
							icon={<PhoneEnabledRounded sx={{paddingLeft:6}} />}
							iconPosition="start"
							sx={{display:"flex", justifyContent:"flex-start"}}
							
						/>
					</Tabs>
					<Divider variant="middle" color={grey[600]} sx={{ mt: 2 }} />
					<Box></Box>
				</Box>
			</Grid>
		</>
	);
}

export default SideBar;
