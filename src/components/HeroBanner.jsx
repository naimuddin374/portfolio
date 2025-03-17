import { Box, Typography } from '@mui/material'
import React from 'react'

const HeroBanner = () => {
  return (
    <Box sx={{
      backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20240911/pngtree-img-item-white-background-2023-jpg-isolated-wallpaper-texture-photo-image_16153995.jpg)',
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat', 
      width: '100%', 
      // height: '400px',
    }}>
     <Typography variant='h4' textAlign={'center'} py={16} color='#fff'>Research   |   Innovation   |   Execution
      </Typography>
    </Box>
  )
}

export default HeroBanner
