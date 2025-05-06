import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

const Blog2 = () => {
  return (
    <div className="bg-detailblog text-black">
      <Header />

      <section className="px-6 sm:px-12 lg:px-20 xl:px-28 py-12 max-w-5xl mx-auto font-serif">
        {/* Top Tags */}
        <div className="text-[15px] sm:text-[16px] font-medium flex flex-wrap gap-x-4 gap-y-2 tracking-widest leading-snug">
          <span>Historical Fiction</span>
          <span>Reading Tips</span>
          <span>Book Recommendations</span>
          <span>Educational Reads</span>
          <span>Author Insights</span>
          <span>Literature</span>
          <span>Inspirational Guides</span>
          <span>Book Lovers</span>
          <span>Personal Development</span>
          <span>Learning and Growth</span>
        </div>

        {/* Meta */}
        <div className="mt-4 text-[14px] tracking-widest">
          May 28 &nbsp; - &nbsp; Written By Sandra McKay
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold mt-8 leading-tight tracking-tight  text-myblack">
          Immersing Yourself in Historical Fiction: <br />
          Why It's Worth Your Time
        </h1>

        {/* Body */}
        <div className="mt-10 space-y-8 text-[17px] leading-[2rem] tracking-wide font-normal">
          <p>
            Historical fiction transports readers to different times and places,
            offering a unique blend of history and storytelling. Whether you’re
            a history buff or a casual reader, here’s why you should dive into
            this captivating genre.
          </p>

          <p>
            <strong>1. Experience History Firsthand:</strong> Historical fiction
            brings history to life through engaging narratives and vivid
            details. Books like my novel, "A Place for Me," set during the era
            of the Orphan Trains, offer an immersive experience that textbooks
            often can’t match.
          </p>

          <p>
            <strong>2. Learn While Being Entertained:</strong> These novels
            weave historical facts with compelling stories, making learning
            enjoyable. You get to explore different eras, cultures, and
            significant events while being entertained by a gripping plot.
          </p>

          <p>
            <strong>3. Develop Empathy and Understanding:</strong> Reading about
            characters from different historical contexts can deepen your
            understanding and empathy for people’s experiences across time. It’s
            a journey into the past that enriches your perspective on the
            present.
          </p>

          <p>
            <strong>4. Enhance Your Imagination:</strong> The rich settings and
            detailed descriptions in historical fiction can ignite your
            imagination. As you visualize bygone eras and immerse yourself in
            the stories, you expand your creative thinking.
          </p>

          <p>
            <strong>5. Connect with Compelling Characters:</strong> Historical
            fiction often features characters who face extraordinary challenges
            and adventures. These relatable and often inspirational figures can
            leave a lasting impression and provide valuable life lessons.
          </p>

          <hr className="my-8 border-black" />

          <p className="font-semibold">
            My novel, "A Place for Me," exemplifies the power of historical
            fiction. Set against the backdrop of the Orphan Trains, it tells a
            story of resilience, hope, and finding one's place in the world.
            Readers have shared how the characters and their journeys have
            deeply moved them, making history feel personal and real.
          </p>

          <p>
            What’s your favorite historical fiction novel and why? Share your
            thoughts in the comments below!
          </p>

          <p>
            Immerse yourself in the world of historical fiction and discover the
            magic of the past. Start your journey with "A Place for Me" and
            experience history like never before. Happy reading!
          </p>

          <div className="mt-8 flex justify-center">
            <button className="bg-black text-white px-10 py-5 rounded-full hover:bg-white hover:text-black hover:shadow-lg transition-all duration-300 font-semibold tracking-wider">
              Get “A Place for Me" Here
            </button>
          </div>
        </div>

        {/* Tags Footer */}
        <div className="mt-12 text-[15px] font-medium flex flex-wrap gap-x-4 gap-y-2 tracking-widest leading-snug">
          <span>historical fiction</span>
          <span>benefits of reading</span>
          <span>book lovers</span>
          <span>reading tips</span>
          <span>Sandra McKay</span>
          <span>Orphan Trains</span>
          <span>immersive reading</span>
          <span>learning through fiction</span>
          <span>character development</span>
          <span>historical novels</span>
          <span>reading motivation</span>
          <span>empathy through reading</span>
        </div>

        {/* Author */}
        <div className="mt-6 text-[15px] tracking-wide font-semibold">
          Sandra McKay
        </div>

        {/* Previous Blog Link */}
        {/* <div className="mt-14 border-t pt-6 text-left">
          <Link href="/complete-blog/blog1">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold hover:underline leading-snug cursor-pointer">
              &lt; Finding Your Reading Mojo: <br />
              How to Get Motivated to Start Reading Again
            </h2>
          </Link>
        </div> */}

        {/* Previous Blog Link (absolute left aligned outside content box) */}
        <div className="px-6 sm:px-12 lg:px-20 xl:px-28 mt-14 border-t pt-6">
          <div className="text-left">
            <Link href="/complete-blog/blog1">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold hover:underline leading-snug cursor-pointer text-review">
                &lt; Finding Your Reading Mojo: <br />
                How to Get Motivated to Start Reading Again
              </h2>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog2;
