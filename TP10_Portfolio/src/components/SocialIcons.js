import React, {useContext} from "react";
import "../style.css";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";
import { DataPortfolioContext } from "../context/DataPortfolioContext";

export const Socialicons = () => {

  let { socialProfils } = useContext(DataPortfolioContext); 

  return (
    <div className="stick_follow_icon">
      <ul>
        {socialProfils.twitter && (
          <li>
            <a href={socialProfils.twitter}>
              <FaTwitter />
            </a>
          </li>
        )}
        {socialProfils.github && (
          <li>
            <a href={socialProfils.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialProfils.facebook && (
          <li>
            <a href={socialProfils.facebook}>
              <FaFacebookF />
            </a>
          </li>
        )}
        {socialProfils.linkedin && (
          <li>
            <a href={socialProfils.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
        {socialProfils.youtube && (
          <li>
            <a href={socialProfils.youtube}>
              <FaYoutube />
            </a>
          </li>
        )}
        {socialProfils.twitch && (
          <li>
            <a href={socialProfils.twitch}>
              <FaTwitch />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
