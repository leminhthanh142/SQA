import React from 'react';
import PropTypes from 'prop-types';

export const CoffeeIcon = ({ width = 104, height = 92 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}>
      <g id="services3" transform="translate(-1293 -1316)">
        <circle
          id="Ellipse_3"
          data-name="Ellipse 3"
          cx="45"
          cy="45"
          r="45"
          transform="translate(1293 1316)"
          fill="#ffeee9"
        />
        <g id="coffee-cup" transform="translate(1307 1322)">
          <g id="Group_3" data-name="Group 3" transform="translate(11.202 29.876)">
            <g id="Group_2" data-name="Group 2">
              <path
                id="Path_4"
                data-name="Path 4"
                d="M121.877,202.654H69.59a5.609,5.609,0,0,0-5.6,5.6v3.735A35.394,35.394,0,0,0,83.2,243.531a1.868,1.868,0,1,0,1.714-3.32,31.666,31.666,0,0,1-17.187-28.22v-3.735a1.868,1.868,0,0,1,1.867-1.867h52.287a1.868,1.868,0,0,1,1.867,1.867v3.735a31.653,31.653,0,0,1-17.191,28.216,1.869,1.869,0,0,0,.859,3.529,1.841,1.841,0,0,0,.855-.209,35.376,35.376,0,0,0,19.212-31.537v-3.735A5.609,5.609,0,0,0,121.877,202.654Z"
                transform="translate(-63.988 -202.654)"
                fill="#fe5f41"
              />
            </g>
          </g>
          <g id="Group_5" data-name="Group 5" transform="translate(0 67.22)">
            <g id="Group_4" data-name="Group 4">
              <path
                id="Path_5"
                data-name="Path 5"
                d="M85.76,417.12a1.871,1.871,0,0,0-1.725-1.154H1.869a1.87,1.87,0,0,0-1.322,3.19l4.187,4.19a12.993,12.993,0,0,0,9.244,3.828H71.918a13.016,13.016,0,0,0,9.251-3.828l4.187-4.19A1.864,1.864,0,0,0,85.76,417.12Zm-7.234,3.585a9.284,9.284,0,0,1-6.6,2.734H13.977a9.284,9.284,0,0,1-6.6-2.734l-1-1H79.526Z"
                transform="translate(0 -415.966)"
                fill="#fe5f41"
              />
            </g>
          </g>
          <g id="Group_7" data-name="Group 7" transform="translate(62.166 37.337)">
            <g id="Group_6" data-name="Group 6">
              <path
                id="Path_6"
                data-name="Path 6"
                d="M378.949,246.629c-5.031-3.234-13.068.276-13.968.683a1.869,1.869,0,0,0,1.55,3.4c1.8-.818,7.574-2.756,10.4-.937,1.274.818,1.9,2.405,1.9,4.84,0,7.477-15.081,12-20.9,13.109l-1.322.261a1.866,1.866,0,0,0,.359,3.7,1.733,1.733,0,0,0,.362-.037l1.311-.258c.978-.187,23.929-4.687,23.929-16.773C382.56,250.861,381.343,248.175,378.949,246.629Z"
                transform="translate(-355.093 -245.272)"
                fill="#fe5f41"
              />
            </g>
          </g>
          <g id="Group_9" data-name="Group 9" transform="translate(52.287 0)">
            <g id="Group_8" data-name="Group 8">
              <path
                id="Path_7"
                data-name="Path 7"
                d="M303.867,46.235a11.189,11.189,0,0,0,0-13.531,1.868,1.868,0,0,0-2.917,2.334,7.533,7.533,0,0,1,0,8.87,11.178,11.178,0,0,0,0,13.531,1.868,1.868,0,1,0,2.917-2.334A7.521,7.521,0,0,1,303.867,46.235Z"
                transform="translate(-298.666 -32.001)"
                fill="#fe5f41"
              />
            </g>
          </g>
          <g id="Group_11" data-name="Group 11" transform="translate(41.07 0.002)">
            <g id="Group_10" data-name="Group 10">
              <path
                id="Path_8"
                data-name="Path 8"
                d="M239.795,46.243a11.178,11.178,0,0,0,0-13.531,1.868,1.868,0,0,0-2.917,2.334,7.521,7.521,0,0,1,0,8.87,11.189,11.189,0,0,0,0,13.531,1.868,1.868,0,0,0,2.917-2.334A7.533,7.533,0,0,1,239.795,46.243Z"
                transform="translate(-234.597 -32.009)"
                fill="#fe5f41"
              />
            </g>
          </g>
          <g id="Group_13" data-name="Group 13" transform="translate(29.878 0.004)">
            <g id="Group_12" data-name="Group 12">
              <path
                id="Path_9"
                data-name="Path 9"
                d="M175.867,46.256a11.189,11.189,0,0,0,0-13.531,1.867,1.867,0,0,0-2.917,2.331,7.533,7.533,0,0,1,0,8.87,11.178,11.178,0,0,0,0,13.531,1.867,1.867,0,1,0,2.917-2.33A7.522,7.522,0,0,1,175.867,46.256Z"
                transform="translate(-170.666 -32.022)"
                fill="#fe5f41"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

CoffeeIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};