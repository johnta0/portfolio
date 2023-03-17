import fs from 'fs'
import path from 'path'

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import MDXComponents from '@/components/MDXComponents'
import { Box, Center } from '@chakra-ui/react'
export const runtime = 'nodejs'

type Props = {
  mdxSource: MDXRemoteSerializeResult
}

export default function CVPage({ mdxSource }: Props) {
  return (
    <Center>
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
