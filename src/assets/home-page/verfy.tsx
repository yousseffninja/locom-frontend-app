import * as React from "react"
const Verfy = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={17}
        height={13}
        fill="none"
        {...props}
    >
        <path
            fill="url(#a)"
            d="M15.842 1.008a1.147 1.147 0 0 1 0 1.621l-9.159 9.158a1.147 1.147 0 0 1-1.62 0L.483 7.208a1.147 1.147 0 0 1 1.621-1.62l3.77 3.767 8.35-8.347a1.147 1.147 0 0 1 1.621 0h-.003Z"
        />
        <defs>
            <linearGradient
                id="a"
                x1={15.716}
                x2={-1.24}
                y1={12.123}
                y2={7.914}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#4563FF" />
                <stop offset={1} stopColor="#58AFFF" />
            </linearGradient>
        </defs>
    </svg>
)
export default Verfy
