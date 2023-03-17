import { Box, Heading, Text } from '@chakra-ui/react'

export default function Test() {
  return (
    <Box>
      <Heading>This is heading h1</Heading>
      <Box as="ul">
        <Box as="li">This is list item</Box>
        <Box as="li">This is list item</Box>
      </Box>
      <Heading as="h2">This is h2</Heading>
      <Text>This is text</Text>
      this is nothing
    </Box>
  )
}
