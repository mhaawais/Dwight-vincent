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
            <h3 className="text-2xl md:text-3xl font-semibold mb-8">Dwight VinCent Green Jr.</h3>

            <div className="space-y-8 text-[16px] leading-8 tracking-wide">
              <p>
                With a lifetime dedicated to service and leadership, the author brings a rich tapestry of experience
                that informs their unique perspective on managing difficult people. A retired military veteran and
                former police officer, they have honed skills in conflict resolution and interpersonal dynamics that
                are essential in today’s multifaceted environments. Currently serving as a Bi-vocational Senior Pastor
                and Substance Use Therapist, they intertwine their faith with practical counseling principles, making
                them a credible voice in the field of leadership and personal development.
              </p>

              <p>
                The author’s professional background is a compelling blend of military service, law enforcement, prison
                chaplain and community engagement. Having served in various capacities, they understand the intricacies
                of human behavior and the importance of effective communication. Their role as a church leader and
                therapist allows them to train, teach, and advise multiple congregations on strategies for effective
                leadership, counseling methodologies, and community development initiatives. This multifaceted experience
                enriches their insights into managing challenging interpersonal interactions.
              </p>

              <p>
                Educationally, the author possesses advanced degrees that underpin their expertise in leadership and counseling. Their formal training, combined with years of practical experience, fuels their passion for writing. The journey to authoring "Managing Difficult People Like Disciples" and “I’m Out, The reason why I’m Leaving the Church” and the “50 Lord Laws of Leadership” was born from a desire to share their knowledge and strategies with a broader audience. This book serves as both a guide and a resource, designed for anyone looking to enhance their skills in managing relationships, whether in the workplace, community, or personal life.
              </p>

              <div className="italic pl-4 border-l-4 border-myblack">
               <p>  
                “In their writing, the author adopts a relatable and straightforward style, breaking down complex concepts into actionable insights. Personal anecdotes from their life as a veteran, police officer, and pastor add depth to their message, making it accessible and engaging for readers from all walks of life. They aim not merely to inform but to inspire readers to approach difficult situations with empathy and understanding.” 
               </p>
               <br />
               <p>
                 “The <strong>author’s</strong> mission is to foster positive relationships and promote personal growth through effective communication and leadership principles. They aspire to continue writing on topics of personal development, community engagement, and faith-based leadership, hoping to empower others to manage difficulties with grace and resilience. Their dedication to improving lives both through therapy and literature exemplifies his commitment to service in all its forms.”<span className="text-myblack font-semibold"> – Dwight VinCent Green Jr. </span>
               </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-14 text-center">
              <Link
                href={"https://www.amazon.com/s?k=I%27m+Out%3A+The+Reason+Why+I%27m+Leaving+The+Church&crid=I75DHGFKQRQP&sprefix=i%27m+out+the+reason+why+i%27m+leaving+the+church%2Caps%2C425&ref=nb_sb_noss"} target="_blank"
                className="inline-block text-white bg-myblack text-lg font-semibold px-10 py-4 rounded-full transition duration-300 hover:bg-opacity-80 hover:scale-105"
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
