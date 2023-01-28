import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Divider, Typography, Avatar } from "@mui/material";
import { gray } from "@mui/material/colors";

import { theme } from "./../ui/theme";

//NOTE Create RTL Cache
const cacheRTL = createCache({
	key: "muirtl",
	stylisPlugins: [prefixer, rtlPlugin],
});

const MainLayout = ({ children }) => {
	return (
		<CacheProvider value={cacheRTL}>
			<ThemeProvider theme={theme}>
				<HelmetProvider>
					<Helmet>
						<title> وب سایت شخصی محمد فرنود</title>
					</Helmet>
					<Grid container sx={{height:"100vh"}}>
						<Grid xs={0} sm={0} md={3} lg={3} xl={3} sx={{backgroundColor:"primary.main"}} >
							<Typography variant="h5">سایدبار</Typography>
						</Grid>
						<Grid xs={12} sm={12} md={9} lg={9} xl={9} backgroundColor="secondary.main" >
							<Typography variant="h5">محتوای اصلی</Typography>
						</Grid>
					</Grid>
					{children}
				</HelmetProvider>
			</ThemeProvider>
		</CacheProvider>
	);
};

export default MainLayout;
