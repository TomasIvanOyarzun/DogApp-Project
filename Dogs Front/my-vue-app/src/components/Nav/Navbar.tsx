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
import { useAppDispatch, useAppSelector } from '../../hooks/toolkitHooks';
import { useLocation, useNavigate } from 'react-router-dom';

import logo from '../../images/logo.png'
import { Container } from '@mui/system';
import { userActive } from '../../feactures/user/UserSlice';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

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
  const dispatch = useAppDispatch()

    const [mobileOpen, setMobileOpen] = React.useState(false);
     const location = useLocation()
     const navigate = useNavigate()
    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };
    const [y, setY] = React.useState(window.scrollY);

    const handleNavigation = React.useCallback(
      (e : any) => {
        const window = e.currentTarget;
    
        setY(window.scrollY);
      }, [y]
    );
    
    React.useEffect(() => {
      setY(window.scrollY);
      
      window.addEventListener("scroll", handleNavigation);
    
      return () => {
        window.removeEventListener("scroll", handleNavigation);
      };
    }, [handleNavigation]);

    const handleOnClicks = () => {
      localStorage.removeItem('user')
      dispatch(userActive(false))
  }
    const absolute =  location.pathname === '/' ? 'absolute' : ''
    const bgColor =  location.pathname === '/' && y < 100 ? 'transparent' : '#fff'
   
    const shadow =   location.pathname === '/' ? '0' : '1'

    const navItems = [{ component : <Button onClick={handleOnClicks}><LoginIcon fontSize='large'  />{`Logout`}</Button> }, {name: 'Contact' , component: <Button>< PermContactCalendarIcon fontSize='large'/>{`Contact`}</Button>}, {component :<Button onClick={() => navigate('/home')}>< PetsIcon fontSize='large'/>{`Dogs`}</Button> }, {component : <Button><FavoriteBorderIcon fontSize='large'/>{`Favorites`}</Button>}];
    const navItemsLogin = [{ component :    <Button  sx={{ color: '#fff' }} onClick={() => setOpenOut(!openOut)}> <LoginIcon fontSize='large'/>{`Login`}</Button> }, {name: 'Contact' , component: <Button>< PermContactCalendarIcon fontSize='large'/>{`Contact`}</Button>}, {component :<Button onClick={() => navigate('/home')}>< PetsIcon fontSize='large'/>{`Dogs`}</Button>}] 
    const navItemsTrue = activeUser  || localStorage.getItem('user') ?  navItems :  navItemsLogin 
  
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor:'greenyellow' }}>
           <img src={logo} width='120px'/>
          <Divider />
          <List>
            {navItemsTrue.map((item, index) => (
              <ListItem key={index} disablePadding sx={{ display: 'flex', justifyContent: 'center' }} >
              
                <Box width='100%'>{item.component}</Box>
               
              </ListItem>
            ))}
          </List>
        </Box>
      );
      const handleOnClick = () => {
        localStorage.removeItem('user')
        dispatch(userActive(false))
    }

  return (
    <>
     {openOut && <Login openOut={openOut} setOpenOut={setOpenOut}/>}
   
    <Box  sx={{ display: 'flex', position : absolute}}>
    <CssBaseline />
    <AppBar component="nav" sx={{ color: '#555555',  backgroundColor: bgColor, boxShadow : shadow, transition : '0.6s ease'}} >
      <Container>
      <Toolbar  sx={{ display: 'flex', justifyContent: 'space-between'}}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        
       <img src={logo} width='100px'/>
       
        

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
        
             
           
            {activeUser  || localStorage.getItem('user') ? <NavMenuUser/> : 
            <Button  sx={{ color: '#111' }} onClick={() => setOpenOut(!openOut)}> <LoginIcon/>{`Login`}</Button> }
        
        </Box>
      </Toolbar>
      </Container>
    </AppBar>
    <Box component="nav">
      <Drawer
       
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