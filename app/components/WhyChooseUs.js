import React from "react";
import Image from "next/image";
import { 
  AcademicCapIcon,
  VideoCameraIcon,
  CommandLineIcon,
  ComputerDesktopIcon,
  UserGroupIcon 
} from '@heroicons/react/24/outline';


const WhyChooseUs = () => {
  const features = [
    {
      title: "Live & recorded classes",
      description:
        "Students get access to archived classes for future reference as well as live interactive sessions with their mentors.",
      icon: VideoCameraIcon,
    },
    {
      title: "Live Projects from Industry Experts",
      description:
        "Projects are an important part of any course and can be a great way to further develop the skills acquired during the course.",
      icon: CommandLineIcon,
    },
    {
      title: "AI-Enabled LMS account",
      description:
        "An LMS is a software application that enables the delivery of online learning content to users. It also provides tools for tracking student progress and assessment of their work.",
      icon: ComputerDesktopIcon,
    },
    {
      title: "Mentor Access & Internship opportunity",
      description:
        "Mentors can offer guidance on everything from career advice and industry trends to resume writing tips, interview techniques, networking strategies, and more.",
      icon: UserGroupIcon,
    },
  ];

  return (
    <>
      <div>
        <h2 className="text-center text-3xl font-bold mb-12 mt-12">
          Why Choose Us?
        </h2>
      </div>
      <section className="bg-gradient-to-r from-orange-500 to-yellow-500 py-12 lg:py-14">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
            {/* Left Side: Features */}
            <div className="w-full lg:w-3/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex flex-col md:flex-row items-start space-y-3 md:space-y-0 md:space-x-4 lg:space-x-5">
                    <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex-shrink-0 bg-white/10 rounded-lg p-3">
                      <feature.icon className="w-full h-full text-white" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-lg lg:text-xl text-white font-semibold">
                        {feature.title}
                      </h3>
                      <p className="text-sm lg:text-base text-white">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Image */}
            <div className="w-full lg:w-2/5 flex justify-center">
              <Image
                src="/images/training-session.png" 
                alt="Training Session"
                width={450}
                height={300}
                className="rounded-lg shadow-lg w-full md:w-3/5 lg:w-4/5 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
