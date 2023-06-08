import { FC, cloneElement } from 'react'

export enum Types {
  arrow = 'arrow',
  close = 'close',
  walls = 'walls',
  wallsActive = 'wallsActive',
  floor = 'floor',
  floorActive = 'floorActive',
  roof = 'roof',
  roofActive = 'roofActive',
  logo = 'logo'
}

const icons = {
  [Types.logo]: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200.001"
      height="106.374"
      viewBox="0 0 200.001 106.374"
    >
      <path
        d="M700.87,206.576a19.739,19.739,0,0,0,3.543,5.171h5.855a1.217,1.217,0,0,0-.78-1.888c-.453-.162-2.8-1.234-3.066-4.994-.106-1.361-.563-4.274-.634-6.48-2.263,2.906-4.457,6.3-4.915,8.192"
        transform="translate(-549.662 -155.584)"
        fill="#232f61"
      />
      <path
        d="M339.5,201.3c.009,3.489,3.437,8.36,3.437,8.36h9.292l.205-.283a1.66,1.66,0,0,0-.954-2.815c-.768-.157-2.069-1.935-.977-7.954.114-.6.414-1.907.662-2.882A36.467,36.467,0,0,0,339.5,201.3"
        transform="translate(-266.256 -153.498)"
        fill="#232f61"
      />
      <path
        d="M499.429,168.143a42.675,42.675,0,0,0,8.032,9.555h10.651c.438-.874.973-2.729-1.769-3.586-.634-.181-2.956-2.16-3.437-9.029a35.176,35.176,0,0,1,1.344-10.114,187.352,187.352,0,0,0-14.822,13.173"
        transform="translate(-391.681 -121.535)"
        fill="#232f61"
      />
      <path
        d="M629.311,113.169a.859.859,0,0,0-1.077-.546.763.763,0,1,0,.276,1.452c.516-.106.887-.516.8-.908m-7.98-1.361a2.383,2.383,0,0,1,2.078-1.6,2.02,2.02,0,0,1,1.694,1.042c1.174-.028,4.673-.33,5.368.42a2.006,2.006,0,0,0,1.107.736c1.253.33,3.547.22,4.462.378.324.063.4.114.457.24a4.621,4.621,0,0,1-.315,3.35c-.606,1.726-5.04,2.772-8.9,3.581-2.332.477-3.342,1.983-4.071,2.552-3.929,3.092-14.554,15.053-9.391,17.935,1.469.4,1.312,1.415.882,2.151h-5.888s-3.409-3.3-4.052-6.524c-1.312.708-3.7.818-3.881.971a8.842,8.842,0,0,0-2.207,3.016c-.06.181-.076.263.125.32,1.683.453,1.6,1.6,1.159,2.218h-8.362s-.4.02-.209-.382a6.564,6.564,0,0,0,.945-2.984,3.833,3.833,0,0,0-.248-1.21c-1.978-4.986-1.927-10.015,0-12.891,3.065-4.621,8.872-7.921,27.69-12.891l-.5,1.978c.492.02,1.2-.22,1.316-.516l.753-1.892Z"
        transform="translate(-463.194 -86.431)"
        fill="#232f61"
      />
      <path
        d="M341.558,3.465a1.186,1.186,0,0,0-2.332-.286,1.186,1.186,0,0,0,2.332.286M254.242,24.636c0-.22-.114-.311-.343-.067-.367.386-.78,1.368-1.43,1.2-.457-.106-1.2-.66-1.292-2.116-.129-2.17.453-10.44,13.34-14.317,10.282-6.095,31.2-3.146,39.99-4.062,9.359-.967,13.506-1.543,17.52-2.434l-.835,3.048c.3-.052,1.415-.354,1.631-.841l.958-2.332A3.461,3.461,0,0,1,326.771.4a3.958,3.958,0,0,1,3.122,1.38L334.87.731A43.837,43.837,0,0,1,340.119,0c2.407-.067,2.649.343,3.212.764.882.688,1.258.755,4.418.531,1.426-.114,4.185-.35,4.315-.378a1.069,1.069,0,0,1,1.234.444,9.475,9.475,0,0,1,.485,1.051,4.54,4.54,0,0,1-.354,3.007.945.945,0,0,1-.268.617A9.859,9.859,0,0,1,349.745,7.4c-1.245.306-3.948.76-6.293,1.09-.343.052-.257.578.162.755,1.316.531,5.23.091,5.926-.024.863-.157,2-.393,2.6-.516.17-.028.382.229.419.492.039.334.067.794.076.984a1.35,1.35,0,0,1-.71,1.118,40.3,40.3,0,0,1-8.082,3.432c-16.63,5.706-37.177,23.193-49.145,36.308a.814.814,0,0,0-.209,1.033c.058.186.134.343.233.587,2.675.693,2.088,2.453,1.726,3.1l-.22.4H286.071s-2.86-3.385-1.111-9.22c.662-2.233,2.464-6.587,2.68-7.018.166-.382-.734-.64-2.412-.64-12.047,0-22.131,8.753-25.94,12.552-.572.559-.347.841.032.94,2.431.64,2.451,2.38,1.8,3.385H250.255c-.492-.488-2.8-3.083-2.64-8.351.071-2.567,7.484-13.05,7.629-15.756.263-4.46-.954-3.9-1.01-7.417"
        transform="translate(-194.188 0.003)"
        fill="#232f61"
      />
      <path
        d="M20.54,346.847c-15.424,0-22.655-3.7-20-16.285L5.621,306.63h16.2L16.73,330.688c-.954,4.494,1.474,5.933,6.045,5.933s7.924-1.486,8.91-6.114l5.048-23.877H52.591l-5.107,24.11c-2.621,12.4-11.48,16.11-26.947,16.11"
        transform="translate(-0.004 -240.476)"
        fill="#ea4740"
      />
      <path
        d="M504.3,345.482H476.49l2.088-9.89h21.474c2.518,0,3.914-.6,4.082-2.257.157-1.44-.753-2.339-3.113-2.339h-9.487c-8.362,0-12.9-5.8-10.936-13.255,2.294-8.675,8.374-11.152,15.409-11.152h27.743l-2.1,9.89H499.918c-2.708,0-3.527.854-3.672,2.123-.138,1.223.8,2.26,2.755,2.26h10.08c8.753,0,12.858,4.136,10.856,12.863-1.7,7.443-6.574,11.754-15.633,11.754"
        transform="translate(-373.691 -240.444)"
        fill="#ea4740"
      />
      <path
        d="M729.293,319.594c.414-1.989-.3-3.092-2.27-3.092H702.117l2.093-9.875h29.922c8.3,0,12.669,5.439,10.785,14.33l-5.2,24.556H706.042c-7.866,0-11.676-5.808-10.442-12.815,1.111-6.418,5.769-11.8,15.065-11.8h18.352l.276-1.3Zm-2.2,10.412H715.915c-2.826,0-4.267.98-4.492,2.667-.224,1.644.852,2.954,3.266,2.954H725.9l1.191-5.62Z"
        transform="translate(-545.35 -240.473)"
        fill="#ea4740"
      />
      <path
        d="M267.713,316.1H257.64l-1.7,8.034h10.116a4.393,4.393,0,0,0,4.654-4.03c.362-2.429-.772-4.006-2.995-4.006m9.611,15.08,7.862,14.306H266.4l-5.107-11.86h-7.357L251.42,345.48H235.55l8.233-38.89h31.274c9.935,0,12.919,6.7,11.689,13.586-.958,5.368-3.743,9.163-9.426,11"
        transform="translate(-184.732 -240.444)"
        fill="#ea4740"
      />
    </svg>
  ),
  [Types.roofActive]: (
    <svg
      width="280"
      height="330"
      viewBox="0 0 280 330"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.242188" width="280" height="280" fill="#262F5E" />
      <g opacity="0.18">
        <line
          y1="-0.18577"
          x2="476.326"
          y2="-0.18577"
          transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 31.729 -111.758)"
          stroke="white"
          strokeWidth="0.371541"
        />
        <line
          y1="-0.18577"
          x2="476.326"
          y2="-0.18577"
          transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 84.6711 -85.2305)"
          stroke="white"
          strokeWidth="0.371541"
        />
        <line
          y1="-0.18577"
          x2="476.326"
          y2="-0.18577"
          transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 137.95 -58.543)"
          stroke="white"
          strokeWidth="0.371541"
        />
        <line
          y1="-0.18577"
          x2="476.326"
          y2="-0.18577"
          transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 191.23 -31.8496)"
          stroke="white"
          strokeWidth="0.371541"
        />
      </g>
      <g opacity="0.18">
        <line
          y1="-0.18577"
          x2="476.326"
          y2="-0.18577"
          transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 240.971 -6.92578)"
          stroke="white"
          strokeWidth="0.371541"
        />
        <line
          y1="-0.18577"
          x2="476.326"
          y2="-0.18577"
          transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 293.913 19.5996)"
          stroke="white"
          strokeWidth="0.371541"
        />
        <line
          y1="-0.18577"
          x2="476.326"
          y2="-0.18577"
          transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 347.193 46.293)"
          stroke="white"
          strokeWidth="0.371541"
        />
        <line
          y1="-0.18577"
          x2="476.326"
          y2="-0.18577"
          transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 400.472 72.9805)"
          stroke="white"
          strokeWidth="0.371541"
        />
        <line
          y1="-0.18577"
          x2="476.326"
          y2="-0.18577"
          transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 453.414 99.5059)"
          stroke="white"
          strokeWidth="0.371541"
        />
        <line
          y1="-0.18577"
          x2="476.326"
          y2="-0.18577"
          transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 506.693 126.199)"
          stroke="white"
          strokeWidth="0.371541"
        />
        <line
          y1="-0.18577"
          x2="476.326"
          y2="-0.18577"
          transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 559.973 152.889)"
          stroke="white"
          strokeWidth="0.371541"
        />
      </g>
      <g opacity="0.18">
        <line
          y1="-0.18577"
          x2="793.929"
          y2="-0.18577"
          transform="matrix(-0.894072 -0.447923 0.834991 -0.550264 739.959 244.922)"
          stroke="white"
          strokeWidth="0.371541"
        />
        <line
          y1="-0.18577"
          x2="793.929"
          y2="-0.18577"
          transform="matrix(-0.894072 -0.447923 0.834991 -0.550264 674.079 288.336)"
          stroke="white"
          strokeWidth="0.371541"
        />
        <line
          y1="-0.18577"
          x2="793.929"
          y2="-0.18577"
          transform="matrix(-0.894072 -0.447923 0.834991 -0.550264 608.618 331.475)"
          stroke="white"
          strokeWidth="0.371541"
        />
        <line
          y1="-0.18577"
          x2="793.929"
          y2="-0.18577"
          transform="matrix(-0.894072 -0.447923 0.834991 -0.550264 542.739 374.889)"
          stroke="white"
          strokeWidth="0.371541"
        />
        <line
          y1="-0.18577"
          x2="793.929"
          y2="-0.18577"
          transform="matrix(-0.894072 -0.447923 0.834991 -0.550264 476.859 418.303)"
          stroke="white"
          strokeWidth="0.371541"
        />
        <line
          y1="-0.18577"
          x2="793.929"
          y2="-0.18577"
          transform="matrix(-0.894072 -0.447923 0.834991 -0.550264 411.4 461.441)"
          stroke="white"
          strokeWidth="0.371541"
        />
        <line
          y1="-0.18577"
          x2="793.929"
          y2="-0.18577"
          transform="matrix(-0.894072 -0.447923 0.834991 -0.550264 345.521 504.855)"
          stroke="white"
          strokeWidth="0.371541"
        />
      </g>
      <g filter="url(#filter0_d_484_4581)">
        <path
          d="M249.2 182.443V134.443L188.4 157.243L249.2 182.443Z"
          fill="white"
        />
        <path
          d="M39 166.443V116.643L72.8 70.2432L103.4 141.243L39 166.443Z"
          fill="white"
        />
        <path
          d="M39.2 166.043L164.4 224.243L249 182.243L185.8 156.443L164.4 164.443L103.8 140.243L39.2 166.043Z"
          fill="white"
          stroke="#232F61"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M41 116.043L103 140.243L85 100.243L41 116.043Z"
          fill="white"
          stroke="#232F61"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M191 114.243L104.2 142.243L73 70.2432L164.6 60.2432L191 114.243Z"
          fill="#EA4740"
          stroke="#232F61"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M190 114.243L103 142.243L163.6 166.243L249 134.243L190 114.243Z"
          fill="#EA4740"
          stroke="#232F61"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M104.2 142.843L72.8 70.2432L39 115.643V165.443L165 224.243V166.843L104.2 142.843Z"
          stroke="#232F61"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M249 182.643L165 224.243V165.643L249 134.243V182.643Z"
          stroke="#232F61"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_484_4581"
          x="20"
          y="43.2432"
          width="248"
          height="202"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="9" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.22 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_484_4581"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_484_4581"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  ),
  [Types.roof]: (
    <svg
      width="280"
      height="281"
      viewBox="0 0 280 281"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.242188" width="280" height="280" fill="#F4F4F4" />
      <mask
        id="mask0_484_4338"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="280"
        height="281"
      >
        <rect
          x="1"
          y="1.24219"
          width="278"
          height="278"
          fill="#F4F4F4"
          stroke="#262F5E"
          strokeWidth="2"
        />
      </mask>
      <g mask="url(#mask0_484_4338)">
        <g opacity="0.18">
          <line
            y1="-0.18577"
            x2="476.326"
            y2="-0.18577"
            transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 50.9484 -190.522)"
            stroke="#262F5E"
            strokeWidth="0.371541"
          />
          <line
            y1="-0.18577"
            x2="476.326"
            y2="-0.18577"
            transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 103.891 -163.995)"
            stroke="#262F5E"
            strokeWidth="0.371541"
          />
          <line
            y1="-0.18577"
            x2="476.326"
            y2="-0.18577"
            transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 157.17 -137.307)"
            stroke="#262F5E"
            strokeWidth="0.371541"
          />
          <line
            y1="-0.18577"
            x2="476.326"
            y2="-0.18577"
            transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 210.449 -110.614)"
            stroke="#262F5E"
            strokeWidth="0.371541"
          />
        </g>
        <g opacity="0.18">
          <line
            y1="-0.18577"
            x2="476.326"
            y2="-0.18577"
            transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 260.19 -85.6919)"
            stroke="#262F5E"
            strokeWidth="0.371541"
          />
          <line
            y1="-0.18577"
            x2="476.326"
            y2="-0.18577"
            transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 313.132 -59.1665)"
            stroke="#262F5E"
            strokeWidth="0.371541"
          />
          <line
            y1="-0.18577"
            x2="476.326"
            y2="-0.18577"
            transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 366.411 -32.4731)"
            stroke="#262F5E"
            strokeWidth="0.371541"
          />
          <line
            y1="-0.18577"
            x2="476.326"
            y2="-0.18577"
            transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 419.69 -5.78564)"
            stroke="#262F5E"
            strokeWidth="0.371541"
          />
          <line
            y1="-0.18577"
            x2="476.326"
            y2="-0.18577"
            transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 472.633 20.7397)"
            stroke="#262F5E"
            strokeWidth="0.371541"
          />
          <line
            y1="-0.18577"
            x2="476.326"
            y2="-0.18577"
            transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 525.912 47.4331)"
            stroke="#262F5E"
            strokeWidth="0.371541"
          />
          <line
            y1="-0.18577"
            x2="476.326"
            y2="-0.18577"
            transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 579.192 74.1226)"
            stroke="#262F5E"
            strokeWidth="0.371541"
          />
        </g>
        <g opacity="0.18">
          <line
            y1="-0.18577"
            x2="793.929"
            y2="-0.18577"
            transform="matrix(-0.894072 -0.447923 0.834991 -0.550264 759.178 166.156)"
            stroke="#262F5E"
            strokeWidth="0.371541"
          />
          <line
            y1="-0.18577"
            x2="793.929"
            y2="-0.18577"
            transform="matrix(-0.894072 -0.447923 0.834991 -0.550264 693.298 209.57)"
            stroke="#262F5E"
            strokeWidth="0.371541"
          />
          <line
            y1="-0.18577"
            x2="793.929"
            y2="-0.18577"
            transform="matrix(-0.894072 -0.447923 0.834991 -0.550264 627.837 252.708)"
            stroke="#262F5E"
            strokeWidth="0.371541"
          />
          <line
            y1="-0.18577"
            x2="793.929"
            y2="-0.18577"
            transform="matrix(-0.894072 -0.447923 0.834991 -0.550264 561.958 296.123)"
            stroke="#262F5E"
            strokeWidth="0.371541"
          />
          <line
            y1="-0.18577"
            x2="793.929"
            y2="-0.18577"
            transform="matrix(-0.894072 -0.447923 0.834991 -0.550264 496.078 339.537)"
            stroke="#262F5E"
            strokeWidth="0.371541"
          />
          <line
            y1="-0.18577"
            x2="793.929"
            y2="-0.18577"
            transform="matrix(-0.894072 -0.447923 0.834991 -0.550264 430.619 382.675)"
            stroke="#262F5E"
            strokeWidth="0.371541"
          />
          <line
            y1="-0.18577"
            x2="793.929"
            y2="-0.18577"
            transform="matrix(-0.894072 -0.447923 0.834991 -0.550264 364.74 426.089)"
            stroke="#262F5E"
            strokeWidth="0.371541"
          />
        </g>
      </g>
      <path
        d="M249.2 182.442V134.442L188.4 157.242L249.2 182.442Z"
        fill="white"
      />
      <path
        d="M39 166.442V116.642L72.8 70.2422L103.4 141.242L39 166.442Z"
        fill="white"
      />
      <path
        d="M39.2 166.042L164.4 224.242L249 182.242L185.8 156.442L164.4 164.442L103.8 140.242L39.2 166.042Z"
        fill="white"
        stroke="#232F61"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M41 116.042L103 140.242L85 100.242L41 116.042Z"
        fill="white"
        stroke="#232F61"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M191 114.242L104.2 142.242L73 70.2422L164.6 60.2422L191 114.242Z"
        fill="#EA4740"
        stroke="#232F61"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M190 114.242L103 142.242L163.6 166.242L249 134.242L190 114.242Z"
        fill="#EA4740"
        stroke="#232F61"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M104.2 142.842L72.8 70.2422L39 115.642V165.442L165 224.242V166.842L104.2 142.842Z"
        stroke="#232F61"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M249 182.642L165 224.242V165.642L249 134.242V182.642Z"
        stroke="#232F61"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  [Types.floorActive]: (
    <svg
      width="280"
      height="330"
      viewBox="0 0 280 330"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.242188" width="280" height="280" fill="#262F5E" />
      <g opacity="0.18">
        <line
          y1="-0.18577"
          x2="476.326"
          y2="-0.18577"
          transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 31.7288 -111.758)"
          stroke="white"
          strokeWidth="0.371541"
        />
        <line
          y1="-0.18577"
          x2="476.326"
          y2="-0.18577"
          transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 84.6709 -85.2305)"
          stroke="white"
          strokeWidth="0.371541"
        />
        <line
          y1="-0.18577"
          x2="476.326"
          y2="-0.18577"
          transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 137.95 -58.543)"
          stroke="white"
          strokeWidth="0.371541"
        />
        <line
          y1="-0.18577"
          x2="476.326"
          y2="-0.18577"
          transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 191.229 -31.8496)"
          stroke="white"
          strokeWidth="0.371541"
        />
      </g>
      <g opacity="0.18">
        <line
          y1="-0.18577"
          x2="476.326"
          y2="-0.18577"
          transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 240.971 -6.92578)"
          stroke="white"
          strokeWidth="0.371541"
        />
        <line
          y1="-0.18577"
          x2="476.326"
          y2="-0.18577"
          transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 293.913 19.5996)"
          stroke="white"
          strokeWidth="0.371541"
        />
        <line
          y1="-0.18577"
          x2="476.326"
          y2="-0.18577"
          transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 347.192 46.293)"
          stroke="white"
          strokeWidth="0.371541"
        />
        <line
          y1="-0.18577"
          x2="476.326"
          y2="-0.18577"
          transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 400.471 72.9805)"
          stroke="white"
          strokeWidth="0.371541"
        />
        <line
          y1="-0.18577"
          x2="476.326"
          y2="-0.18577"
          transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 453.414 99.5059)"
          stroke="white"
          strokeWidth="0.371541"
        />
        <line
          y1="-0.18577"
          x2="476.326"
          y2="-0.18577"
          transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 506.693 126.199)"
          stroke="white"
          strokeWidth="0.371541"
        />
        <line
          y1="-0.18577"
          x2="476.326"
          y2="-0.18577"
          transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 559.973 152.889)"
          stroke="white"
          strokeWidth="0.371541"
        />
      </g>
      <g opacity="0.18">
        <line
          y1="-0.18577"
          x2="793.929"
          y2="-0.18577"
          transform="matrix(-0.894072 -0.447923 0.834991 -0.550264 739.959 244.922)"
          stroke="white"
          strokeWidth="0.371541"
        />
        <line
          y1="-0.18577"
          x2="793.929"
          y2="-0.18577"
          transform="matrix(-0.894072 -0.447923 0.834991 -0.550264 674.079 288.336)"
          stroke="white"
          strokeWidth="0.371541"
        />
        <line
          y1="-0.18577"
          x2="793.929"
          y2="-0.18577"
          transform="matrix(-0.894072 -0.447923 0.834991 -0.550264 608.618 331.475)"
          stroke="white"
          strokeWidth="0.371541"
        />
        <line
          y1="-0.18577"
          x2="793.929"
          y2="-0.18577"
          transform="matrix(-0.894072 -0.447923 0.834991 -0.550264 542.739 374.889)"
          stroke="white"
          strokeWidth="0.371541"
        />
        <line
          y1="-0.18577"
          x2="793.929"
          y2="-0.18577"
          transform="matrix(-0.894072 -0.447923 0.834991 -0.550264 476.859 418.303)"
          stroke="white"
          strokeWidth="0.371541"
        />
        <line
          y1="-0.18577"
          x2="793.929"
          y2="-0.18577"
          transform="matrix(-0.894072 -0.447923 0.834991 -0.550264 411.4 461.441)"
          stroke="white"
          strokeWidth="0.371541"
        />
        <line
          y1="-0.18577"
          x2="793.929"
          y2="-0.18577"
          transform="matrix(-0.894072 -0.447923 0.834991 -0.550264 345.521 504.855)"
          stroke="white"
          strokeWidth="0.371541"
        />
      </g>
      <g filter="url(#filter0_d_484_4541)">
        <path
          d="M249.2 182.442V134.442L188.4 157.242L249.2 182.442Z"
          fill="white"
        />
        <path
          d="M39 166.442V116.642L72.8 70.2422L103.4 141.242L39 166.442Z"
          fill="white"
        />
        <path
          d="M39.2 166.042L164.4 224.242L249 182.242L185.8 156.442L164.4 164.442L103.8 140.242L39.2 166.042Z"
          fill="#EA4740"
          stroke="#232F61"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M41 116.042L103 140.242L85 100.242L41 116.042Z"
          fill="white"
          stroke="#232F61"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M191 114.242L104.2 142.242L73 70.2422L164.6 60.2422L191 114.242Z"
          fill="white"
          stroke="#232F61"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M190 114.242L103 142.242L163.6 166.242L249 134.242L190 114.242Z"
          fill="white"
          stroke="#232F61"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M104.2 142.842L72.8 70.2422L39 115.642V165.442L165 224.242V166.842L104.2 142.842Z"
          stroke="#232F61"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M249 182.642L165 224.242V165.642L249 134.242V182.642Z"
          stroke="#232F61"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_484_4541"
          x="20"
          y="43.2422"
          width="248"
          height="202"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="9" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.22 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_484_4541"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_484_4541"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  ),
  [Types.floor]: (
    <svg
      width="280"
      height="281"
      viewBox="0 0 280 281"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.242188" width="280" height="280" fill="#F4F4F4" />
      <mask
        id="mask0_484_4297"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="280"
        height="281"
      >
        <rect
          x="1"
          y="1.24219"
          width="278"
          height="278"
          fill="#F4F4F4"
          stroke="#262F5E"
          strokeWidth="2"
        />
      </mask>
      <g mask="url(#mask0_484_4297)">
        <g opacity="0.18">
          <line
            y1="-0.18577"
            x2="476.326"
            y2="-0.18577"
            transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 50.9484 -190.522)"
            stroke="#262F5E"
            strokeWidth="0.371541"
          />
          <line
            y1="-0.18577"
            x2="476.326"
            y2="-0.18577"
            transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 103.891 -163.995)"
            stroke="#262F5E"
            strokeWidth="0.371541"
          />
          <line
            y1="-0.18577"
            x2="476.326"
            y2="-0.18577"
            transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 157.17 -137.307)"
            stroke="#262F5E"
            strokeWidth="0.371541"
          />
          <line
            y1="-0.18577"
            x2="476.326"
            y2="-0.18577"
            transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 210.449 -110.614)"
            stroke="#262F5E"
            strokeWidth="0.371541"
          />
        </g>
        <g opacity="0.18">
          <line
            y1="-0.18577"
            x2="476.326"
            y2="-0.18577"
            transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 260.19 -85.6919)"
            stroke="#262F5E"
            strokeWidth="0.371541"
          />
          <line
            y1="-0.18577"
            x2="476.326"
            y2="-0.18577"
            transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 313.132 -59.1665)"
            stroke="#262F5E"
            strokeWidth="0.371541"
          />
          <line
            y1="-0.18577"
            x2="476.326"
            y2="-0.18577"
            transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 366.411 -32.4731)"
            stroke="#262F5E"
            strokeWidth="0.371541"
          />
          <line
            y1="-0.18577"
            x2="476.326"
            y2="-0.18577"
            transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 419.69 -5.78564)"
            stroke="#262F5E"
            strokeWidth="0.371541"
          />
          <line
            y1="-0.18577"
            x2="476.326"
            y2="-0.18577"
            transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 472.633 20.7397)"
            stroke="#262F5E"
            strokeWidth="0.371541"
          />
          <line
            y1="-0.18577"
            x2="476.326"
            y2="-0.18577"
            transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 525.912 47.4331)"
            stroke="#262F5E"
            strokeWidth="0.371541"
          />
          <line
            y1="-0.18577"
            x2="476.326"
            y2="-0.18577"
            transform="matrix(-0.834991 0.550264 -0.894072 -0.447923 579.192 74.1226)"
            stroke="#262F5E"
            strokeWidth="0.371541"
          />
        </g>
        <g opacity="0.18">
          <line
            y1="-0.18577"
            x2="793.929"
            y2="-0.18577"
            transform="matrix(-0.894072 -0.447923 0.834991 -0.550264 759.178 166.156)"
            stroke="#262F5E"
            strokeWidth="0.371541"
          />
          <line
            y1="-0.18577"
            x2="793.929"
            y2="-0.18577"
            transform="matrix(-0.894072 -0.447923 0.834991 -0.550264 693.298 209.57)"
            stroke="#262F5E"
            strokeWidth="0.371541"
          />
          <line
            y1="-0.18577"
            x2="793.929"
            y2="-0.18577"
            transform="matrix(-0.894072 -0.447923 0.834991 -0.550264 627.837 252.708)"
            stroke="#262F5E"
            strokeWidth="0.371541"
          />
          <line
            y1="-0.18577"
            x2="793.929"
            y2="-0.18577"
            transform="matrix(-0.894072 -0.447923 0.834991 -0.550264 561.958 296.123)"
            stroke="#262F5E"
            strokeWidth="0.371541"
          />
          <line
            y1="-0.18577"
            x2="793.929"
            y2="-0.18577"
            transform="matrix(-0.894072 -0.447923 0.834991 -0.550264 496.078 339.537)"
            stroke="#262F5E"
            strokeWidth="0.371541"
          />
          <line
            y1="-0.18577"
            x2="793.929"
            y2="-0.18577"
            transform="matrix(-0.894072 -0.447923 0.834991 -0.550264 430.619 382.675)"
            stroke="#262F5E"
            strokeWidth="0.371541"
          />
          <line
            y1="-0.18577"
            x2="793.929"
            y2="-0.18577"
            transform="matrix(-0.894072 -0.447923 0.834991 -0.550264 364.74 426.089)"
            stroke="#262F5E"
            strokeWidth="0.371541"
          />
        </g>
      </g>
      <path
        d="M249.2 182.442V134.442L188.4 157.242L249.2 182.442Z"
        fill="white"
      />
      <path
        d="M39 166.442V116.642L72.8 70.2422L103.4 141.242L39 166.442Z"
        fill="white"
      />
      <path
        d="M39.2 166.042L164.4 224.242L249 182.242L185.8 156.442L164.4 164.442L103.8 140.242L39.2 166.042Z"
        fill="#EA4740"
        stroke="#232F61"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M41 116.042L103 140.242L85 100.242L41 116.042Z"
        fill="white"
        stroke="#232F61"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M191 114.242L104.2 142.242L73 70.2422L164.6 60.2422L191 114.242Z"
        fill="white"
        stroke="#232F61"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M190 114.242L103 142.242L163.6 166.242L249 134.242L190 114.242Z"
        fill="white"
        stroke="#232F61"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M104.2 142.842L72.8 70.2422L39 115.642V165.442L165 224.242V166.842L104.2 142.842Z"
        stroke="#232F61"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M249 182.642L165 224.242V165.642L249 134.242V182.642Z"
        stroke="#232F61"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  [Types.wallsActive]: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="275"
      height="275"
      viewBox="0 0 275 275"
    >
      <defs>
        <clipPath id="clip-SPRK_default_preset_name_custom_1">
          <rect width="275" height="275" />
        </clipPath>
      </defs>
      <g clipPath="url(#clip-SPRK_default_preset_name_custom_1)">
        <rect width="275" height="275" fill="#fff" />
        <g
          id="Group_123"
          data-name="Group 123"
          transform="translate(-1.166 -1.325)"
        >
          <rect
            id="Rectangle_1"
            data-name="Rectangle 1"
            width="280"
            height="280"
            transform="translate(0 0.242)"
            fill="#262f5e"
          />
          <g id="Group_1" data-name="Group 1" opacity="0.18">
            <line
              id="Line_1"
              data-name="Line 1"
              x1="397.727"
              y2="262.103"
              transform="translate(-365.834 -111.675)"
              fill="none"
              stroke="#fff"
              strokeWidth="0.372"
            />
            <line
              id="Line_2"
              data-name="Line 2"
              x1="397.727"
              y2="262.103"
              transform="translate(-312.891 -85.148)"
              fill="none"
              stroke="#fff"
              strokeWidth="0.372"
            />
            <line
              id="Line_3"
              data-name="Line 3"
              x1="397.727"
              y2="262.103"
              transform="translate(-259.612 -58.46)"
              fill="none"
              stroke="#fff"
              strokeWidth="0.372"
            />
            <line
              id="Line_4"
              data-name="Line 4"
              x1="397.727"
              y2="262.103"
              transform="translate(-206.332 -31.767)"
              fill="none"
              stroke="#fff"
              strokeWidth="0.372"
            />
          </g>
          <g id="Group_2" data-name="Group 2" opacity="0.18">
            <line
              id="Line_5"
              data-name="Line 5"
              x1="397.727"
              y2="262.103"
              transform="translate(-156.592 -6.845)"
              fill="none"
              stroke="#fff"
              strokeWidth="0.372"
            />
            <line
              id="Line_6"
              data-name="Line 6"
              x1="397.727"
              y2="262.103"
              transform="translate(-103.649 19.68)"
              fill="none"
              stroke="#fff"
              strokeWidth="0.372"
            />
            <line
              id="Line_7"
              data-name="Line 7"
              x1="397.727"
              y2="262.103"
              transform="translate(-50.37 46.374)"
              fill="none"
              stroke="#fff"
              strokeWidth="0.372"
            />
            <line
              id="Line_8"
              data-name="Line 8"
              x1="397.727"
              y2="262.103"
              transform="translate(2.909 73.061)"
              fill="none"
              stroke="#fff"
              strokeWidth="0.372"
            />
            <line
              id="Line_9"
              data-name="Line 9"
              x1="397.727"
              y2="262.103"
              transform="translate(55.851 99.587)"
              fill="none"
              stroke="#fff"
              strokeWidth="0.372"
            />
            <line
              id="Line_10"
              data-name="Line 10"
              x1="397.727"
              y2="262.103"
              transform="translate(109.131 126.28)"
              fill="none"
              stroke="#fff"
              strokeWidth="0.372"
            />
            <line
              id="Line_11"
              data-name="Line 11"
              x1="397.727"
              y2="262.103"
              transform="translate(162.41 152.969)"
              fill="none"
              stroke="#fff"
              strokeWidth="0.372"
            />
          </g>
          <g id="Group_3" data-name="Group 3" opacity="0.18">
            <line
              id="Line_12"
              data-name="Line 12"
              x1="709.828"
              y1="355.617"
              transform="translate(29.975 -110.595)"
              fill="none"
              stroke="#fff"
              strokeWidth="0.372"
            />
            <line
              id="Line_13"
              data-name="Line 13"
              x1="709.828"
              y1="355.617"
              transform="translate(-35.905 -67.181)"
              fill="none"
              stroke="#fff"
              strokeWidth="0.372"
            />
            <line
              id="Line_14"
              data-name="Line 14"
              x1="709.828"
              y1="355.617"
              transform="translate(-101.367 -24.042)"
              fill="none"
              stroke="#fff"
              strokeWidth="0.372"
            />
            <line
              id="Line_15"
              data-name="Line 15"
              x1="709.828"
              y1="355.617"
              transform="translate(-167.246 19.372)"
              fill="none"
              stroke="#fff"
              strokeWidth="0.372"
            />
            <line
              id="Line_16"
              data-name="Line 16"
              x1="709.828"
              y1="355.617"
              transform="translate(-233.126 62.786)"
              fill="none"
              stroke="#fff"
              strokeWidth="0.372"
            />
            <line
              id="Line_17"
              data-name="Line 17"
              x1="709.828"
              y1="355.617"
              transform="translate(-298.585 105.925)"
              fill="none"
              stroke="#fff"
              strokeWidth="0.372"
            />
            <line
              id="Line_18"
              data-name="Line 18"
              x1="709.828"
              y1="355.617"
              transform="translate(-364.464 149.339)"
              fill="none"
              stroke="#fff"
              strokeWidth="0.372"
            />
          </g>
          <g id="Group_4" data-name="Group 4">
            <path
              id="Path_1"
              data-name="Path 1"
              d="M249.2,182.442v-48l-60.8,22.8Z"
              fill="#fff"
            />
            <path
              id="Path_2"
              data-name="Path 2"
              d="M39,166.442v-49.8l33.8-46.4,30.6,71Z"
              fill="#fff"
            />
            <path
              id="Path_3"
              data-name="Path 3"
              d="M39.2,166.042l125.2,58.2,84.6-42-63.2-25.8-21.4,8-60.6-24.2Z"
              fill="#fff"
              stroke="#232f61"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              id="Path_4"
              data-name="Path 4"
              d="M41,116.042l65,26.7-20-43Z"
              fill="#fff"
              stroke="#232f61"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              id="Path_5"
              data-name="Path 5"
              d="M191,114.242l-85.5,27.5L73,70.242l91.6-10Z"
              fill="#fff"
              stroke="#232f61"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              id="Path_6"
              data-name="Path 6"
              d="M190,114.242l-87,28,60.6,24,85.4-32Z"
              fill="#fff"
              stroke="#232f61"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              id="Path_7"
              data-name="Path 7"
              d="M165,166.842l-126-51.6v50.2l126,58.8Z"
              fill="#ea4740"
              stroke="#232f61"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              id="Path_8"
              data-name="Path 8"
              d="M106.2,142.842l-33.4-72.6L39,115.642v49.8l126,58.8v-57.4Z"
              fill="none"
              stroke="#232f61"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              id="Path_9"
              data-name="Path 9"
              d="M249,182.642l-84,41.6v-58.6l84-31.4Z"
              fill="#ea4740"
              stroke="#232f61"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </g>
      </g>
    </svg>
  ),
  [Types.walls]: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="280"
      height="280"
      viewBox="0 0 280 280"
    >
      <defs>
        <clipPath id="clip-SPRK_default_preset_name_custom_1">
          <rect width="280" height="280" />
        </clipPath>
      </defs>
      <g
        id="SPRK_default_preset_name_custom_1"
        data-name="SPRK_default_preset_name_custom – 1"
        clipPath="url(#clip-SPRK_default_preset_name_custom_1)"
      >
        <rect width="280" height="280" fill="#fff" />
        <g
          id="Group_123"
          data-name="Group 123"
          transform="translate(-0.387 -0.561)"
        >
          <rect
            id="Rectangle_1"
            data-name="Rectangle 1"
            width="279.387"
            height="280"
            transform="translate(1 0.561)"
            fill="#f4f4f4"
          />
          <g id="Group_4" data-name="Group 4" transform="translate(-82 -12)">
            <g
              id="Group_5"
              data-name="Group 5"
              transform="translate(0.37 0.08)"
            >
              <g
                id="Group_1"
                data-name="Group 1"
                transform="translate(-346.613 -190.439)"
                opacity="0.18"
              >
                <line
                  id="Line_1"
                  data-name="Line 1"
                  x1="397.727"
                  y2="262.103"
                  fill="none"
                  stroke="#262f5e"
                  strokeWidth="0.372"
                />
                <line
                  id="Line_2"
                  data-name="Line 2"
                  x1="397.727"
                  y2="262.103"
                  transform="translate(52.943 26.527)"
                  fill="none"
                  stroke="#262f5e"
                  strokeWidth="0.372"
                />
                <line
                  id="Line_3"
                  data-name="Line 3"
                  x1="397.727"
                  y2="262.103"
                  transform="translate(106.222 53.215)"
                  fill="none"
                  stroke="#262f5e"
                  strokeWidth="0.372"
                />
                <line
                  id="Line_4"
                  data-name="Line 4"
                  x1="397.727"
                  y2="262.103"
                  transform="translate(159.501 79.908)"
                  fill="none"
                  stroke="#262f5e"
                  strokeWidth="0.372"
                />
              </g>
              <g
                id="Group_2"
                data-name="Group 2"
                transform="translate(-138.076 -85.807)"
                opacity="0.18"
              >
                <line
                  id="Line_5"
                  data-name="Line 5"
                  x1="397.727"
                  y2="262.103"
                  fill="none"
                  stroke="#262f5e"
                  strokeWidth="0.372"
                />
                <line
                  id="Line_6"
                  data-name="Line 6"
                  x1="397.727"
                  y2="262.103"
                  transform="translate(52.942 26.525)"
                  fill="none"
                  stroke="#262f5e"
                  strokeWidth="0.372"
                />
                <line
                  id="Line_7"
                  data-name="Line 7"
                  x1="397.727"
                  y2="262.103"
                  transform="translate(106.221 53.219)"
                  fill="none"
                  stroke="#262f5e"
                  strokeWidth="0.372"
                />
                <line
                  id="Line_8"
                  data-name="Line 8"
                  x1="397.727"
                  y2="262.103"
                  transform="translate(159.5 79.906)"
                  fill="none"
                  stroke="#262f5e"
                  strokeWidth="0.372"
                />
                <line
                  id="Line_9"
                  data-name="Line 9"
                  x1="397.727"
                  y2="262.103"
                  transform="translate(212.443 106.432)"
                  fill="none"
                  stroke="#262f5e"
                  strokeWidth="0.372"
                />
                <line
                  id="Line_10"
                  data-name="Line 10"
                  x1="397.727"
                  y2="262.103"
                  transform="translate(265.722 133.125)"
                  fill="none"
                  stroke="#262f5e"
                  strokeWidth="0.372"
                />
                <line
                  id="Line_11"
                  data-name="Line 11"
                  x1="397.727"
                  y2="262.103"
                  transform="translate(319.002 159.814)"
                  fill="none"
                  stroke="#262f5e"
                  strokeWidth="0.372"
                />
              </g>
            </g>
            <g id="Group_3" data-name="Group 3" opacity="0.18">
              <line
                id="Line_12"
                data-name="Line 12"
                x1="709.828"
                y1="355.617"
                transform="translate(49.195 -189.358)"
                fill="none"
                stroke="#262f5e"
                strokeWidth="0.372"
              />
              <line
                id="Line_13"
                data-name="Line 13"
                x1="709.828"
                y1="355.617"
                transform="translate(-16.685 -145.944)"
                fill="none"
                stroke="#262f5e"
                strokeWidth="0.372"
              />
              <line
                id="Line_14"
                data-name="Line 14"
                x1="709.828"
                y1="355.617"
                transform="translate(-82.146 -102.806)"
                fill="none"
                stroke="#262f5e"
                strokeWidth="0.372"
              />
              <line
                id="Line_15"
                data-name="Line 15"
                x1="709.828"
                y1="355.617"
                transform="translate(-148.025 -59.391)"
                fill="none"
                stroke="#262f5e"
                strokeWidth="0.372"
              />
              <line
                id="Line_16"
                data-name="Line 16"
                x1="709.828"
                y1="355.617"
                transform="translate(-213.905 -15.977)"
                fill="none"
                stroke="#262f5e"
                strokeWidth="0.372"
              />
              <line
                id="Line_17"
                data-name="Line 17"
                x1="709.828"
                y1="355.617"
                transform="translate(-279.364 27.161)"
                fill="none"
                stroke="#262f5e"
                strokeWidth="0.372"
              />
              <line
                id="Line_18"
                data-name="Line 18"
                x1="709.828"
                y1="355.617"
                transform="translate(-345.243 70.575)"
                fill="none"
                stroke="#262f5e"
                strokeWidth="0.372"
              />
            </g>
          </g>
          <path
            id="Path_1"
            data-name="Path 1"
            d="M249.2,182.442v-48l-60.8,22.8Z"
            fill="#fff"
          />
          <path
            id="Path_2"
            data-name="Path 2"
            d="M39,166.442v-49.8l33.8-46.4,30.6,71Z"
            fill="#fff"
          />
          <path
            id="Path_3"
            data-name="Path 3"
            d="M39.2,166.042l125.2,58.2,84.6-42-63.2-25.8-21.4,8-60.6-24.2Z"
            fill="#fff"
            stroke="#232f61"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            id="Path_4"
            data-name="Path 4"
            d="M41,116.042l64,26.2-20-42Z"
            fill="#fff"
            stroke="#232f61"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            id="Path_5"
            data-name="Path 5"
            d="M191,114.242l-86.8,28-31.2-72,91.6-10Z"
            fill="#fff"
            stroke="#232f61"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            id="Path_6"
            data-name="Path 6"
            d="M190,114.242l-87,28,60.6,24,85.4-32Z"
            fill="#fff"
            stroke="#232f61"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            id="Path_7"
            data-name="Path 7"
            d="M165,166.842l-126-51.6v50.2l126,58.8Z"
            fill="#ea4740"
            stroke="#232f61"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            id="Path_8"
            data-name="Path 8"
            d="M106.2,142.842l-33.4-72.6L39,115.642v49.8l126,58.8v-57.4Z"
            fill="none"
            stroke="#232f61"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            id="Path_9"
            data-name="Path 9"
            d="M249,182.642l-84,41.6v-58.6l84-31.4Z"
            fill="#ea4740"
            stroke="#232f61"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </g>
    </svg>
  ),
  [Types.close]: (
    <svg
      width="21"
      height="22"
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.4109 10.9999L20.701 2.70994C20.8648 2.51864 20.9504 2.27256 20.9407 2.02089C20.9309 1.76921 20.8266 1.53047 20.6485 1.35238C20.4704 1.17428 20.2317 1.06995 19.98 1.06023C19.7283 1.05051 19.4823 1.13612 19.291 1.29994L11.0009 9.58994L2.71095 1.28994C2.52265 1.10164 2.26725 0.99585 2.00095 0.99585C1.73465 0.99585 1.47925 1.10164 1.29095 1.28994C1.10265 1.47825 0.996858 1.73364 0.996858 1.99994C0.996858 2.26624 1.10265 2.52164 1.29095 2.70994L9.59095 10.9999L1.29095 19.2899C1.18627 19.3796 1.10125 19.4899 1.04122 19.614C0.981201 19.738 0.947471 19.8732 0.942151 20.0109C0.936832 20.1486 0.960037 20.2859 1.01031 20.4143C1.06059 20.5426 1.13684 20.6591 1.2343 20.7566C1.33175 20.854 1.4483 20.9303 1.57663 20.9806C1.70495 21.0309 1.84228 21.0541 1.98 21.0487C2.11772 21.0434 2.25285 21.0097 2.37692 20.9497C2.50098 20.8896 2.6113 20.8046 2.70095 20.6999L11.0009 12.4099L19.291 20.6999C19.4823 20.8638 19.7283 20.9494 19.98 20.9397C20.2317 20.9299 20.4704 20.8256 20.6485 20.6475C20.8266 20.4694 20.9309 20.2307 20.9407 19.979C20.9504 19.7273 20.8648 19.4812 20.701 19.2899L12.4109 10.9999Z"
        fill="#9094AB"
      />
    </svg>
  ),
  [Types.arrow]: (
    <svg
      width="32"
      height="13"
      viewBox="0 0 32 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 6.5L22 0.726497V12.2735L32 6.5ZM0 7.5L23 7.5V5.5L0 5.5L0 7.5Z"
        fill="white"
      />
    </svg>
  )
}

interface Props {
  type: Types
  className?: string
}

const Icon: FC<Props> = ({ type, className, ...props }) => {
  return cloneElement(icons[type], {
    ...props,
    className: className
  })
}

export default Icon
