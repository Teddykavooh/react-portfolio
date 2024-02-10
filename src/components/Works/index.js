import './index.scss'
import Loader from 'react-loaders'
import ComingSoon from '../ComingSoon';

export const Works = () => {
    return (
        <>
            <div className='container works-page'>
                <ComingSoon />
            </div>
            <Loader type="pacman" />
        </>
    )
}

// export default Works