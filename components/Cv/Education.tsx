import { ListItem, UnorderedList } from '@chakra-ui/react'

function Education() {
  return (
    <UnorderedList pt="0.5rem" pl="1.5rem">
      <ListItem w="100%" lineHeight={1.33} mb="0.5rem">
        Tohoku University (BSc. Physics [2014 - 2020])
      </ListItem>
      <ListItem w="100%" lineHeight={1.33} mb="0.5rem">
        Short-term Study Abroad Program, National Chengchi University, Taipei,
        2015
      </ListItem>
    </UnorderedList>
  )
}

export default Education
