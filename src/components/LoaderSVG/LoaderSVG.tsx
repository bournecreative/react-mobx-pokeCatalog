import styles from "./LoaderSVG.module.css";

export const LoaderSVG = () => (
  <div className={styles["svg-container"]}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={170}
      height={134}
      fill="none"
    >
      <path
        fill="#DAC8C4"
        d="M129.895 122.783c-.543 10.756-30.898 8.954-66.092 7.177C28.61 128.183.52 118.023 1.063 107.267c.542-10.755 29.513-18.034 64.707-16.258 35.194 1.777 64.668 21.018 64.125 31.774Z"
      />
      <circle cx={104.5} cy={65.5} r={65.5} fill="#142140" />
      <g fillRule="evenodd" className={styles["rotate"]} clipRule="evenodd">
        <path
          fill="#FF4B5A"
          d="M155 65.5c0-27.89-22.61-50.5-50.5-50.5S54 37.61 54 65.5h101Z"
        />
        <path
          fill="#F6F1E3"
          d="M54 65.5c0 27.89 22.61 50.5 50.5 50.5S155 93.39 155 65.5H54Z"
        />
      </g>
      <path fill="#141D3C" d="M54 61h101v10H54z" />
      <circle cx={104} cy={66} r={18} fill="#142140" />
      <circle cx={104} cy={66} r={5} fill="#F6F1E3" />
      <path
        fill="#FFB1A9"
        fillRule="evenodd"
        d="m102.406 31.855.009-.003.118-.031c.119-.032.32-.081.591-.14a25.93 25.93 0 0 1 2.399-.402c2.078-.252 4.901-.365 7.945.151 5.849.992 12.818 4.3 17.132 14.6a5 5 0 1 0 9.223-3.863c-5.824-13.905-15.961-19.117-24.683-20.596-4.242-.719-8.071-.553-10.823-.219a35.893 35.893 0 0 0-3.333.56 26.169 26.169 0 0 0-1.353.335l-.033.01-.013.004-.006.002-.579.21.574-.209a5 5 0 0 0 2.832 9.59Z"
        clipRule="evenodd"
      />
      <path
        fill="#DAC8C4"
        fillRule="evenodd"
        d="M73.165 80.278a5 5 0 0 1 6.367 3.077C83.205 93.9 89.957 97.63 95.734 98.98c3.007.702 5.831.763 7.922.64a25.902 25.902 0 0 0 2.418-.254 15.422 15.422 0 0 0 .719-.128l.009-.002a5 5 0 0 1 2.237 9.746c-2.366.397-.002.001-.005.002l-.006.001-.013.003-.034.008a1.214 1.214 0 0 0-.057.012l-.037.008a21.143 21.143 0 0 1-1.277.231 35.45 35.45 0 0 1-3.361.354c-2.767.165-6.6.095-10.788-.883-8.615-2.011-18.413-7.836-23.373-22.072a5 5 0 0 1 3.077-6.367Z"
        clipRule="evenodd"
      />
    </svg>
  </div>
);
