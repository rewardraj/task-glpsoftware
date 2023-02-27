import React from 'react'

const Html = () => {
    return (
        <section className='Content__Wrapper'>
            <div className='first__Heading'>
                <h1 className='heading__H1'>ACT I</h1>
                <p className='heading__P'>PROLOGUE</p>
            </div>

            <div className='content__Section'>
                <p className="content__Paragraph">
                    <span>Two</span> households, both alike in <del>dignity</del> <br />
                    <strong>In fair Verona,</strong> where we lay our scene. <br />From
                    ancient grudge <i>break to new mutiny,</i> <br />
                    Where civil blood makes civil hands unclean.
                </p>

                <div class="list__Items">

                {/* bullet list items */}
                <ul>
                    <li>From forth the fatal loins of these two foes</li>
                    <li>A pair of star-cross'd lovers take their life;</li>
                </ul>

                {/* numbered list items */}

                <ol>
                    <li>Whose misadventured piteous overthrows</li>
                    <li>Do with their death bury their parents'strife.</li>
                </ol>
            </div>
            </div>

            
        </section>
    )
}

export default Html
