import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PeopleIcon from '@mui/icons-material/People';
import Divider from '@mui/material/Divider';

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{ width: 80, flexShrink: 0,  }}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
