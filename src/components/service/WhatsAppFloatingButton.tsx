import { FC, useMemo } from 'react'
import { cn, getWhatsappLink } from '@/utils'
import { whatsapp_service } from '@/assets'

type WhatsAppFloatingButtonProps = {
  phoneNumber: string
  message: string
}

const WhatsAppFloatingButton: FC<WhatsAppFloatingButtonProps> = ({
  phoneNumber,
  message,
}) => {
  const waLink = useMemo(
    () => getWhatsappLink({ to: phoneNumber, message }),
    [phoneNumber, message]
  )

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className={cn('fixed bottom-4 right-4 z-50')}
    >
      <img
        src={whatsapp_service}
        alt="wa_logo"
        title="WhatsApp Logo"
        width={40}
        height={40}
        className="rounded-full"
      />
    </a>
  )
}

export default WhatsAppFloatingButton
