import styled from '@emotion/styled'
import { Box, useColorModeValue } from '@chakra-ui/react'

export const bg = styled(Box)`
  padding: 20px 20px 20px 20px;
  color: {useColorModeValue('whiteAlpha500')}
  bg: {useColorModeValue('whiteAlpha.500')}
`
