import React from "react"
import { ProgressBar, Wrapper } from './LineChart.styles'

function LineChart({ title, percentage, color }){
    return <Wrapper>
        <span>
            { title }
        </span>
        <ProgressBar 
        color={color}
        percentage={percentage} />
    </Wrapper>
}

export default LineChart