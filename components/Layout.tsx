import { Box, Container } from '@chakra-ui/react'
import { ReactElement } from 'react'

type Props = {
  readonly children: ReactElement
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <Container maxW="1440px" mx="auto">
        {children}
      </Container>
    </div>
  )
}
