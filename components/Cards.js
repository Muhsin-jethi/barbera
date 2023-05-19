import React from 'react'
import Image from 'next/image'
import { Card, CardBody, CardFooter, Stack, Heading, Text, Button } from '@chakra-ui/react'
import ServiceIcon from '../public/Group.png'

const Cards = ({data: {title, body}}) => {
  return (
     <Card textAlign='center' maxW='sm' bg='#202125' color="#fff">
     <CardBody>
       <Stack mt='6' spacing='3'>
        <Image style={{margin: '0 auto'}} src={ServiceIcon} />
         <Heading size='md'>{title}</Heading>
         <Text color="#9A9A9A">
           {body}
         </Text>
       </Stack>
     </CardBody>

     <CardFooter>

     </CardFooter>
   </Card>
  )
}

export default Cards