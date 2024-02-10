import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idx, glow }) => {
  if (glow) {
    // console.log("Reached glow: "+ glow)
    letterClass = letterClass + " glow"
    // console.log("letterClass: " + letterClass);
  }
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
