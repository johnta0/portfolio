import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import { ReactElement } from 'react'

type Props = {
  readonly children: ReactElement
}

export default function Layout({ children }: Props) {
  return (
    <Box>
      <Head>
        <meta name="description" content="j0hnta's website" />
        <meta name="author" content="j0hnta" />
        <title>j0hnta - Homepage</title>
        <meta name="twitter:title" content="j0hnta" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@j0hnta" />
        <meta name="twitter:creator" content="@j0hnta" />
        <meta
          name="twitter:image"
          content="https://pbs.twimg.com/profile_images/1593660299814400000/nozW-oZq_400x400.jpg"
        />
      </Head>
      <Container maxW="container.md" mx="auto" paddingTop={14}>
        {children}
      </Container>
    </Box>
  )
}
