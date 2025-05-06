// app/blog/page.tsx

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faith, Reflection & Redemption – Blog | I'm Out by Dwight Vincent Green Jr.",
  description:
    "Read powerful reflections and behind-the-scenes insights from 'I'm Out'—a thought-provoking journey of spiritual awakening. Dive deeper into faith, healing, and the personal journey that inspired the book.",
};

const Blog = () => {
  return (
    <>
      <Header />

      <section className="w-full text-black bg-[#c7d3e4]">
        {/* Blog 1 Image */}
        <div className="w-full flex justify-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 pt-6">
          <Link href="/complete-blog/blog1" className="w-full">
            <div className="w-full max-w-7xl mx-auto">
              <Image
                src="/assets/images/photo-1.jpg"
                alt="Book Cover"
                width={1920}
                height={1080}
                className="w-full rounded-md object-cover h-[50vh] md:h-screen"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Blog 1 Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-8 md:px-16 lg:px-20 py-16">
          <p className="text-center text-sm sm:text-base font-medium leading-relaxed mb-4">
            Reading Tips, Book Lovers, Personal Development, Motivation, Lifestyle, Historical Fiction,
            Author Insights, Self-Improvement, Reading Habits, Inspirational Guides
          </p>
          <p className="text-center text-sm sm:text-base mb-8">• 5/28/19</p>

          <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-10  text-myblack font-serif">
            Finding Your Reading Mojo: How to Get <br className="hidden sm:block" />
            Motivated to Start Reading Again
          </h1>

          <p className="text-center text-base sm:text-lg leading-8 mb-10">
            Struggling to find motivation to read? Discover practical tips to reignite your love for books!
            From setting realistic reading goals and creating a cozy reading nook to choosing the right book
            and joining a book club, our guide covers it all. Dive into engaging reads like{" "}
            <strong>"A Place for Me"</strong> and transform your reading habits today. Explore how creating
            a distraction-free environment and tracking your progress can keep you on track. Ready to get
            your reading mojo back? Read more now!
          </p>

          <div className="text-center">
            <Link
              href="/complete-blog/blog1"
              className="text-gray-700 underline text-lg font-medium hover:text-myblack transition font-serif"
            >
              Read More
            </Link>
          </div>
        </div>

        {/* Blog 2 Image */}
        <div className="w-full flex justify-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 pt-6">
          <Link href="/complete-blog/blog2" className="w-full">
            <div className="w-full max-w-7xl mx-auto">
              <Image
                src="/assets/images/photo-2.jpeg"
                alt="Book Cover 3"
                width={1920}
                height={1080}
                className="w-full rounded-md object-cover h-[50vh] md:h-screen"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Blog 2 Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-8 md:px-16 lg:px-20 py-16">
          <p className="text-center text-sm sm:text-base font-medium leading-relaxed mb-4">
            Historical Fiction, Reading Tips, Book Recommendations, Educational Reads, Author Insights,
            Literature, Inspirational Guides, Book Lovers, Personal Development, Learning and Growth
          </p>
          <p className="text-center text-sm sm:text-base mb-8">• 5/28/19</p>

          <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-10  text-myblack font-serif">
            Immersing Yourself in Historical Fiction: Why It's Worth Your Time
          </h1>

          <p className="text-center text-base sm:text-lg leading-8 mb-10">
            In historical fiction, the past is not merely a backdrop but a character in its own right,
            shaping the lives and destinies of those who inhabit its pages. Through the immersive power of
            storytelling, readers are transported across centuries and continents, where they witness the
            triumphs and trials of humanity unfold against the tapestry of history. Whether delving into the
            intricacies of ancient civilizations or navigating the tumult of more recent events, historical
            fiction offers a gateway to understanding the complexities of the past while illuminating
            timeless truths about the human experience. In works like{" "}
            <strong>"A Place for Me"</strong>, set amidst the Orphan Trains era, the resonance of history is
            palpable, inviting readers to embark on a journey of discovery, empathy, and enlightenment.
          </p>

          <div className="text-center">
            <Link
              href="/complete-blog/blog2"
              className="text-gray-700 underline text-lg font-medium hover:text-myblack transition font-serif"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;
