import React from 'react';
import ContentLoader from 'react-content-loader';

function PizzaLoadingBlock() {
    return (
        <ContentLoader
            speed={2}
            width={300}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="141" cy="130" r="121" />
            <rect x="0" y="268" rx="10" ry="10" width="274" height="35" />
            <rect x="0" y="318" rx="10" ry="10" width="135" height="40" />
            <rect x="141" y="318" rx="10" ry="10" width="135" height="40" />
            <rect x="0" y="363" rx="10" ry="10" width="90" height="40" />
            <rect x="93" y="363" rx="10" ry="10" width="90" height="40" />
            <rect x="186" y="363" rx="10" ry="10" width="90" height="40" />
            <rect x="0" y="410" rx="0" ry="0" width="123" height="35" />
            <rect x="166" y="408" rx="10" ry="10" width="110" height="44" />
        </ContentLoader>
    )
}

export default PizzaLoadingBlock;
