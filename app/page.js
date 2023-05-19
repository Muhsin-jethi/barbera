"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Img1 from '../public/image 2.png'
import { Stack, Box } from '@chakra-ui/react'
import HeroBanner from '@/components/HeroBanner'
import About from '@/components/About'
import Services from '@/components/Services'

export default function Home() {

  const services = [
    {
      title: 'Hair Styling',
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
    },
    {
      title: 'Beard Trim',
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy "
    },
    {
      title: 'Hair Color',
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy "
    },
    {
      title: 'Cleaning Facial',
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy "
    },
    {
      title: 'Body Massage',
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy "
    },
    {
      title: 'Stylish Shave',
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy "
    }
  ]
  return (
    <Box className={styles.main}>
      <HeroBanner />
      <About />
      <Services data={services}/>
    </Box>
  )
}
