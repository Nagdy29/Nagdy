import React from "react";
import { FaGithub, FaYoutube } from "react-icons/fa";

export const Socail = () => {
  return (
    <>
      <div>
        <ul class="socail-media">
          <li>
            <a
              href="https://www.linkedin.com/in/mohamed-nagdy-032b63289s"
              target="_blank"
            >
              <svg
                viewBox="0 0 20 20"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                id="_x31_0.Linkedin"
              >
                <path
                  fill="#000"
                  transform="translate(-31.438 -29.201)"
                  d="M51.438,49.2V41.755c0-3.659-.788-6.455-5.057-6.455a4.413,4.413,0,0,0-3.99,2.186h-.051V35.63H38.3V49.2h4.219V42.466c0-1.779.33-3.482,2.516-3.482,2.16,0,2.186,2.008,2.186,3.583v6.607h4.219Z"
                  data-name="Path 1"
                  id="Path_1"
                ></path>
                <path
                  fill="#000"
                  transform="translate(-10.97 -30.17)"
                  d="M11.3,36.6h4.219V50.17H11.3Z"
                  data-name="Path 2"
                  id="Path_2"
                ></path>
                <path
                  fill="#000"
                  transform="translate(-10 -10)"
                  d="M12.44,10a2.452,2.452,0,1,0,2.44,2.44A2.44,2.44,0,0,0,12.44,10Z"
                  data-name="Path 3"
                  id="Path_3"
                ></path>
              </svg>
            </a>
          </li>

          <li>
            <a href="https://github.com/Nagdy29" target="_blank">
              <svg
                viewBox="0 0 23.06 18"
                height="18"
                width="23.06"
                xmlns="http://www.w3.org/2000/svg"
              >
                <FaGithub size={22} />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                viewBox="0 0 23.06 18"
                height="18"
                width="23.06"
                xmlns="http://www.w3.org/2000/svg"
              >
                <FaYoutube size={22} />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
