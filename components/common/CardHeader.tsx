interface CardHeaderProps {
  children: string
}

export function CardHeader({ children }: CardHeaderProps) {
  return (
    <h1
      className="
        text-[24px] 
        font-bold 
        text-demin
        mb-2
      "
    >
      {children}
    </h1>
  )
}
