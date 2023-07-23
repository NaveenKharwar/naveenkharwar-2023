import React, { useState } from "react";

const About = () => {
  return (
    <section id="about" className="mt-3 lg:mt-12 mb-12 lg:mb-24">
      <div>
        <p className="text-xl leading-relaxed">
          I&apos;m an open-source enthusiast who loves to explore open-source
          technologies. I have shown my passion for open source by contributing
          to WordPress through meetups, WordCamp, developing free themes,
          helping WordPress become multilingual and more.
        </p>
        <p className="text-xl leading-relaxed">
          Since 2018, I have developed multiple websites using WordPress and
          PHP, which helped me gain some amazing skills and experiences.
        </p>
        <div className="flex flex-wrap justify-normal lg:justify-between gap-6 lg:gap-40 mt-16">
          <div className="3/6">
            <span className="text-5xl font-bold">30+</span>
            <p className="text-lg">More than 30 websites created</p>
          </div>
          <div className="3/6">
            <span className="text-5xl font-bold">4+</span>
            <p className="text-lg">More than 4 years of experience in industry</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
