import React from 'react';

const Hero3 = () => {
  return (
    <section className="bg-[#a3b4ce] text-black py-12 px-4">
      
      {/* Top Border */}
      <div className="border-t-4 border-review w-full mb-8 px-4"></div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-myblack mb-12 tracking-wide">
        What Readers Are Saying...
      </h2>

      {/* Content Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
        
        {/* Testimonial 1 */}
        <div className="bg-[#c7d3e4] p-6 rounded-md shadow-md">
          <p className="text-lg leading-relaxed italic mb-4">
            "Beginning with a haunting, nightmarish scene, <span className="font-semibold">A Place for Me</span> is rich with sensory imagery, strong emotion, and often-surprising historical detail. Sandra McKay’s depiction of Dora’s journey from a harrowing displacement to a position of strength and maturity is convincing, eventful, and deeply moving."
          </p>
          <p className="text-right font-semibold text-myblack">
            — Lon Otto
          </p>
          <p className="text-right text-sm mt-1 text-gray-700">
            Prize-winning author and professor emeritus of literature at the University of St. Thomas in St. Paul, Minnesota. Teaches at the Iowa Summer Writing Festival.
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-[#c7d3e4] p-6 rounded-md shadow-md">
          <p className="text-lg leading-relaxed mb-4">
            Joseph L. Murphy was a highly respected attorney and an active member of the Masonic Lodge in Canton. Sandra McKay brings his character and his love for children to life. <span className="font-semibold">A Place For Me</span> is an enjoyable read, as it includes a lot of Canton’s history, including the development of the Graham Hospital, and Fulton County’s Trial of the Century. Murphy brought a little girl, Dora Kelly, home from an orphanage in Chicago. Unmothered, she became a remarkable young woman despite many setbacks and challenges. 
          </p>
          <p className="text-lg leading-relaxed mb-4">
            This is a five-part story that will appeal to people of all ages who are interested in history and the Orphan Train, and to young people seeking role models that have transitioned challenges into opportunities.
          </p>
          <p className="text-right font-semibold text-myblack">
            — Terry Seward
          </p>
          <p className="text-right text-sm mt-1 text-gray-700">
            Past Grand Master of Masons in Illinois
          </p>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-[#c7d3e4] p-6 rounded-md shadow-md">
          <p className="text-lg leading-relaxed italic mb-4">
            "A Place for Me brings to life the story of an orphan train child who settled in a small Midwestern town. In an era before mass adoption and foster care, orphanages used the nation’s railway system to deliver poor children to new homes."
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Based on a true story, this fictionalized account humanizes the experiences of one such child, Dora Kelly. It is a fascinating tale: Dora is swept up by personal family drama, a sensationalized court trial, and her own search for love. Recommended for readers interested in popular history and juvenile fiction.
          </p>
          <p className="text-right font-semibold text-myblack">
            — Jonathan Bean, Ph.D
          </p>
          <p className="text-right text-sm mt-1 text-gray-700">
            Research Fellow at the Independent Institute and Professor of History at Southern Illinois University
          </p>
        </div>

        {/* Testimonial 4 */}
        <div className="bg-[#c7d3e4] p-6 rounded-md shadow-md">
          <p className="text-lg leading-relaxed mb-4">
            During my childhood, I learned my Aunt Dora came to Canton on the Orphan Train. This was just a nugget of family history, and I never understood her amazing journey until her granddaughter Sandra brought it to life.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            I so enjoyed reading her story, and stories like these are a reminder of what our ancestors did and achieved to give us the lives we have today.
          </p>
          <p className="text-right font-semibold text-myblack">
            — Vicky Turl
          </p>
          <p className="text-right text-sm mt-1 text-gray-700">
            Niece of Dora and Rex. Director of Dual Credit & Partnerships at John A. Logan College Carbondale, Illinois
          </p>
        </div>

      </div>

      {/* Bottom Border */}
      <div className="border-b-4 border-review w-full mt-12 px-4"></div>

    </section>
  );
};

export default Hero3;
