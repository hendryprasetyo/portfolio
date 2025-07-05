export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

export const getWhatsappLink = ({
  to,
  message,
}: {
  to: string
  message: string
}) => `https://wa.me/${to}?text=${encodeURIComponent(message)}`
