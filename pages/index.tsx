/* eslint-disable react/jsx-key */
import LinkIcon from '@/components/LinkIcon'
import {
  Image,
  VStack,
  Text,
  HStack,
  Link,
  Icon,
  IconProps,
} from '@chakra-ui/react'
// icons
import { DiGithubBadge } from 'react-icons/di'
import { IoLogoLinkedin } from 'react-icons/io'
import { SiZenn } from 'react-icons/si'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { IconBaseProps, IconType } from 'react-icons'

const CVIcon = (props: IconProps) => (
  <Icon>
    <path d="M175 481 c-6 -6 -32 -11 -60 -13 l-50 -3 0 -220 0 -220 185 0 185 00 220 0 220 -50 3 c-27 2 -54 7 -59 13 -6 5 -40 9 -76 9 -36 0 -70 -4 -75 -9zm135 -36 c0 -24 -3 -25 -60 -25 -57 0 -60 1 -60 25 0 24 3 25 60 25 57 0 60-1 60 -25z m-140 -5 c0 -5 -13 -10 -30 -10 l-30 0 0 -180 0 -180 140 0 140 00 180 0 180 -30 0 c-16 0 -30 5 -30 10 0 6 20 10 45 10 l45 0 0 -205 0 -205-170 0 -170 0 0 205 0 205 45 0 c25 0 45 -4 45 -10z m200 -192 l0 -158 -120 0-120 0 0 158 0 157 120 0 120 0 0 -157z" />
    <path d="M225 340 c-4 -12 -1 -27 5 -35 10 -12 8 -19 -11 -35 l-24 -19 55 0c53 0 54 0 35 17 -14 11 -21 29 -20 52 0 40 -29 55 -40 20z" />
    <path d="M170 200 c0 -6 33 -10 80 -10 47 0 80 4 80 10 0 6 -33 10 -80 10 -470 -80 -4 -80 -10z" />
    <path d="M170 150 c0 -6 28 -10 65 -10 37 0 65 4 65 10 0 6 -28 10 -65 10 -370 -65 -4 -65 -10z" />
  </Icon>
)

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
  // {
  //   icon: CVIcon,
  //   label: 'CV',
  //   href: 'https://johnta0.github.io/cv',
  // },
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
