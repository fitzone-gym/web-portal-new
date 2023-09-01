import React from "react";

import Header from "../../components/header";
import Sidenav from "../../components/Doctor/sidenav";
import "../../styles/Doctor/profile.css";
import profile from "../../assets/profile2.jpg";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


function Profile() {
  return (
    <>
      <div className="contactUsMessages">
        <Header />
        <Sidenav />

        <div className="userProfile">
          <div>
            <div className=" profileDetails">
              <div className="p-4 text-center">
                <img src={profile} className="userProfileImage" />
              </div>
              <div className=" fw-600 userProfileDtails">
                <p className="userNameProfile">
                  {sessionStorage.getItem("first_name")}&nbsp;
                  {sessionStorage.getItem("last_name")}
                </p>
                <p className="userEmailProfile">
                  {sessionStorage.getItem("email")}
                </p>
                <p className="qualfication"> MBBS (Colombo)</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 text-center pt-6 contactIcon">
            <FacebookIcon className="facebookIcon" />
            <TwitterIcon className="twitterIcon" />
            <LinkedInIcon className="LinkedInIcon" />
          </div>

          <div className="pl-6 text-justify  pt-12 message">
            <span>
              I hope this message finds you well and motivated on your fitness
              journey. My name is Dr. [Your Name], and I am thrilled to join the
              [Gym Name] family as the resident medical professional and
              wellness advisor. With a background in [Your Medical
              Specialization] and a passion for promoting holistic health, I am
              committed to supporting you in achieving your fitness and
              well-being goals. Whether you're looking to lose weight, build
              muscle, improve your cardiovascular endurance, or simply enhance
              your overall wellness, I am here to provide you with
              evidence-based guidance and personalized recommendations. As your
              dedicated wellness partner, I believe in a comprehensive approach
              to health that encompasses not only physical fitness.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
