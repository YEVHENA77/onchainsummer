import { Button } from '@/components/Button'

import { FC, useMemo } from 'react'
import { ModalPage } from '../../types'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowRight } from '@/components/icons/ArrowRight'
import { useAddress, useBalance } from '@thirdweb-dev/react'
import { useDifference } from '../../elements/useDifference'
import { Copy } from '@/components/icons/Copy'
import { useMintDialogContext } from '../../Context/useMintDialogContext'
import { PartnerInfo } from '../../elements/PartnerInfo'

interface MintErrorProps {
  setPage: React.Dispatch<ModalPage>
  setCrossMintOrderIdentifier: React.Dispatch<string>
  mintError: any | null
  totalPrice: string
}

export const MintError: FC<MintErrorProps> = ({
  setPage,
  mintError,
  totalPrice,
}) => {
  const { dropImage, dropName, partnerIcon, partnerName } =
    useMintDialogContext()

  const reason = mintError?.reason
  const { data: balance } = useBalance()
  const address = useAddress()

  const { display: difference } = useDifference(totalPrice)

  const title = useMemo(() => {
    switch (reason) {
      case '!Tokens':
        return 'Not enough tokens'
      case 'user rejected transaction':
        return 'Transaction rejected'
      default:
        return 'Not enough funds'
    }
  }, [reason])

  const content = useMemo(() => {
    switch (reason) {
      case '!Tokens':
        return (
          <>
            <span>There are not enough tokens left for you to mint.</span>
          </>
        )
      case 'user rejected transaction':
        return (
          <>
            <span>You rejected the transaction.</span>
          </>
        )
      default:
        return (
          <div className="flex flex-col w-full">
            <p className="font-medium mb-3">
              You need to add {difference} ETH on the Base network to your
              wallet, plus a bit extra for gas fees.
            </p>
            <p>
              Add ETH on Base to your wallet or, for a faster experience, mint
              with a credit card.
            </p>
            <div className="my-8 flex justify-between">
              <span className="font-medium">Your Wallet</span>
              <span className="text-button-text-text">
                {balance?.displayValue} ETH
              </span>
            </div>
            <button
              className="border border-[#EFEFEF] rounded-[100px] flex items-center gap-2 w-full p-3 mb-8"
              onClick={() => {
                navigator.clipboard.writeText(address || '')
              }}
            >
              <span className="inline-block overflow-hidden text-ellipsis whitespace-nowrap">
                {address ? address : ''}
              </span>
              <Copy />
            </button>
          </div>
        )
    }
  }, [address, balance, difference, reason])

  const actions = useMemo(() => {
    switch (reason) {
      case '!Tokens':
        return (
          <>
            <Dialog.Close asChild>
              <Button>
                Close <ArrowRight />
              </Button>
            </Dialog.Close>
          </>
        )
      case 'user rejected transaction':
      default:
        return (
          <>
            <Button onClick={() => setPage(ModalPage.CROSS_MINT_FORM)}>
              Mint With Credit Card <ArrowRight />
            </Button>
            <Button
              variant="LIGHT"
              onClick={() => setPage(ModalPage.NATIVE_MINT)}
            >
              Back <ArrowRight />
            </Button>
          </>
        )
    }
  }, [reason, setPage])

  return (
    <>
      <PartnerInfo />
      {/* TODO: Add Coinbase Display font */}
      <Dialog.Title className="text-[32px] lg:mt-4">{title}</Dialog.Title>
      <Dialog.Description className="flex flex-col w-full gap-4">
        {content}
      </Dialog.Description>
      {actions}
    </>
  )
}
