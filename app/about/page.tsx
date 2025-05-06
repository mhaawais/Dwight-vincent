import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

const About = () => {
  return (
    <>
      <Header />

      <section className="bg-[#c7d3e4] w-full py-20 px-6 md:px-16 font-serif text-black">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* Left Side - Image */}
          <div className="w-full lg:w-[30%] flex justify-center">
            <div className="w-[320px] h-[450px] relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/assets/images/Author.jpeg"
                alt="Sandra McKay"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>
          </div>

          {/* Right Side - Text */}
          <div className="w-full lg:w-[70%]">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-review">About the Author</h2>
            <h3 className="text-2xl md:text-3xl font-semibold mb-8">Sandra McKay</h3>

            <div className="space-y-8 text-[16px] leading-8 tracking-wide">
              <p>
                Sandra McKay is an emerging author of creative non-fiction. An accomplished writer, her first
                story published when she was only nine years old, was about a girl and her horse. While
                growing up, her writing skills progressively matured while taking college English and creative
                writing courses. Also, she has participated in numerous workshops, including a Chicago Writing
                Workshop and numerous Iowa Writer’s Workshops.
              </p>

              <p>
                Sandra is a business professional. As owner and President of a consulting firm, she has
                authored numerous stories and articles that have been published in business magazines, and
                she has submitted written testimony in numerous proceedings before federal agencies, some
                that have been profiled in numerous publications, including Crain’s Chicago Business and the
                Wall Street Journal.
              </p>

              <p>
                Sandra’s book, <strong>Dora</strong>, starts in Ullin Village in Southern Illinois in 1899 and centers on how this
                tiny Irish girl lost a happy family life when her father died from typhoid fever, and was
                subsequently sent to an orphanage in Chicago. Then she was “taken in” by a wealthy attorney
                and for a few years lived a privileged lifestyle. However, tragedy hit once again, and her life
                became filled with sadness and intrigue. Still, she moved on and ultimately found happiness.
              </p>

              <p className="italic pl-4 border-l-4 border-black">
                “My grandmother told me she was writing the story of her life. When she died in 1976, I asked
                my grandfather for her writings; I took them home and put them in a drawer where they
                remained for more than 30 years. It was a dreary Sunday afternoon when I was cleaning drawers
                and my husband, Don, asked, what I was holding in my hand. When I explained, he responded,
                ‘Well, you have to write her story for her!’ After spending the next ten days trying to make sense
                of work written by a woman with dementia, I initiated research. With the help of a professional
                genealogist, Cathy Parsons, we found a much bigger story that no one in our family knew about.
                So, my original plan to write a small book for family, exploded into a 400-page novel. Writing her
                story was a privilege and a joy. I am proud of my book but most important, I am so proud of my
                grandmother, Dora, and the fact that she triumphed over adversity.” – Sandra McKay
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-14 text-center">
              <Link
                href={"https://www.amazon.com/s?k=I%27m+Out%3A+The+Reason+Why+I%27m+Leaving+The+Church&crid=I75DHGFKQRQP&sprefix=i%27m+out+the+reason+why+i%27m+leaving+the+church%2Caps%2C425&ref=nb_sb_noss"} target="_blank"
                className="inline-block text-myblack bg-[#c7d3e4] text-lg font-semibold px-10 py-4 rounded-full transition duration-300 hover:bg-opacity-80 hover:scale-105"
              >
                Get The Book Here!
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
