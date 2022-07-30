import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container align="center" verticalAlign="middle">
      <Heading as="h1">404 | Page Not Found</Heading>
      <Text>unknown page...</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/" passHref>
          <Button colorScheme="twitter">Return to home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
