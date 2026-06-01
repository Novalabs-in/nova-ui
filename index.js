// Nova UI design components
export function cn(...inputs) {
  return inputs.filter(Boolean).join(' ')
}

export function Button({ children, variant = 'primary' }) {
  const base = 'px-4 py-2 rounded font-semibold transition'
  const style = variant === 'primary' ? 'bg-black text-white hover:bg-gray-800' : 'border border-black'
  return `<button class="${cn(base, style)}">${children}</button>`
}
