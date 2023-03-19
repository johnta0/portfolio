import fs from 'fs'
import path from 'path'

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import MDXComponents from '@/components/MDXComponents'
import { Box, Center } from '@chakra-ui/react'
import { NextPage } from 'next'
export const runtime = 'nodejs'

type Props = {
  mdxSource: MDXRemoteSerializeResult
}

const CVPage: NextPage<Props> = ({ mdxSource }) => {
  return (
    <Center paddingBottom={8}>
      <Box>
        <MDXRemote {...mdxSource} components={MDXComponents} />
      </Box>
    </Center>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'mdx', 'cv.mdx')
  const source = fs.readFileSync(filePath, 'utf8')

  const mdxSource = await serialize(source, {
    // mdxOptions: { remarkPlugins: [paragraphCustomAlerts] },
    // parseFrontmatter: true,
  })

  return { props: { mdxSource } }
}

export default CVPage
