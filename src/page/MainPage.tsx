import { Box, Button, Icon, IconButton, TextField } from "@mui/material";

const MainPage: React.FC = () => {

    return (
        <Box style={wrap}>
            <Box>
                <TextField></TextField>
                <IconButton></IconButton>
            </Box>
        </Box>
    );
}

const wrap = {
  width: '100%',
  height: '100%'
}

export default MainPage;