import { EmailContainer } from "./EmailContainer";
import { SubscribeContainer } from "./SubscribeContainer";
import { Image } from "../reusable/Image";

export const Footer = () => {
  return (
    <div className="w-full px-4 md:px-0 py-10 bg-primary-400 text-tttt-200">
      <div className="px-10 md:w-full flex flex-col md:flex-row  justify-around">
        <SubscribeContainer />
        <div className="md:flex md:flex-col items-center md:w-1/3 pt-8 md:pt-0">
          <EmailContainer
            inputClassname="bg-primary-400"
            borderColour="border-b-tttt-200"
          />
        </div>
        <div className="flex md:flex-col md:items-center lg:flex-row h-fit justify-around pt-8 md:pt-0">
          {/* facebook */}
          <a href="/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="48px"
              height="48px"
              className="invert"
            >
              {" "}
              <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z" />
            </svg>
          </a>
          {/* instagram */}
          <a href="/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="48px"
              height="48px"
              className="invert"
            >
              {" "}
              <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z" />
            </svg>
          </a>
          {/* linkedin */}
          <a href="/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="48px"
              height="48px"
              className="invert"
            >
              {" "}
              <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z" />
            </svg>
          </a>
          {/* pinterest */}
          <a href="/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="48px"
              height="48px"
              className="invert"
            >
              {" "}
              <path d="M12,2C6.477,2,2,6.477,2,12c0,4.237,2.636,7.855,6.356,9.312c-0.087-0.791-0.167-2.005,0.035-2.868 c0.182-0.78,1.172-4.971,1.172-4.971s-0.299-0.599-0.299-1.484c0-1.391,0.806-2.428,1.809-2.428c0.853,0,1.265,0.641,1.265,1.408 c0,0.858-0.546,2.141-0.828,3.329c-0.236,0.996,0.499,1.807,1.481,1.807c1.777,0,3.143-1.874,3.143-4.579 c0-2.394-1.72-4.068-4.177-4.068c-2.845,0-4.515,2.134-4.515,4.34c0,0.859,0.331,1.781,0.744,2.282 c0.082,0.099,0.093,0.186,0.069,0.287c-0.076,0.316-0.244,0.995-0.277,1.134c-0.043,0.183-0.145,0.222-0.334,0.133 c-1.249-0.582-2.03-2.408-2.03-3.874c0-3.154,2.292-6.052,6.608-6.052c3.469,0,6.165,2.472,6.165,5.776 c0,3.447-2.173,6.22-5.189,6.22c-1.013,0-1.966-0.527-2.292-1.148c0,0-0.502,1.909-0.623,2.378 c-0.226,0.868-0.835,1.958-1.243,2.622C9.975,21.843,10.969,22,12,22c5.522,0,10-4.478,10-10S17.523,2,12,2z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
