import { Box, Typography } from '@mui/material'
import React from 'react'

const HeroBanner = () => {
  return (
    <Box sx={{
      position: "relative", // ✅ Gradient overlay ঠিকমতো কাজ করার জন্য
      width: "100%",
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), 
                        url(https://img.freepik.com/free-vector/half-tone-blue-abstract-background-with-text-space_1017-41428.jpg)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: '450px',
      display:'flex',
      justifyContent:'center'
    }}>
     <Typography variant='h4' textAlign={'center'} alignSelf={'center'}  color='#fff'>Research   |   Innovation   |   Execution
      </Typography>
    </Box>
  )
}

export default HeroBanner
