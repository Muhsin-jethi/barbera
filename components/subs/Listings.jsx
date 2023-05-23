import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Listings = ({data: {id, title, price}}) => {
     const stringLength = 35 - title.length
  return (
    <Box m='25px 0'>
          <Box display="flex">
               <Heading fontSize='25px' color ='#fff'>{title}{'..'.repeat(stringLength)}<span style={{color: "#FBB033"}}>{price}</span></Heading>
          </Box>
          <Flex>
               <Text color ="#9A9A9A">
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               </Text>
          </Flex>
    </Box>
  )
}

export default Listings