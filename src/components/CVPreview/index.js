import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import CVPDF from '../../../public/Antony_Kavoo_CV.pdf'

const CVPreview = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
  
    useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])
  
    return (
      <>
        <div className="container cv-preview-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['C', 'V', ' ', 'P', 'r', 'e', 'v', 'i', 'e', 'w']}
                idx={15}
              />
            </h1>
          </div>
          <div className="cv-preview">
            <iframe 
                // src="https://drive.google.com/file/d/1Ygax5bfbYgz2lVHaEo4QIr61ca0kIeW6/view"
                src={CVPDF}
                width="100%" 
                height="600"
                allow="autoplay">
            </iframe>
            <p>
                <a 
                    href="https://drive.google.com/file/d/1Ygax5bfbYgz2lVHaEo4QIr61ca0kIeW6/view?usp=drive_link"
                    // class="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    className="cv-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Download CV
                </a>
            </p>
          </div>
        </div>
        <Loader type="pacman" />
      </>
    )
}

export default CVPreview
