import { Flex, Box, Text, HStack, Link } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'
import Logo from '../public/logo.png'
import {BsFacebook, BsTwitter, BsLinkedin, BsInstagram} from 'react-icons/bs'


const Navbar = () => {
  return (
    <Box>
          <Flex justifyContent='flex-end' p='10px 60px' bg='#FBB034'>
               <Text>Opening Hour :  Sunday - Friday , 08:00 am - 10:00 pm</Text>
               
               <HStack color='#FBB034' marginLeft='130px'>
                    <Link marginRight='0px' padding='5px' background='#202125' borderRadius='50%'>
                         <BsFacebook />
                    </Link>

                    <Link marginRight='10px' padding='5px' background='#202125' borderRadius='50%'>
                    <BsTwitter />
                    </Link>

                    <Link marginRight='40px' padding='5px' background='#202125' borderRadius='50%'>
                    <BsLinkedin />
                    </Link>

                    <Link marginRight='20px' padding='5px' background='#202125' borderRadius='50%'>
                    <BsInstagram />
                    </Link>
               </HStack>
          </Flex>
          <Flex justifyContent='space-between' bg='#11120F' p='10px 60px'>
               <Box boxSize='50px'>
                    <Image src={Logo} />
               </Box>
               <Box>
                    {
                         ['Home', 'About Us', 'services', 'Contact', 'Get the App'].map((link, index) => (
                              <Link _hover={{color: '#FBB034', transition: 'all .3s ease'}} key={index} color='#fff' marginRight='20px'>{link}</Link>
                         ))
                    }
               </Box>
          </Flex>
    </Box>
  )
}

export default Navbar