import localFont from 'next/font/local'

const highwayGothicFont = localFont({
  src: "../assets/fonts/HighwayGothicRegular.ttf"
})

const Footer = () => {
  return (
    <div className={`w-full ${highwayGothicFont.className} text-center py-2 bg-rose-800 relative bottom-0 text-white font-bold`}>
      &copy; Sreedev Kodichath | All Rights Reserved
    </div>
  )
}

export default Footer
