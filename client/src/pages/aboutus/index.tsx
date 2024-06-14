import React from 'react';

const AboutUs = () => {
   return (
      <section className={'max-w-6xl mx-auto px-4 mb-48'}>
         <div className={'mt-32 mb-5'}>
            <h1
               className={
                  'px-9 pt-6 pb-6 rounded text-center lg:text-7xl md:text-6xl sm:text-6xl text-5xl tracking-tight text-white font-semibold'
               }>
               About us
            </h1>
         </div>

         <div className={'container sm:columns-2 text-pretty gap-x-16 my-16'}>
            <p className={'text-sm leading-loose text-white font-extralight text-wrap'}>
               Welcome to the world of innovation and software development with 0/1{'\u00A0'}
               COMBINE{'\u00A0'}
               {'\u2014'} your trusted partner in creating unique solutions! Our story began in 2015
               and since then we have developed many exciting applications, software solutions and
               websites for organizations of various sizes. Our experience spans working with large
               corporations, startups, advertising and media agencies, private entrepreneurs and
               others. What makes us special? Our team includes talented developers, professional
               product managers, and experienced UI/UX specialists. We have mastered the most
               advanced technologies, working with Windows, Linux, IOS, Android, Ionic, Cordova and
               many other platforms. Our arsenal includes Back/Front End, Client/Server Side, cloud
               technologies, data management, machine learning and more. What makes us unique? We
               specialize in creating custom solutions that meet each client's requirements and
               needs. We offer a full product development cycle
               {'\u00A0'}
               {'\u2014'} from ideation to implementation, and can effectively build into any stage
               of development. This ability allows 0/1{'\u00A0'}COMBINE to provide excellent service
               to every client, of any size and from any business sector, and to integrate quickly
               into the activities required. Today, 0/1{'\u00A0'}COMBINE is a dynamic company with
               over 8 years of successful operations. We are distinguished by efficiency and
               responsiveness to any task. We are ready to provide superior service to every client,
               regardless of size or area of business. We have a unique ability to quickly integrate
               into any team and solve problems at the highest level. Join 0/1{'\u00A0'}COMBINE and
               together we will turn your ideas into reality! With us you will always be one step
               ahead of the competition.
            </p>
         </div>

         {/*SubTitile Section*/}
         <div className={'flex justify-center mt-5 mb-10'}>
            <h2 className={'w-2/3 justify-center text-lg font-light text-white text-center'}>
               Join 0/1 COMBINE and together we will turn your ideas into reality!
               <br />
               With us you will always be one step ahead of the competition.
            </h2>
         </div>
      </section>
   );
};

export default AboutUs;
