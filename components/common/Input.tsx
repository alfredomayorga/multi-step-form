interface InputProps {
  labelText: string
  placeholder: string
  type: 'text' | 'email' | 'tel'
}
export function Input({ type, placeholder, labelText }: InputProps) {
  return (
    <div className="flex flex-col my-2">
      <label
        className="text-demin text-[12px] mb-1"
        htmlFor="input"
      >
        {labelText}
      </label>
      <input
        name="input"
        type={type}
        placeholder={placeholder}
        className="
          border
          border-border-color
          placeholder:text-gray
          rounded-md
          h-[40px]
          px-4
          focus:outline-purple
        "
      />
    </div>
  )
}
