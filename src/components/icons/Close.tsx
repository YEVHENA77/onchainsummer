import { FC } from 'react'
import { IconProps } from './type'

export const Close: FC<IconProps> = ({
  height = 24,
  width = 24,
  color = '#151515',
  className = '',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill="none"
      className={className}
    >
      <path
        fill={color}
        d="M.38 21.726c.25-.265.571-.4.958-.4.357 0 .665.135.93.4.264.265.4.58.4.93 0 .386-.136.7-.4.958-.265.25-.58.379-.93.379-.387 0-.701-.129-.959-.38-.25-.25-.379-.571-.379-.957 0-.358.129-.665.38-.93Zm3.554-3.554c.25-.265.573-.4.959-.4.358 0 .665.135.93.4.265.264.4.579.4.93 0 .386-.135.7-.4.958-.265.25-.58.379-.93.379-.386 0-.701-.13-.959-.38-.25-.25-.379-.572-.379-.958 0-.357.122-.665.38-.93Zm3.556-3.555c.25-.264.572-.4.958-.4.358 0 .666.136.93.4.265.265.4.58.4.93 0 .386-.135.7-.4.958-.264.25-.58.38-.93.38-.386 0-.7-.13-.958-.38-.25-.25-.38-.572-.38-.958 0-.357.122-.665.38-.93Zm3.555-3.554c.25-.264.572-.4.951-.4.358 0 .666.136.938.4.264.265.4.58.4.93 0 .386-.136.7-.4.958-.265.25-.58.38-.938.38-.386 0-.7-.13-.951-.38-.25-.25-.38-.572-.38-.958 0-.358.123-.665.38-.93ZM14.6 7.51c.25-.265.573-.4.959-.4.357 0 .665.135.93.4.264.265.4.58.4.93 0 .386-.136.7-.4.958-.265.25-.58.379-.93.379-.386 0-.701-.129-.959-.38-.25-.25-.379-.571-.379-.957 0-.358.129-.665.38-.93Zm3.556-3.554c.25-.265.572-.4.958-.4.358 0 .665.135.93.4.265.264.4.579.4.93 0 .386-.135.7-.4.958-.265.25-.58.379-.93.379-.386 0-.7-.122-.958-.38-.25-.25-.38-.571-.38-.958 0-.357.13-.665.38-.93ZM21.71.4c.25-.264.572-.4.959-.4.357 0 .665.136.93.4.264.265.4.58.4.93 0 .386-.136.701-.4.958-.265.258-.58.38-.93.38-.387 0-.702-.122-.96-.38-.25-.25-.378-.572-.378-.958 0-.357.128-.665.379-.93Z"
      />
      <path
        fill={color}
        d="M2.668 1.337c0 .386-.129.701-.379.959-.25.25-.572.379-.958.379a1.28 1.28 0 0 1-.93-.38A1.279 1.279 0 0 1 0 1.338C0 .98.136.672.4.407c.265-.264.58-.4.93-.4.387 0 .702.136.96.4.25.265.378.58.378.93Zm3.556 3.555c0 .386-.13.7-.38.958-.25.25-.572.379-.958.379a1.28 1.28 0 0 1-.93-.38 1.279 1.279 0 0 1-.4-.957c0-.358.135-.666.4-.93.265-.265.58-.4.93-.4.386 0 .7.135.958.4.25.264.38.58.38.93Zm3.555 3.554c0 .386-.129.7-.38.958-.25.25-.572.38-.958.38a1.31 1.31 0 0 1-.93-.38c-.264-.25-.4-.572-.4-.958 0-.358.136-.665.4-.93.265-.264.58-.4.93-.4.386 0 .701.136.959.4.25.265.379.58.379.93ZM13.334 12c0 .386-.129.7-.379.958-.25.25-.572.38-.959.38a1.31 1.31 0 0 1-.93-.38c-.264-.25-.4-.572-.4-.958 0-.358.136-.665.4-.93.265-.264.58-.4.93-.4.387 0 .701.136.959.4.258.265.38.58.38.93Zm3.555 3.554c0 .386-.128.701-.379.958a1.3 1.3 0 0 1-.951.38c-.358 0-.665-.13-.937-.38-.265-.25-.4-.572-.4-.958 0-.357.135-.665.4-.93.264-.264.58-.4.937-.4.386 0 .7.136.951.4.25.265.38.58.38.93Zm3.556 3.554c0 .387-.13.701-.38.959-.25.25-.572.379-.958.379-.358 0-.665-.129-.937-.38-.265-.25-.4-.571-.4-.957 0-.358.135-.666.4-.93.265-.265.58-.4.937-.4.386 0 .701.135.959.4.25.264.379.579.379.93ZM24 22.663c0 .386-.129.7-.38.958-.25.25-.571.379-.958.379a1.31 1.31 0 0 1-.93-.379c-.264-.25-.4-.572-.4-.958 0-.358.136-.665.4-.93.265-.265.58-.4.93-.4.387 0 .701.135.959.4.25.265.379.58.379.93Z"
      />
    </svg>
  )
}
