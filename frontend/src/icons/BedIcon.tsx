interface Props {
  color: string;
  width: string;
  height: string;
}

export default function BedIcon(props: Props) {
  const { color, width, height } = props;
  return (
    <svg
      fill={color}
      height={height}
      width={width}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 511.999 511.999'
    >
      <g>
        <g>
          <path
            d='M494.565,208.205c-6.121,0-11.251,3.141-14.387,7.894l-24.288-36.256v-50.833c0-29.541-24.435-53.028-53.974-53.028
                        H110.082c-29.539,0-53.974,23.488-53.974,53.027v50.833l-24.338,36.256c-3.136-4.753-8.317-7.894-14.438-7.894
                        C7.65,208.203,0,216.054,0,225.738v155.883c-0.001,9.685,7.648,16.991,17.333,16.991h13.058v19.872
                        c0,9.684,7.851,17.534,17.534,17.534s17.534-7.851,17.534-17.534v-19.872h381.078v19.872c0,9.684,7.851,17.534,17.534,17.534
                        s17.534-7.851,17.534-17.534v-19.872h13.058c9.684,0,17.334-7.306,17.334-16.99V225.739
                        C511.999,216.055,504.249,208.205,494.565,208.205z M91.177,129.008c0-10.203,8.703-17.959,18.905-17.959h291.832
                        c10.203,0,18.905,7.756,18.905,17.959v38.151h-15.37c0.103-0.767,0.174-1.543,0.174-2.338c0-9.684-7.851-17.534-17.534-17.534
                        H123.908c-9.684,0-17.534,7.851-17.534,17.534c0,0.795,0.071,1.571,0.174,2.338H91.177V129.008z M83.855,201.941
                        c0.866,0.132,1.744,0.286,2.647,0.286h341.79l14.329,21.041H69.376L83.855,201.941z M476.93,363.543H35.067V258.337H476.93
                        V363.543z'
          />
        </g>
      </g>
    </svg>
  );
}