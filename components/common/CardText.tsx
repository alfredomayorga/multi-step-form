interface CardTextProps {
  children: string
}

export function CardText({ children }: CardTextProps) {
  return <p className="text-gray text-body-lg">{children}</p>
}
