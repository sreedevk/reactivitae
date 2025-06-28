import TechStack from '../../data/tech-stack'
import Title from './Title'

type PLanguage = {
  language: string,
  proficiency: number
}

const formatLanguage = (language: PLanguage, index: number) => {
  return (
    <div className='my-2 flex flex-row w-full justify-between' key={index}>
      <h4 className='mr-8 text-sm font-bold italic'>{language?.language}</h4>
      <div className='md:w-64 w-56 bg-gray-100 rounded-sm my-0.5'>
        <div className="h-full bg-rose-400 rounded-sm" style={{ width: `${language?.proficiency}%` }}></div>
      </div>
    </div>
  )
}

const ProgrammingLanguages = () => {
  const formattedLanguages = TechStack?.languages.map(formatLanguage)

  return (
    <div className='my-1'>
      <Title icon_class='fas fa-terminal' title='Programming Languages' />
      <div className='my-2 px-2'>
        {formattedLanguages}
      </div>
    </div>
  )
}

export default ProgrammingLanguages
