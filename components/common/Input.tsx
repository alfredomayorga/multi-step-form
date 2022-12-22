interface InputProps {
  labelText: string
  placeholder: string
  type: 'text' | 'email' | 'tel'
}
export function Input({ type, placeholder, labelText }: InputProps) {
  return (
    <div className="flex flex-col my-2">
      <label htmlFor="input">{labelText}</label>
      <input
        name="input"
        type={type}
        placeholder={placeholder}
        className="
          border
          border-light-grey
          rounded-md
          h-[40px]
          px-4
          focus:outline-purple
        "
      />
    </div>
  )
}
