import naturalLanguages from '@/data/naturalLanguages'
import { ListItem, UnorderedList } from '@chakra-ui/react'

function NaturalLanguages() {
  return (
    <UnorderedList pt="0.5rem" pl="1.5rem">
      {naturalLanguages.map((l, index) => {
        return (
          <ListItem key={index} w="100%" lineHeight={1.33} mb="0.5rem">
            {l.language}: {l.level}
          </ListItem>
        )
      })}
    </UnorderedList>
  )
}

export default NaturalLanguages
