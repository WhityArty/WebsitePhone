import React from 'react';
//import Button from '@material-ui/core/Button';
//import Menu from '@material-ui/core/Menu';
//import MenuItem from '@material-ui/core/MenuItem';

export default function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Выбрать модель телефона
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Apple</MenuItem>
        <MenuItem onClick={handleClose}>INOI</MenuItem>
        <MenuItem onClick={handleClose}>Nokia</MenuItem>
        <MenuItem onClick={handleClose}>Oppo</MenuItem>
        <MenuItem onClick={handleClose}>Xiaomi</MenuItem>
        <MenuItem onClick={handleClose}>Realme</MenuItem>
        <MenuItem onClick={handleClose}>Samsung</MenuItem>
        <MenuItem onClick={handleClose}>Sony</MenuItem>
        <MenuItem onClick={handleClose}>Vivo</MenuItem>
      </Menu>
    </div>
  );
}



/*<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
  Open Menu
</Button>
<Menu
  id="simple-menu"
  anchorEl={anchorEl}
  keepMounted
  open={Boolean(anchorEl)}
  onClose={handleClose}
>
  <MenuItem onClick={handleClose}>Profile</MenuItem>
  <MenuItem onClick={handleClose}>My account</MenuItem>
  <MenuItem onClick={handleClose}>Logout</MenuItem>
</Menu>
*/