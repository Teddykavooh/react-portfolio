import './index.scss'
import myImage from '../../assets/images/header-img1.jpg'

const HeaderImage = () => {
  return (
    <>
      <div className="header-img">
        <img src={myImage} alt="Header" />
      </div>
    </>
  )
}

export default HeaderImage
