import { Container, Heading, SimpleGrid, Divider, useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item.js'
import thumbBlueBeatz from '../public/images/bluebeatz.png'
import thumbBioLink from '../public/images/profile.jpg'
import Layout from '../components/layouts/article.js'

const Portfolio = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Layout>
    <Container
    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
    pr={10}
    pl={10}
    pt={10}    
    pb={10}
    borderRadius="lg"
    border="1px solid rgba(255,255,255,.3)"
    >
      <Heading mb={4} variant="page-title">
        Portfolio
      </Heading>

      <SimpleGrid columns={[1,1,2]} gap={6} mb={20}>
        <Section>
          <WorkGridItem id="bluebeatz" title="Blue Beatz" thumbnail={thumbBlueBeatz}>
            A multi-purpose bot(outdated)
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="biolink"
            title="Bio Link"
            thumbnail={thumbBioLink}
          >
            My social links website
          </WorkGridItem>
        </Section>

      </SimpleGrid>
    <p>&copy; Copyright {year} - Kamal Raj V.N. All rights reserved.{" "}</p>
    </Container>
    </Layout>
  )
}

export default Portfolio
