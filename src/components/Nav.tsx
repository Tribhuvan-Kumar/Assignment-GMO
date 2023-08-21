import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';

import '../styles/nav.css';



function Nav() {
  const handleLogout = () => {
    localStorage.removeItem("User");
    console.log('Logged out');
    window.location.href="/";
};

  return (
    <div>
      <AppBar position="static">
        <Toolbar className='tool-bar'>
          <Button color="inherit" startIcon={<LogoutIcon />} onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;