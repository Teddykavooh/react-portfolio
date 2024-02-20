import './index.scss'

const ComingSoon = () => {
    return(
        <div
            style={{
                height: "100%",
                // overflowY: "auto",
                // display: "flex",
                // flexDirection: "column",
                // justifyContent: "space-evenly",
                // minHeight: "82vh",
                // alignItems: "center",
        //         // overflow: "scroll"
            }}
        >
            <div className='coming_soon_body'>
                <h2>COMING SOON, THICK & FAST !!!</h2>
            </div>
            <p className='p_section'>
                <h3>In the meanwhile, check out my wits :)</h3>
                <ul>
                    <h3>Scripting:</h3>
                    <li><a href="https://github.com/Teddykavooh/Python-Scripts">Sample Scripts</a></li>
                    <li><a href='https://github.com/Teddykavooh/Personal-Scripts'>Personalized Scripts</a></li>
                </ul>
                <ul>
                    <h3>Web Development:</h3>
                    <li><a href='https://antonykavoo-portfolio.vercel.app/'>Where you are</a></li>
                    <li><a href='https://teddykavooh.github.io/Disney-Clone/'>Disney Clone</a></li>
                    <li><a href='https://teddykavooh.github.io/Interpeace-Project/'>Interpeace</a></li>
                    <li><a href='https://teddykavooh.github.io/Emir/'>Travel Agency</a></li>
                    <li><a href='https://teddykavooh.github.io/ridemyway.github.io/'>Car Pooling</a></li>
                    <li><a href='https://teddykavooh.github.io/Coffee_Machine/'>Another Coffee Machine</a></li>
                </ul>
                <ul>
                    <h3>Android Development:</h3>
                    <li><a href='https://github.com/Teddykavooh/PrismApp'>PrismApp</a></li>
                    <li><a href='https://github.com/Teddykavooh/PrismAppBT'>PrismAppBT</a></li>
                    <li><a href='https://github.com/Teddykavooh/BetIQPro'>BetIQPro</a></li>
                </ul>
            </p>
        </div>
    )
}

export default ComingSoon
