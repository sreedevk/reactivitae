import Elevator from '../../data/elevator'
import Title from './Title'

import localFont from 'next/font/local'

const familjenGroteskFont = localFont({
  src: "../assets/fonts/FamiljenGroteskRegular.ttf"
})

const Introduction = () => {
  return (
    <div className="my-1">
      <Title icon_class='fas fa-user-cog' title="Introduction" />
      <p className={`${familjenGroteskFont.className} my-2 font-bold font-familjen-grotesk text-sm px-4 text-justify`}>{Elevator}</p>
    </div>
  )
}

export default Introduction
