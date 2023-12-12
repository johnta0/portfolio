import fs from 'fs'
import path from 'path'

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import MDXComponents from '@/components/MDXComponents'
import {
  Box,
  Center,
  ListItem,
  Text,
  UnorderedList,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { NextPage } from 'next'
import experiences from '@/data/experiences'
import Experience from '@/components/Cv/Experience'
import NaturalLanguages from '@/components/Cv/NaturalLanguages'
import Education from '@/components/Cv/Education'
export const runtime = 'nodejs'

type Props = {
  mdxSource: MDXRemoteSerializeResult
}

// const CVPage: NextPage<Props> = ({ mdxSource }) => {
//   return (
//     <Center paddingBottom={8}>
//       <Box>
//         <MDXRemote {...mdxSource} components={MDXComponents} />
//       </Box>
//     </Center>
//   )
// }

const CVPage = () => {
  return (
    <Center paddingBottom={8}>
      <Box textColor="gray.200">
        <MDXComponents.h2>Junta Ono</MDXComponents.h2>

        <MDXComponents.h3>Current Interests</MDXComponents.h3>
        <MDXComponents.p>
          I am currently inclined to work on projects that involve the
          following:
        </MDXComponents.p>
        <UnorderedList>
          <ListItem>
            <Text fontWeight="bold">Financial systems:</Text> Securities
            companies, Market-making bot, implementing derivative contracts,
            market information platforms, etc.
          </ListItem>
          <ListItem>
            Systems that require understanding and implementing advanced
            concepts or papers. e.g. (Cryptography, Game Theory Optimal
            (Counterfactual Regret Minimization))
          </ListItem>
          <ListItem>
            Relatively small, niche services with core customers. (services
            built by a solopreneur or a small team.)
          </ListItem>
          <ListItem>Services that use relatively new tech stacks.</ListItem>
        </UnorderedList>

        <MDXComponents.h3>Professional Experience</MDXComponents.h3>
        <VStack spacing={4} w="100%">
          {experiences.map((experience, index) => (
            <Experience key={index} experience={experience} />
          ))}
        </VStack>

        <MDXComponents.h3>Education</MDXComponents.h3>
        <Education />

        <MDXComponents.h3>Natural Languages</MDXComponents.h3>
        <NaturalLanguages />
      </Box>
    </Center>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'mdx', 'cv.mdx')
  const source = fs.readFileSync(filePath, 'utf8')

  const mdxSource = await serialize(source)

  return { props: { mdxSource } }
}

export default CVPage
