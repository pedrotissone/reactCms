import React from 'react'
import { DotWave } from '@uiball/loaders'
import "./loader.css"

function Loader() {
    return (
        <div className='loaderDivContainer'>
            <DotWave
                size={47}
                speed={1}
                color="black"
            />
        </div>
    )
}

export default Loader