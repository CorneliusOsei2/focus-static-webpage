import Image from 'next/image'
import focusLogo from '@/images/logos/focusLogo.jpeg'

export function Logo(props) {
  return (

    <Image
      className="h-14 w-14 object-cover rounded-full"
      src={focusLogo}
      alt=""
      width={60}
      height={60}
    />
  )
}
