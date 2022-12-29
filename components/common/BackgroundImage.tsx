import Image from 'next/image'
export function BackgroundImage() {
  return (
    <div className="absolute top-0 left-0 w-full">
      <Image
        src="/images/bg-sidebar-mobile.svg"
        alt="Background Decoration"
        width={0}
        height={0}
        style={{width: '100%'}}
      />
    </div>
  )
}
