import { Flex, Box, Text, Stack, Link } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'
import Logo from '../public/logo.png'

const Navbar = () => {
  return (
    <Box>
          <Flex justifyContent='flex-end' p='10px 60px' bg='#FBB034'>
               <Text>Opening Hour :  Sunday - Friday , 08:00 am - 10:00 pm</Text>
               <Stack>icons</Stack>
          </Flex>
          <Flex justifyContent='space-between' bg='#11120F' p='10px 60px'>
               <Box boxSize='50px'>
                    <Image src={Logo} />
               </Box>
               <Box>
                    {
                         ['Home', 'About Us', 'services', 'Contact', 'Get the App'].map((link, index) => (
                              <Link key={index} color='#fff' marginRight='20px'>{link}</Link>
                         ))
                    }
               </Box>
          </Flex>
    </Box>
  )
}

export default Navbar