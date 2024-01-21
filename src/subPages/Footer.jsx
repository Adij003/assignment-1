import React from "react";
import SocialLinksImg from '../assets/ITFLinks.png'

function Footer() {
  return (
    <div className="FooterMain bg-black text-white py-14 px-24">
      <div className="FooterPartOne flex flex-row justify-between">
        <div className="FooterNewsLetter text-xl font-bold">
          Join our newsletter to
          <div>keep up to date with us!</div>
        </div>
        <div className="FooterNewsLetterRes text-xl font-bold">
          Join our newsletter to keep up
          <div>to date with us!</div>
        </div>

        <div className="MailText">
          <input
            type="text"
            className="MailField px-4 py-2 border border-gray-300 bg-black text-white placeholder-white rounded-xl"
            placeholder="👤 Your Email"
          />
          <button className="Subscribe px-4 py-2 mx-4 bg-blue-500 text-white rounded-xl">
            Subscribe
          </button>
        </div>
      </div>

      <div className="DividingLine border-t border-gray-400 border-solid border-0.5 mt-14 mx-2"></div>

      <div className="FooterPartTwo  flex flex-row justify-between">
        <div className="PartTwoA ">
          <div className="FooterLogo p-8 text-xl">Logo</div>
          <div className="FooterDescription w-80 text-xs">
            ’Company Name’ refers to the global organisation, and may refer to
            one or more member firm of Company Name International Inc. (WASII),
            as the context requires.
          </div>
          <div className="FooterSocialLinks flex flex-row mt-16">
           <img  src={SocialLinksImg} alt="" />
          </div>
        </div>

        <div className="PartTwoB mt-10">
          <div className="FooterLinks flex flex-col w-[30rem]">
            <div className="FooterRowOne flex flex-row my-2 justify-around ">
              <div>Connect</div>
              <div>About</div>
              <div>Legal</div>
            </div>
            <div className="FooterRowtwo flex flex-row my-2 justify-around">
              <div>Contact Us</div>
              <div>About Us</div>
              <div>Privacy</div>
            </div>
            <div className="FooterRowThree flex flex-row my-2  justify-around">
              <div>Our Offices</div>
              <div>Careers</div>
              <div>Disclamer</div>
            </div>
          </div>

          <div className="FooterLinksRes flex flex-col w-[30rem]">
            <div className="FooterLinksResOne flex flex-row justify-between">
              <div className="FooterLinksFirstCol">
                <div className="py-2">Connect</div>
                <div className="py-2">Contact Us</div>
                <div className="py-2">Our Offices</div>
              </div>
              <div className="FooterLinksSecondCol mr-4">
                <div className="py-2">Legal</div>
                <div className="py-2">Privacy</div>
                <div className="py-2">Disclamer</div>
              </div>
            </div>
            <div className="FooterLinksResTwo">
                <div className="FooterLinksSecondCol mt-8">
                <div className="py-2">About</div>
                <div className="py-2">About Us</div>
                <div className="py-2">Careers</div>
              </div></div>
            
          </div>

          <div className="CodeOfConduct text-center mt-2 ">Code of conduct</div>
        </div>
      </div>

      <div className="BorderLineLast border-t border-gray-400 border-solid border-0.5  mt-8 "></div>

      <div className="FooterPartThree flex flex-row justify-between mt-10 text-xs">
        <div>&copy; 2023 company name</div>
        <div className="TermsOfService flex flex-row justify-evenly w-96">
          <div>Terms of Service</div>
          <div>Privacy Policy</div>
          <div>Cookies</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
