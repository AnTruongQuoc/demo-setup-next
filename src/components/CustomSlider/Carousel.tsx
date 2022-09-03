import React, { ReactNode, useState } from 'react';

interface ICarouselProps {
    children: ReactNode;
    MAX_VISIBILITY: number;
}

const Carousel = ({ children, MAX_VISIBILITY }: ICarouselProps) => {
    const [active, setActive] = useState(2);
    const count = React.Children.count(children);

    return (
        <div className='carousel'>
            {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}>Prev</button>}
            {React.Children.map(children, (child, i) => (
                <div className='card-container' style={{
                    '--active': i === active ? 1 : 0.6,
                    '--offset': (active - i) / 3,
                    '--direction': Math.sign(active - i),
                    '--abs-offset': Math.abs(active - i) / 3,
                    'pointer-events': active === i ? 'auto' : 'none',
                    'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
                    'display': 'block',
                } as React.CSSProperties}>
                    {child}
                </div>
            ))}
            {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}>Next</button>}
        </div>
    );
};
export default Carousel;