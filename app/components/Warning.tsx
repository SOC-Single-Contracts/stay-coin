import React from 'react'

const Warning = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div
                style={{ background: 'rgba(225, 49, 34, 0.08)' }}
                className="border border-primary flex flex-col gap-3 sm:gap-5 rounded-3xl p-3 sm:p-5 mb-3 w-full max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto"
            >

                <p>RISK WARNING: Trading Cryptocurrencies is highly speculative, carries a level of risk and may not be suitable for all investors. You may lose some or all of your invested capital, therefore you should not speculate with capital that you cannot afford to lose. The content on this site should not be considered investment advice. Investing is speculative. When investing your capital is at risk.
                    We do not allow users of these countries to participate in the presale: The information on this site is not intended for residents of Afghanistan, Benin, Bhutan, China, Crimea region, Cuba, Iran, Iraq, Syria, USA, Vatican City, or for use by any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.</p>
            </div>
        </div>
    )
}

export default Warning
