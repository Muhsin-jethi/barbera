import React from 'react'
import { Box, Heading, Text, Flex } from '@chakra-ui/react'
import SectionHeader from './SectionHeader'
import MenuData from '../../public/data/menuData.json'
import Listings from './Listings'

const ServiceSub = () => {
  return (
     <>
          <SectionHeader text={'Services Menu'}/>

          <Flex gap="30px">
               <Box>
                    {
                         MenuData && MenuData.slice(0, 4).map((data) => (
                              <Listings data={data} />
                              ))
                    }
               </Box>

               <Box>
                    {
                         MenuData && MenuData.slice(4, 8).map((data) => (
                              <Listings data={data} />
                              ))
                         }
               </Box>
          </Flex>
          
     </>
  )
}

export default ServiceSub