import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
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
    <Container>
      <Heading as="h2" fontSize={20} mb={4}>
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
