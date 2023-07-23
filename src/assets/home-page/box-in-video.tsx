import * as React from "react"
const BoxInVideo = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={216}
        height={194}
        fill="none"
        {...props}
    >
        <rect
            width={193.074}
            height={215.442}
            x={215.759}
            y={0.174}
            fill="url(#a)"
            rx={23.546}
            transform="rotate(90 215.759 .174)"
        />
        <defs>
            <linearGradient
                id="a"
                x1={403.273}
                x2={191.796}
                y1={215.616}
                y2={182.015}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#4563FF" />
                <stop offset={1} stopColor="#58AFFF" />
            </linearGradient>
        </defs>
    </svg>
)
export default BoxInVideo
