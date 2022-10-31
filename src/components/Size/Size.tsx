import { SizeNumber } from './Size.styles'

type SizeType = {
  size: number
  setCheckedSize: any
  checkedSize: any
}

export const Size = ({ size, setCheckedSize, checkedSize }: SizeType) => {
  return (
    <SizeNumber
      onClick={() => setCheckedSize(size)}
      checked={checkedSize === size}
    >
      {size}
    </SizeNumber>
  )
}
