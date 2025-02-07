import Image from 'next/image';

export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-32 bg-green-300 dark:bg-gray-700">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src="/logo.jpeg"
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h1>
              <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
                Hello! I&apos;m  Sarwat is an enthusiastic computer enthusiast and software engineer. To share my knowledge, advice, and lessons on many programming languages and technologies, I started this blog. I think education should be an ongoing process, and I&apos;m here to help others on their path to mastering the art of coding.
              </p>
              <p className="text-gray-600 dark:text-gray-50 text-lg">
                Whether you&apos;re just starting out or looking to sharpen your skills, you&apos;ll find a variety of resources and insights here. Let&apos;s explore the world of programming together!
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-white bg-green-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Sarwat&apos;s Journey as a Coder</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">
            Here is Sarwat&apos;s journey through the world of programming, from inquisitive novice to successful developer.

            </p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">The Spark of Curiosity</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                Sarwat&apos;s coding journey began in high school when he stumbled upon his first programming language—Python. What started as a simple curiosity quickly turned into a passion, as Sarwat spent countless hours experimenting with code, building small projects, and learning the fundamentals of software development.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Diving Deeper</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  After mastering the basics,Sarwat&apos;s thirst for knowledge grew. He began exploring more complex topics such as data structures, algorithms, and web development. Enrolling in online courses and attending coding bootcamps, Sarwat quickly expanded his skill set, taking on freelance projects to apply his knowledge in real-world scenarios.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Taking on Challenges</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  With several years of experience under his belt,Sarwat began tackling more significant challenges. From contributing to open-source projects to developing his own applications, Sarwat continued to push his limits, always looking for opportunities to learn and grow. His journey wasn&apos;t without its setbacks, but each obstacle was a stepping stone to becoming the skilled developer he is today.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Giving Back</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  Today, Sarwat is not only a proficient coder but also a mentor to others. He regularly contributes to the programming community by writing tutorials, giving talks, and helping new coders find their footing in the world of software development. For Sarwat, coding is more than just a profession—it&apos;s a lifelong journey of learning and sharing knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}



// import Image from 'next/image';

// export default function About() {
//   return (
//     <div>
//       <div className="flex flex-col items-center justify-center py-32 bg-gray-100 dark:bg-gray-700 ">
//         <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
//           <div className="flex flex-col md:flex-row">
//             <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0 ">
//               <div className="relative w-48 h-48 rounded-full overflow-hidden">
//                 <Image
//                   src="/logo.jpeg"
//                   alt="Profile"
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-full"
//                 />
//               </div>
//             </div>
//             <div className="w-full md:w-2/3 flex flex-col justify-center ">
//               <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h1>
//               <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
//                 Hello! I'm Muhammad Ashar, a passionate software developer and tech enthusiast. I created this blog to share my experiences, tips, and tutorials on various programming languages and technologies. I believe that learning should be a continuous journey, and I'm here to help others on their path to mastering the art of coding.
//               </p>
//               <p className="text-gray-600 dark:text-gray-50 text-lg">
//                 Whether you're just starting out or looking to sharpen your skills, you'll find a variety of resources and insights here. Let's explore the world of programming together!
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <section className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Ashar's Journey as a Coder</h2>
//             <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">
//               From curious beginner to seasoned developer, here's how Ashar navigated the world of programming.
//             </p>
//           </div>
//           <div className="space-y-12">
//             <div className="flex flex-col md:flex-row items-center">
//               <div className="md:w-1/3">
//               </div>
//               <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
//                 <h3 className="text-2xl font-bold text-gray-800 dark:text-white">The Spark of Curiosity</h3>
//                 <p className="mt-4 text-gray-600 dark:text-gray-50">
//                   Ashar’s coding journey began in high school when he stumbled upon his first programming language—Python. What started as a simple curiosity quickly turned into a passion, as Ashar spent countless hours experimenting with code, building small projects, and learning the fundamentals of software development.
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-col md:flex-row-reverse items-center">
//               <div className="md:w-1/3">
//               </div>
//               <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
//                 <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Diving Deeper</h3>
//                 <p className="mt-4 text-gray-600 dark:text-gray-50">
//                   After mastering the basics, Ashar’s thirst for knowledge grew. He began exploring more complex topics such as data structures, algorithms, and web development. Enrolling in online courses and attending coding bootcamps, Ashar quickly expanded his skill set, taking on freelance projects to apply his knowledge in real-world scenarios.
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-col md:flex-row items-center">
//               <div className="md:w-1/3">
//               </div>
//               <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
//                 <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Taking on Challenges</h3>
//                 <p className="mt-4 text-gray-600 dark:text-gray-50">
//                   With several years of experience under his belt, Ashar began tackling more significant challenges. From contributing to open-source projects to developing his own applications, Ashar continued to push his limits, always looking for opportunities to learn and grow. His journey wasn’t without its setbacks, but each obstacle was a stepping stone to becoming the skilled developer he is today.
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-col md:flex-row-reverse items-center">
//               <div className="md:w-1/3">
//               </div>
//               <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
//                 <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Giving Back</h3>
//                 <p className="mt-4 text-gray-600 dark:text-gray-50">
//                   Today, Ashar is not only a proficient coder but also a mentor to others. He regularly contributes to the programming community by writing tutorials, giving talks, and helping new coders find their footing in the world of software development. For Ashar, coding is more than just a profession—it’s a lifelong journey of learning and sharing knowledge.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }
