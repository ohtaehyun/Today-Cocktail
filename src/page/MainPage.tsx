import { Search } from "@mui/icons-material";
import { Box, Grid, IconButton, Input } from "@mui/material";
import { borderRadius } from "@mui/system";

const MainPage: React.FC = () => {
    const searchHandle = () => {
        console.log("?");
    }
    return (
        <Grid container spacing={2} justifyContent={"center"} padding={'15px'}>
            <Grid item xs={6} justifyContent={"center"}>
                <Box style={searchBarWrap}>
                    <Input disableUnderline={true} style={width}></Input>
                    <IconButton onClick={searchHandle}>
                        <Search></Search>
                    </IconButton>
                </Box>
            </Grid>
        </Grid>
    )
}

const width = {
    width: '300px'
}

const searchBarWrap = {
    minWidth: '350px',
    maxWidth: '350px',
    border: '1px solid black',
    borderRadius: '5px',
    margin: 'auto'
}

export default MainPage;