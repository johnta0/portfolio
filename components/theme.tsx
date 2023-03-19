import { defineStyleConfig, extendTheme } from '@chakra-ui/react'

const Heading = defineStyleConfig({
  variants: {
    'section-title': {
      textDecoration: 'underline',
      fontSize: 20,
      textUnderlineOffset: 6,
      textDecorationColor: '#525252',
      textDecorationThickness: 4,
      marginTop: 3,
      marginBottom: 4,
    },
  },
})

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'gray.900',
      },
    },
  },
  components: {
    Heading,
  },
})

export default theme
