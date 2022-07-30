import { Container, Box, Heading, Image, useColorModeValue } from '@chakra-ui/react';
import Layout from '../components/layouts/article'
import Section from '../components/section.js'
import Paragraph from '../components/Paragraph.js'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Layout>
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.200', 'blue.500')} p={3} mb={6} align="center">
      Yo, I am Kamal Raj V.N. I am a developer, hacker, ui/ux designer.
      </Box>

      <Box display={{md:'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Kamal Raj V.N
          </Heading>
        </Box>
        <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center">
          <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/profile.jpg" alt="Pfp" />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>I am a Full-Stack Developer / UI/UX Designer / Artist</Paragraph>
      </Section>

    <Section mb={50}>
      <Heading as="h2" variant="section-title">
        Biography
      </Heading>
      <BioSection>
      <BioYear>16/3/2021</BioYear>Started Learning Javascript
      </BioSection>
    <BioSection><BioYear>24/6/2021</BioYear>Made a discord bot</BioSection>
    <BioSection><BioYear>12/8/2021</BioYear>Started learning designing</BioSection>
    <BioSection><BioYear>4/12/2021</BioYear>Completed Javascript and started learning python</BioSection>
    <BioSection><BioYear>10/1/2022</BioYear>Started learning html, css and js frameworks of to website</BioSection>
    <BioSection><BioYear>21/2/2022</BioYear>Started Learning Java</BioSection>
    </Section>
    <p>&copy; Copyright {year} - Kamal Raj V.N. All rights reserved.{" "}</p>
    </Container>
    </Layout>
  )
}

export default Page
