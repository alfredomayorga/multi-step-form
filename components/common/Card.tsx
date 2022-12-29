interface CardProps {
  children: React.ReactNode[]
}
export function Card({ children }: CardProps) {
  return (
    <div
      style={{
        position: 'relative',
      }}
      className="
        bg-white
        rounded-lg
        w-[90%]
        mt-16
        mx-auto
        px-4
        py-8
        drop-shadow-xl
      "
    >
      {children}
    </div>
  )
}
