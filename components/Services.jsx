import { Card, Flex, Heading, Box, Text } from '@chakra-ui/react'
import React from 'react'
import Cards from './Cards'
import SectionHeader from './subs/SectionHeader'

const Services = ({data}) => {
  return (
     <>
          <SectionHeader text={'Popular Services'} />
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