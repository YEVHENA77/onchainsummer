import { FC } from 'react'
import { ModalPage } from '../../types'
import { useCrossmintEvents } from '@crossmint/client-sdk-react-ui'
import { isProd } from '@/config/chain'
import { isTransactionFulfillmentPayload } from './helpers'
import { CrossMintForm } from './CrossMintForm'
import clsx from 'clsx'
import { Pending } from '../../elements/Pending'
import { TxDetails } from '../../MintDialog'

interface CrossMintProps {
  page: ModalPage
  crossMintClientId: string
  setPage: React.Dispatch<ModalPage>
  quantity: number
  totalPrice: string
  orderIdentifier: string
  setOrderIdentifier: React.Dispatch<string>
  setTxDetails: React.Dispatch<TxDetails | null>
}

export const CrossMint: FC<CrossMintProps> = ({
  setPage,
  page,
  crossMintClientId,
  quantity,
  totalPrice,
  orderIdentifier,
  setOrderIdentifier,
  setTxDetails,
}) => {
  const { listenToMintingEvents } = useCrossmintEvents({
    environment: isProd ? 'production' : 'staging',
  }) // Specifying the environment is optional. It defaults to "production"

  listenToMintingEvents({ orderIdentifier }, (event) => {
    switch (event.type) {
      case 'order:process.started':
        break
      case 'order:process.finished':
        break
      case 'transaction:fulfillment.succeeded':
        if (isTransactionFulfillmentPayload(event.payload)) {
          const { contractAddress, tokenIds, txId } = event.payload
          setTxDetails({
            hash: txId,
            nft: {
              address: contractAddress,
              tokenIds,
            },
          })
          setPage(ModalPage.MINT_SUCCESS)
        }
        break
      case 'transaction:fulfillment.failed':
        // TODO: Inform error
        setPage(ModalPage.MINT_ERROR)
        break
      default:
        break
    }
  })

  const isPending = page === ModalPage.CROSS_MINT_PENDING

  return (
    <>
      <Pending isPending={isPending} />
      <div className={clsx({ hidden: isPending }, 'flex flex-col w-full')}>
        <CrossMintForm
          page={page}
          orderIdentifier={orderIdentifier}
          setOrderIdentifier={setOrderIdentifier}
          setPage={setPage}
          quantity={quantity}
          totalPrice={totalPrice}
          clientId={crossMintClientId}
        />
      </div>
    </>
  )
}
