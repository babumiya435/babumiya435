import {AppBar, Toolbar, Typography} from '@material-ui/core';

function Header() {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography>REACT IS NOT A JS FRAMEWORK IT IS JS LIBRARY ONLY</Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;