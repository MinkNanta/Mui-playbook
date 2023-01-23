import { Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React from 'react';
import { Outlet } from 'react-router-dom';
import SideMenu from '../components/SideMenu';

export default function OutletMenu() {
  return (
    <Box sx={{ display: 'flex' }}>
      <SideMenu />
      <Box sx={{ pt: 6, px: 6, overflow: 'hidden', width: '100%', pb: 20 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
