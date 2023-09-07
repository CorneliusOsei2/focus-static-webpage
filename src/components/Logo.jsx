import Image from 'next/image'

export function Logo(props) {
  return (

    <Image
      className="h-14 w-14 object-cover rounded-full"
      src={"https://res.cloudinary.com/djykqimfx/image/upload/v1693412657/focus/logos/focusLogo.jpeg.jpg"}
      alt=""
      width={60}
      height={60}
    />
  )
}
