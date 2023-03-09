import { Icon, Link } from '@chakra-ui/react'
import { IconType } from 'react-icons'

type LinkIconProps = {
  icon: IconType
  label: string
  href: string
}

const LinkIcon = ({ icon, label, href }: LinkIconProps) => (
  <Link display="inline-block" href={href} aria-label={label} isExternal>
    <Icon as={icon} fontSize="2xl" color="gray.400" />
  </Link>
)

export default LinkIcon
