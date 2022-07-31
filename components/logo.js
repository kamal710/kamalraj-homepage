import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { SiKalilinux } from 'react-icons/si'
const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  backdrop-filter: blur(15px);


  &:hover img {
    transform: font-size: 20px;
  }
`

const Logo = () => {
  const footPrintImg = ''

  return(
    <Link href="/">
      <a>
        <LogoBox>
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
            fontSize="50"
            w="50"
          >
            <SiKalilinux />
          </Text>
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={3}>
               Kamal Raj
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
