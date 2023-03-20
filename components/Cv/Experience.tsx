import { Box, ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react'

type Experience = {
  employer: string
  jobTitle: string
  date: string
  responsibilities: string[]
}

type ExperienceProps = {
  experience: Experience
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <VStack spacing="1" alignItems="start" w="100%">
      <Box bg="gray.700" rounded="md" px="4" py="2" w="100%">
        <Text fontWeight="bold" lineHeight="1.1" mt="0.33rem">
          {experience.jobTitle}
        </Text>
        <Text color="gray.500" lineHeight={1} mt="0.2rem">
          {experience.date}. {experience.employer}
        </Text>
      </Box>
      <UnorderedList pt="0.5rem" pl="1.5rem">
        {experience.responsibilities.map((resp, index) => (
          <ListItem key={index} w="100%" lineHeight={1.33} mb="0.5rem">
            {resp}
          </ListItem>
        ))}
      </UnorderedList>
    </VStack>
  )
}

export default Experience
