import './index.scss'
import LogoTitle from '../../assets/images/logo-a-big.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Logo from '../Logo'
import Loader from 'react-loaders'
// import HeaderImage from '../HeaderImage'

const Home = () => {
  // Letter animation
  const [letterClass, setLetterClass] = useState('text-animate')
  // const [glowEffect, setGlowEffect] = useState(false)
  const nameArray = ['n', 't', 'o', 'n', 'y', ',']
  const jobArray = [
    'S',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  // New version
  const greetings = ['Greetings!', 'Hello!', 'Hey there!', 'Hi!', 'Welcome!']
  const intros = ['Antony here,', "It's Antony,", 'Yours truly, Antony,']
  const descriptions = [
    'A master of code',
    'A coding genius',
    'A code ninja',
    'A coding maestro',
    'A crack programmer',
  ]
  const descriptionsMandatory = [
    ' and a subjugator of software development challenges.',
  ]

  // Generating a random index for each array
  const randomGreetingIndex = Math.floor(Math.random() * greetings.length)
  const randomIntroIndex = Math.floor(Math.random() * intros.length)
  const randomDescriptionIndex = Math.floor(Math.random() * descriptions.length)

  // Combining the elements to form the specific phrase
  const catchyPhrase = `${greetings[randomGreetingIndex]} ${intros[randomIntroIndex]} ${descriptions[randomDescriptionIndex]} ${descriptionsMandatory}`
  // const catchyPhraseIdx = catchyPhrase.length
  // console.log('Me phrase: ' + catchyPhrase)

  const greetingsOpt = []
  for (let index = 0; index < greetings[randomGreetingIndex].length; index++) {
    greetingsOpt.push(greetings[randomGreetingIndex][index])
  }
  console.log('Me greetings: ' + greetingsOpt)

  const descriptionOpt = []
  for (
    let index = 0;
    index < descriptions[randomDescriptionIndex].length;
    index++
  ) {
    descriptionOpt.push(descriptions[randomDescriptionIndex][index])
  }

  const descriptionMain = Array.from(descriptionsMandatory[0])
  // console.log('Me main desc: ' + descriptionMain)

  // const finalArray = [...descriptionOpt, ' ', ...descriptionMain]

  // Define a custom component that replaces the "A" with an image
  const ImageA = () => {
    return (
      <span style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={LogoTitle}
          alt="A"
          style={{ width: '24px', height: '24px', marginRight: '5px' }}
        />
        ntony
      </span>
    )
  }

  // Combining the elements to form the specific phrase
  const MeIntros = (
    <span>
      {/* {greetings[randomGreetingIndex]}{' '} */}
      {intros[randomIntroIndex].replace('Antony', <ImageA />)}{' '}
      {/* {descriptions[randomDescriptionIndex]}. */}
    </span>
  )

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    console.log('Triggered: ')
  }, [])

  return (
    <>
      {/* <HeaderImage /> */}
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            {/* <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span> */}
            {/* <span className={`${letterClass} _12`}>
              {greetingsOpt}
            </span> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={greetingsOpt}
              idx={12}
            />
            {/* Hi, I'm legendary */}
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="a-logo" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            {/* <span className={`${letterClass} _13`}>{catchyPhrase}</span> */}
            {/* <span className={`${letterClass} _14`}>'m</span> */}
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={20}
            />
          </h1>
          {/* New version */}
          <br />
          <h1 className='smaller'>
            {/* <AnimatedLetters
              letterClass={letterClass}
              strArray={greetingsOpt}
              idx={12}
            />
            <br /> */}
            {/* <AnimatedLetters
              letterClass={letterClass}
              strArray={MeIntros}
              idx={14}
            /> */}
            {/* <br /> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={descriptionOpt}
              idx={41}
              glow={true}
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={descriptionMain}
              idx={58}
            />
          </h1>
          <h2>
            Frontend & Backend Developer/ JavaScript,Python and Android-Java
            Expert
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
