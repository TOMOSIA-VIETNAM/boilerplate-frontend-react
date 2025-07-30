import { RegisterOptions, UseFormRegister } from 'react-hook-form'

type TProps = {
  type: React.HTMLInputTypeAttribute
  errorMessage?: string
  placeholder?: string
  className?: string
  name: string
  register: UseFormRegister<any>
  rules?: RegisterOptions
}

export default function Input({ type, errorMessage, placeholder, className, name, register, rules }: TProps) {
  return (
    <div className={className}>
      <input
        type={type}
        placeholder={placeholder}
        className="bg-inputBg text-inputText border-inputBorder focus:border-inputBorder/50 w-full rounded-sm border p-2 outline-none"
        {...register(name, rules)}
      />
      <div className="mt-1 min-h-[1.25rem] text-sm text-red-600">{errorMessage}</div>
    </div>
  )
}
