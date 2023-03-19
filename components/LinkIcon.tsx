import { Icon, Link } from '@chakra-ui/react'
import { IconType } from 'react-icons'

export type LinkIconProps = {
  icon: IconType
  label: string
  href: string
  isExternal?: boolean
}

const LinkIcon: React.FC<LinkIconProps> = ({
  icon,
  label,
  href,
  isExternal = true,
}) => (
  <Link
    display="inline-block"
    href={href}
    aria-label={label}
    isExternal={isExternal}
  >
    <Icon as={icon} fontSize="2xl" color="gray.400" />
  </Link>
)

export default LinkIcon
