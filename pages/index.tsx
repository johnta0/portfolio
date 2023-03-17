import LinkIcon from '@/components/LinkIcon'
import {
  Image,
  VStack,
  Text,
  HStack,
  Icon,
  IconProps,
  Link,
} from '@chakra-ui/react'
// icons
import { DiGithubBadge } from 'react-icons/di'
import { IoLogoLinkedin } from 'react-icons/io'
import { SiZenn } from 'react-icons/si'
import { HiOutlineDocumentText } from 'react-icons/hi'

const links = [
  {
    icon: DiGithubBadge,
    label: 'GitHub',
    href: 'https://github.com/johnta0',
  },
  {
    icon: IoLogoLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/j0hnta/',
  },
  {
    icon: SiZenn,
    label: 'Zenn',
    href: 'https://zenn.dev/j0hnta',
  },
  {
    icon: HiOutlineDocumentText,
    label: 'CV',
    href: '/cv',
  },
]

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
        <HStack>
          {links.map((link) => (
            <LinkIcon key={link.href} {...link} />
          ))}
        </HStack>
      </VStack>
    </>
  )
}
