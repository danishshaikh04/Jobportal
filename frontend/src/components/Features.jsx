import React from "react";
import { Check } from "lucide-react";
import FeatureImage from "../assets/jobfeature.png";
import featureVideo from "../assets/featureVideo.mp4"

const Feature = () => (
  <div className="w-full py-10 lg:py-20">
    <div className="container   mx-auto">
      <div className="grid border bg-black  text-white rounded-lg container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-regular">
                Something new!
              </h2>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Unlock Powerful Features to Elevate Your Job Search and Hiring
                Experience.
              </p>
            </div>
          </div>
          <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary text-white" />
              <div className="flex flex-col gap-1">
                <p>Personalized Job Recommendations</p>
                <p className="text-muted-foreground text-sm">
                  Get job suggestions tailored to your skills, experience, and
                  preferences.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-white text-primary" />
              <div className="flex flex-col gap-1">
                <p>One-Click Applications</p>
                <p className="text-muted-foreground text-sm">
                  Save time with easy applications. <br /> Apply to multiple
                  jobs with a single click using your pre-filled profile and
                  resume.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary text-white " />
              <div className="flex flex-col gap-1">
                <p>Post Jobs in Minutes</p>
                <p className="text-muted-foreground text-sm">
                  Quickly post jobs and start receiving applications right away
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bg-muted rounded-md aspect-square">
          <img
            src={FeatureImage}
            alt="Feature image"
            className="object-fit w-full h-full rounded-md"
          />
        </div> */}
        <div className="bg-black rounded-md ">
          <video
            className="object-fit w-full h-full rounded-md "
            autoPlay
            loop
            muted
          >
            <source src={featureVideo} playsInline={true} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </div>
);
export default Feature;
