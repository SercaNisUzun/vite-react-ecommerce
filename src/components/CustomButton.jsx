import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const CustomButton = ({ label, menuItems = [], onClick, color = 'success' }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);


    const handleClick = (event) => {
        if (open) {
            setAnchorEl(null);
        } else {
            setAnchorEl(event.currentTarget);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            {/* Buton */}
            <Button
                variant="contained"
                color={color}
                aria-controls={open ? 'menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {label}
            </Button>

            {/* Menü */}
            <Menu
                id="menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'menu-button',
                }}
            >
                {menuItems.map((item, index) => (
                    <MenuItem key={index} onClick={() => { item.onClick(); handleClose(); }}>
                        {item.label}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};

export default CustomButton;
