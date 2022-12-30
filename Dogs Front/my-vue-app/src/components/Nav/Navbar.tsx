import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import PetsIcon from '@mui/icons-material/Pets';
import Chip from '@mui/material/Chip';
import { emphasize} from '@mui/material/styles';
import LoginIcon from '@mui/icons-material/Login';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import Login from './LoginForm/Login';
import NavMenuUser from './navUserMenu/NavMenuUser';
import { useAppSelector } from '../../hooks/toolkitHooks';
import { useLocation } from 'react-router-dom';
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}) as typeof Chip
const drawerWidth = 240;
const navItems = [{name : 'Login' , component : <LoginIcon/> }, {name: 'Contact' , component: <PermContactCalendarIcon/>}];

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
const Navbar = (props: Props) => {
  const activeUser = useAppSelector(state => state.user.active)
  const [openOut, setOpenOut] = React.useState(false);
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
     const location = useLocation()
    
    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };
   
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ my: 2 }} >
            DOGS
          </Typography>
          <Divider />
          <List>
            {navItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                {item.component}
                <ListItemButton sx={{ textAlign: 'center' }}>
                  
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );
      const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <>
     {openOut && <Login openOut={openOut} setOpenOut={setOpenOut}/>}
   
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <AppBar component="nav" >
      <Toolbar >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <PetsIcon/>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          
        >
          DOGS
        </Typography>

        { location.pathname === '/home' && 
          <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        }
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        
             
           
            {localStorage.getItem('user') ? <NavMenuUser/> : 
            <Button  sx={{ color: '#fff' }} onClick={() => setOpenOut(!openOut)}> <LoginIcon/>{`Login`}</Button> }
        
        </Box>
      </Toolbar>
    </AppBar>
    <Box component="nav">
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      
    </Box>
    <Toolbar />
    </Box>
    </>
  )
}

export default Navbar