

import { Box, Flex, Button, Text, Img } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import Img01 from '../public/image01.png'

const About = () => {
  return (
    <Flex width='100%' bg='#202125' p='0 60px' height='485px' alignItems='center' justifyContent='flex-start'>
          <Box marginRight='100px'>
               <Image style={{objectFit: 'cover'}} src={Img01} />
          </Box>
          <Box width='410px'>
               <Text color='#FBB034'>About Us</Text>
               <Text m='24px 0' color='#9A9A9A'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
               <Button bg='#FBB034'>Learn More</Button>
          </Box>
    </Flex>
  )
}

export default About