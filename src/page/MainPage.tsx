import { Search } from "@mui/icons-material";
import { Box, Button, Grid, Icon, IconButton, Input, makeStyles, TextField } from "@mui/material";
import { padding } from "@mui/system";


const MainPage: React.FC = () => {
    return (
        <Grid container spacing={2} justifyContent={"center"}>
            <Grid item xs={6}>
                <Input></Input>
                <IconButton>
                    <Search></Search>
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default MainPage;