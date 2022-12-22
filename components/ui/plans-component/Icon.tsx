import Image from 'next/image'

interface IconProps {
  color: string
  icon: string
}
export function Icon({ color, icon }: IconProps) {
  return (
    <Image
      src={icon}
      width={40}
      height={40}
      alt="Plan Icon"
      className="mx-4"
    />
  )
}
