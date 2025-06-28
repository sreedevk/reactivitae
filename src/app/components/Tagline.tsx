import BasicData from '../../data/basic'
import localFont from 'next/font/local'

const highwayGothicFont = localFont({
  src: "../assets/fonts/HighwayGothicRegular.ttf"
})

const Tagline = () => {
  return (
    <h1 className={`${highwayGothicFont.className} w-full uppercase tracking-widest text-center text-sm my-2 py-1 bg-rose-700 font-bold text-white`}>{BasicData?.tagline}</h1>
  )
}

export default Tagline
