import { FC } from 'react'
import { Card } from '../Card'
import Image from 'next/image'
import { Button } from '../Button'
import { MintButton } from '../MintButton'
import { RightArrow } from '../icons/RightArrow'
import { AddressPill } from '../AddressPill'

type DropCardProps = {
  address: string
  crossMintClientId: string
  partnerIcon: string
  partner: string
  image: string
  externalLink?: string
  name: string
  endDate: number
  price: string
  creator: string
}

export const DropCard: FC<DropCardProps> = ({
  address,
  crossMintClientId,
  partnerIcon,
  image,
  partner,
  name,
  externalLink,
  endDate,
  price,
  creator,
}) => {
  const truncatedAddress = address.slice(0, 6) + '...' + address.slice(-4)

  return (
    <Card className="relative flex flex-col gap-4 font-text w-[320px] flex-auto">
      <Card className="absolute aspect-square p-2 top-9 right-9 z-20 bg-white">
        <div className="relative z-20 h-8 w-8">
          <Image src={partnerIcon} alt={`${partner} Icon`} fill />
        </div>
      </Card>
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={image}
          alt={`${name} from ${partner}`}
          fill
          className="object-cover rounded-t-2xl"
        />
      </div>
      <div className="p-4 flex flex-col flex-auto">
        {externalLink ? (
          <a
            href={externalLink}
            className="text-[32px] after:absolute after:inset-0 flex-auto"
          >
            {name}
          </a>
        ) : (
          <span className="text-[32px]">{name}</span>
        )}
        <div className="mt-4 mb-8">
          <AddressPill address={creator} className="bg-ocs-turquoise" />
        </div>
        {externalLink ? (
          <Button tabIndex={-1} className="!flex !justify-between">
            Mint ({price} ETH)
            <RightArrow />
          </Button>
        ) : (
          <MintButton
            price={price}
            address={address}
            crossMintClientId={crossMintClientId}
            partnerIcon={partnerIcon}
            partnerName={partner}
            dropImage={image}
            dropName={name}
            dropEndTime={endDate}
            creatorAddress={creator}
          />
        )}
      </div>
    </Card>
  )
}
