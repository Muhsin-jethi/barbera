import { Text, Box, Flex, HStack, Link, Stack, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { BsTwitter, BsInstagram, BsFacebook, BsLinkedin } from 'react-icons/bs'
import Apple from '../public/apple.png'
import Android from '../public/android.png'
import Logo from '../public/logo.png'

const Footer = () => {
  return (
    <Box  bg='#202125' color='rgba(255, 255, 255, 0.6)'>
      <Flex flexWrap='wrap' fontSize='16px' justifyContent='space-between' textAlign='left' padding='40px 60px'>
            <Stack spacing={3} justifySelf='flex-start'>
              <Link href='/'>
                <Image src={Logo}/>
              </Link>
                <Text>B 35, Some street <br /> adderess, Mumbai</Text>
            </Stack>

            <Stack spacing={3} justifySelf='flex-start'>
                <Text>Working days / 08:00 - 20:00</Text>
                <Text>Saturday / 08:00 - 20:00</Text>
                <Text>Sunday / CLOSED</Text>
            </Stack>

            <Stack spacing={3}>
                <Link href='/terms'>Terms & Conditions</Link>
                <Link href='/policy'>Privacy Policy</Link>
                <Link href='/cookie'>Cookie Policy</Link>
            </Stack>

            <Stack>
                <Text>Download App From</Text>

                <Flex>
                  <Link>
                    <Image src={Android}/>
                  </Link>
                  <Link>
                    <Image src={Apple}/>
                  </Link>
                </Flex>
            </Stack>
      </Flex>
      
      <Flex bg='#11120F' p='10px 60px' justifyContent='space-between'>
        <Text mixBlendMode='normal' color='#fff'>© 2023 Barbera. All rights reserved. Developed by Jethi Tech Solutions </Text>

        <HStack color='#000' marginLeft='130px'>
                    <Link marginRight='0px' padding='5px' background='#fff' borderRadius='50%'>
                         <BsFacebook />
                    </Link>

                    <Link marginRight='10px' padding='5px' background='#fff' borderRadius='50%'>
                    <BsTwitter />
                    </Link>

                    <Link marginRight='40px' padding='5px' background='#fff' borderRadius='50%'>
                    <BsLinkedin />
                    </Link>

                    <Link marginRight='20px' padding='5px' background='#fff' borderRadius='50%'>
                    <BsInstagram />
                    </Link>
               </HStack>
      </Flex>
    </Box>
  )
}

export default Footer