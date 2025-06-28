import Image from 'next/image'

import Header from './components/Header'
import Tagline from './components/Tagline'
import Introduction from "./components/Introduction";
import ProgrammingLanguages from './components/ProgrammingLanguages'
import Tools from './components/Tools';
import Career from './components/Career';
import OpenSourceProjects from './components/OpenSourceProjects';
import Education from './components/Education';
import Languages from './components/Languages';
import InterpersonalSkills from './components/InterpersionalSkills';
import WritingAndMedia from './components/WritingAndMedia';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import QRCode from './assets/images/qr.png'

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'

export default function Home() {
  return <main className='mt-2'>
    <Header />
    <Tagline />
    <div className="container flex flex-col mx-auto">
      <div>
        <Introduction />
      </div>
      <div className="flex flex-col justify-between md:flex-row my-2">
        <div className='md:w-1/3 w-full mx-1'>
          <ProgrammingLanguages />
        </div>
        <div className='md:w-2/3 w-full mx-1'>
          <Tools />
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className='w-full md:w-1/2 mr-2'>
          <Career />
        </div>
        <div className='w-full md:w-1/2 flex flex-wrap md:flex-col'>
          <Education />
          <OpenSourceProjects />
        </div>
      </div>
      <div className='flex flex-col md:flex-row my-2'>
        <div className="md:w-2/6 w-full mr-4"><Languages /></div>
        <div className='md:w-4/6 w-full'><InterpersonalSkills /></div>
      </div>
      <div className='my-3 flex flex-col md:flex-row'>
        <WritingAndMedia />
        <Certifications />
        <div className='md:w-1/4 md:ml-6'>
          <Image src={QRCode} alt="qr-code" fill={false} width={450} className='my-4' />
        </div>
      </div>
    </div>
    <Footer />
  </main>
}
