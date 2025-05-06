import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

const Blog1 = () => {
  return (
    <div className="bg-detailblog text-black">
      <Header />

      <section className="px-6 sm:px-12 lg:px-20 xl:px-28 py-12 max-w-5xl mx-auto font-serif">
        {/* Top Tags */}
        <div className="text-[15px] sm:text-[16px] font-medium flex flex-wrap gap-x-4 gap-y-2 tracking-widest leading-snug">
          <span>Reading Tips</span>
          <span>Book Lovers</span>
          <span>Personal Development</span>
          <span>Motivation</span>
          <span>Lifestyle</span>
          <span>Historical Fiction</span>
          <span>Author Insights</span>
          <span>Self-Improvement</span>
          <span>Reading Habits</span>
          <span>Inspirational Guides</span>
        </div>

        {/* Meta */}
        <div className="mt-4 text-[14px] tracking-widest">
          May 28 &nbsp; - &nbsp; Written By Sandra McKay
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold mt-8 leading-tight tracking-tight text-myblack">
          Finding Your Reading Mojo: <br />
          How to Get Motivated to Start Reading Again
        </h1>

        {/* Body */}
        <div className="mt-10 space-y-8 text-[17px] leading-[2rem] tracking-wide font-normal">
          <p>
            In today’s fast-paced world, finding time to read can be
            challenging. Yet, rediscovering the joy of reading can be incredibly
            rewarding. Here are some tips to help you get back into the groove:
          </p>

          <p>
            <strong>1. Set Realistic Goals:</strong> Start small. Set a daily or
            weekly reading goal that is achievable. Even 10 minutes a day can
            make a difference.
          </p>

          <p>
            <strong>2. Create a Cozy Reading Space:</strong> Designate a
            comfortable, quiet spot in your home as your reading nook. A cozy
            chair, good lighting, and a warm blanket can make reading more
            inviting.
          </p>

          <p>
            <strong>3. Choose the Right Book:</strong> Select a book that truly
            interests you. If you're a fan of historical fiction, my novel "A
            Place for Me" might be a perfect pick to get you started. Its
            engaging story and rich historical backdrop can reignite your
            passion for reading.
          </p>

          <p>
            <strong>4. Join a Book Club:</strong> Being part of a book club can
            provide motivation and accountability. It’s also a great way to
            connect with fellow book lovers and discover new books.
          </p>

          <p>
            <strong>5. Limit Distractions:</strong> Turn off the TV, put your
            phone on silent, and focus on the book. Creating a distraction-free
            environment helps immerse you in the story.
          </p>

          <p>
            <strong>6. Make Reading a Routine:</strong> Incorporate reading into
            your daily routine. Whether it’s before bed or during a lunch break,
            consistent reading time can build a lasting habit.
          </p>

          <hr className="my-8 border-black" />

          <p className="font-semibold">
            What are your favorite tips for getting back into reading? Share
            your thoughts in the comments below!
          </p>

          <p>
            Rediscover the joy of reading with a compelling story. "A Place for
            Me" is waiting to take you on a historical journey filled with
            emotion and adventure. Happy reading!
          </p>

          <div className="mt-8 flex justify-center">
            <button className="bg-black text-white px-10 py-5 rounded-full hover:bg-white hover:text-black hover:shadow-lg transition-all duration-300 font-semibold tracking-wider">
              Read "A Place For Me"
            </button>
          </div>
        </div>

        {/* Tags Footer */}
        <div className="mt-12 text-[15px] font-medium flex flex-wrap gap-x-4 gap-y-2 tracking-widest leading-snug">
          <span>reading motivation</span>
          <span>how to start reading again</span>
          <span>tips for reading</span>
          <span>reading habits</span>
          <span>book lovers</span>
          <span>reading goals</span>
          <span>cozy reading space</span>
          <span>book clubs</span>
          <span>Sandra McKay</span>
          <span>historical fiction</span>
          <span>reading inspiration</span>
          <span>improve reading habits</span>
          <span>get back to reading</span>
          <span>reading tips</span>
          <span>find your reading mojo</span>
        </div>

        {/* Author */}
        <div className="mt-6 text-[15px] tracking-wide font-semibold">
          Sandra McKay
        </div>

        {/* Next Blog Link */}
        {/* <div className="mt-14 border-t pt-6 text-right">
          <Link href="/complete-blog/blog2">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold hover:underline leading-snug cursor-pointer">
              Immersing Yourself in Historical Fiction: <br />
              Why It's Worth Your Time &gt;
            </h2>
          </Link>
        </div> */}

        {/* Previous Blog Link (absolute left aligned outside content box) */}
        <div className="px-6 sm:px-12 lg:px-20 xl:px-28 mt-14 border-t pt-6">
          <div className="text-left">
            <Link href="/complete-blog/blog2">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold hover:underline leading-snug cursor-pointer text-review">
                Immersing Yourself in &gt; <br />
                Historical Fiction: <br />
                Why It's Worth Your Time
              </h2>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog1;
