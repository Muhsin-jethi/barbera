import React from 'react'
import { Text, Box, Heading } from '@chakra-ui/react'

const SectionHeader = ({text}) => {
  return (
     <Box color="#fff" margin='60px 0'>
          <Heading>{text.split(' ')[0]} <span style={{color: '#FBB034'}}>{text.split(' ')[1]}</span></Heading>
          <Text mt='10px' color='#9A9A9A' textAlign='center'>Lorem Ipsum is simply dummy text of <br /> the printing and typesetting industry.</Text>
     </Box>
  )
}

export default SectionHeader