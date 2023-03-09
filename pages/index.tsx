import Head from 'next/head'
import { Image, VStack, Text, HStack } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <VStack
        as={'section'}
        alignItems={'center'}
        textAlign={'center'}
        spacing={{ base: 8, md: 6 }}
        py={{ base: 20, md: 60 }}
      >
        <Image
          src="https://pbs.twimg.com/profile_images/1593660299814400000/nozW-oZq_400x400.jpg"
          alt="Icon of @j0hnta0"
          width="150"
          height="150"
          placeholder="blur"
          borderRadius="full"
        />
        <VStack>
          <Text color="white">Junta Ono</Text>
        </VStack>
        <HStack></HStack>
      </VStack>
    </>
  )
}
