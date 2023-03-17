import { Box } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box textAlign="center" fontSize="sm" textColor="whiteAlpha.700">
      &copy; {new Date().getFullYear()} j0hnta. All Rights Reserved.
    </Box>
  )
}
