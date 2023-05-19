import { Card, Flex, Heading, Box, Text } from '@chakra-ui/react'
import React from 'react'
import Cards from './Cards'

const Services = ({data}) => {
  return (
     <>
     <Box color="#fff" margin='60px 0'>
          <Heading>Popular <span style={{color: '#FBB034'}}>Services</span></Heading>
          <Text mt='10px' color='#9A9A9A'>Lorem Ipsum is simply dummy text of <br /> the printing and typesetting industry.</Text>
     </Box>
    <Flex flexWrap='wrap' justifyContent='center' alignItems='center' gap='20px'>
          {
               data.map((data, index) => (
                    <Cards data={data} key={index}/>
               ))
          }
    </Flex>
</>
  )
}

export default Services