import React from "react"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { Link } from 'react-router-dom';

class NavButtons extends React.Component {
  render() {
    return(
      <List>
        <ListItem button component={Link} to={'/events'}>
          <ListItemIcon>
            <CalendarTodayIcon />
          </ListItemIcon>
          <ListItemText primary={"Events"} />
        </ListItem>
      </List>
    );
  }
}

export default NavButtons
