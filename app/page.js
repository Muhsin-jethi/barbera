"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Img1 from '../public/image 2.png'
import { Stack, Box } from '@chakra-ui/react'
import HeroBanner from '@/components/HeroBanner'
import About from '@/components/About'

export default function Home() {
  return (
    <Box className={styles.main}>
      <HeroBanner />
      <About />
    </Box>
  )
}
