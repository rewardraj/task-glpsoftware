import React from 'react';
import {
    CardSection,
    CardWrapper,
    CardImage,
    Cards,
    CardContent,
    CardP,
    CardButton
} from './CardElement.js';

const CardComponent = () => {
  return (
    <CardSection>
    <div style={{
        textAlign: 'center', padding: 'var(--gutter) 0', fontSize: 'var(--text-sm)',
    }}><h3>Header</h3></div>

    <CardWrapper>
        <Cards>
            <CardImage>
                <CardP>200 x 100</CardP>
            </CardImage>
            <CardContent>
                <div className='card__Title'>
                    <h2>Lorem</h2>
                </div>
                <div className='card__Subtitle'>
                    <p>lorem ipsum dolor</p>
                </div>
                <div>
                    {/* card paragraph */}
                    <p className="card__Paragraph">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Voluptas eligendi voluptatibus architecto laborum ipsa,
                        veritatis consectetur dolorum necessitatibus iusto in, veniam
                        ex deleniti debitis soluta dolore magnam minima, accusamus
                        distinctio!
                    </p>
                </div>
                <div className='card__BtnWrapper'>
                    <CardButton>More</CardButton>
                </div>
            </CardContent>

        </Cards>
        <Cards>
            <CardImage><CardP>200 x 100</CardP></CardImage>
            <CardContent>
                <div className='card__Title'>
                    <h2>Lorem</h2>
                </div>
                <div className='card__Subtitle'>
                    <p>lorem ipsum dolor</p>
                </div>
                <div>
                    <p className="card__Paragraph">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Voluptas eligendi voluptatibus architecto laborum ipsa,
                        veritatis consectetur dolorum necessitatibus iusto in, veniam
                        ex deleniti debitis soluta dolore magnam minima, accusamus
                        distinctio!
                    </p>
                </div>
                <div className='card__BtnWrapper'>
                    <CardButton>More</CardButton>
                </div>
            </CardContent>


        </Cards>

        <Cards>
            <CardImage><CardP>200 x 100</CardP></CardImage>
            <CardContent>
                <div className='card__Title'>
                    <h2>Lorem</h2>
                </div>
                <div className='card__Subtitle'>
                    <p>lorem ipsum dolor</p>
                </div>
                <div>
                    <p className="card__Paragraph">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Voluptas eligendi voluptatibus architecto laborum ipsa,
                        veritatis consectetur dolorum necessitatibus iusto in, veniam
                        ex deleniti debitis soluta dolore magnam minima, accusamus
                        distinctio!
                    </p>
                </div>
                <div className='card__BtnWrapper'>
                    <CardButton>More</CardButton>
                </div>
            </CardContent>

        </Cards>
        <Cards>
            <CardImage><CardP>200 x 100</CardP></CardImage>
            <CardContent>
                <div className='card__Title'>
                    <h2>Lorem</h2>
                </div>
                <div className='card__Subtitle'>
                    <p>lorem ipsum dolor</p>
                </div>
                <div>
                    <p className="card__Paragraph">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Voluptas eligendi voluptatibus architecto laborum ipsa,
                        veritatis consectetur dolorum necessitatibus iusto in, veniam
                        ex deleniti debitis soluta dolore magnam minima, accusamus
                        distinctio!
                    </p>
                </div>
                <div className='card__BtnWrapper'>
                    <CardButton>More</CardButton>
                </div>
            </CardContent>

        </Cards>
        <Cards>
            <CardImage>
                <CardP>200 x 100</CardP>
            </CardImage>
            <CardContent>
                <div className='card__Title'>
                    <h2>Lorem</h2>
                </div>
                <div className='card__Subtitle'>
                    <p>lorem ipsum dolor</p>
                </div>
                <div>
                    <p className="card__Paragraph">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Voluptas eligendi voluptatibus architecto laborum ipsa,
                        veritatis consectetur dolorum necessitatibus iusto in, veniam
                        ex deleniti debitis soluta dolore magnam minima, accusamus
                        distinctio!
                    </p>
                </div>
                <div className='card__BtnWrapper'>
                    <CardButton>More</CardButton>
                </div>
            </CardContent>

        </Cards>
        <Cards>
            <CardImage>
                <CardP>200 x 100</CardP>
            </CardImage>
            <CardContent>
                <div className='card__Title'>
                    <h2>Lorem</h2>
                </div>
                <div className='card__Subtitle'>
                    <p>lorem ipsum dolor</p>
                </div>
                <div>
                    <p className="card__Paragraph">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Voluptas eligendi voluptatibus architecto laborum ipsa,
                        veritatis consectetur dolorum necessitatibus iusto in, veniam
                        ex deleniti debitis soluta dolore magnam minima, accusamus
                        distinctio!
                    </p>
                </div>
                <div className='card__BtnWrapper'>
                    
                    {/* card button */}
                    <CardButton>More</CardButton>
                </div>
            </CardContent>

        </Cards>

    </CardWrapper>
</CardSection>
  )
}

export default CardComponent
