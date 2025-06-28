import EducationDetails from '../../data/education'
import Title from './Title'
import localFont from 'next/font/local'

const alataFont = localFont({
  src: "../assets/fonts/AlataRegular.ttf"
})

type Education = {
  university: string,
  degree: string,
  description: string,
  location: string,
  year_of_completion: number
}

const educationFormatter = (education: Education, index: number) => {
  return (
    <div className='my-6 px-4' key={index}>
      <div className='flex flex-row justify-between'>
        <h2 className="font-bold text-lg">{education.degree}</h2>
        <h3 className='font-bold text-gray-500'>{education.year_of_completion}</h3>
      </div>
      <h3 className={`italic ${alataFont.className}`}>
        <span className='text-sm'>{education.university}</span>,
        <span className='text-sm text-rose-500 font-bold'>
          &nbsp;{education.location}
        </span>
      </h3>
      <p className='my-1 text-sm italic bold'>{education.description}</p>
    </div>
  )
}

const Education = () => {
  return (
    <div className="w-full">
      <Title title='Education' icon_class='fas fa-university' />
      <div>{EducationDetails.map(educationFormatter)}</div>
    </div>
  )
}

export default Education
