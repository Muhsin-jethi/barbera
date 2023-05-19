import { Button, Flex, Heading, Text, Box } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import HeroImg from '../public/image 2.png'
const HeroBanner = () => {
  return (
    <Flex height='90vh' justifyContent='space-between' alignItems='center'>
          <Box color='#fff' paddingLeft='60px'>
               <Text mb='10px' fontSize='16px' color='#FBB034'>Welcome To Barbera</Text>
               <Heading lineHeight='46px' fontSize='48px'>We Will Give You An Impeccable Look</Heading>
               <Text m='10px 0' lineHeight='22px' fontSize='21px' color='#9A9A9A'>You will leave lookin sharp, relaxed and ready to take on the world, with that swagger in your stride.</Text>
               <Button mt='20px' fontSize='15px' bg='#FBB034'>Book An Appointment</Button>
          </Box>

          <Box height='100%' position='relative' width='1000px' backgroundImage="url(`${HeroImg}`)">
               <Image style={{position: 'absolute', bottom: '0', right: '0'}} src={HeroImg}/>
          </Box>
    </Flex>
  )
}

export default HeroBanner