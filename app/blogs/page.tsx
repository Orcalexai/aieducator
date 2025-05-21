import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Education Insights & Future of Learning | AIeducator',
  description: 'Explore how AI is transforming education, personalized learning experiences, and preparing students for the future. Expert insights on AI in education, EdTech innovations, and digital learning.',
  keywords: 'AI education, EdTech, personalized learning, digital education, AI in schools, future of education, educational technology, AI learning tools',
};

// Sample blog data - in a real app, this would come from an API or CMS
const blogPosts = [
  {
    id: 1,
    title: "The Future of Education: How AI is Transforming Learning",
    description: "Discover how artificial intelligence is revolutionizing education, from personalized learning paths to intelligent tutoring systems. Learn about the impact of AI on student engagement and educational outcomes.",
    image: "/blog/ai_learn.png",
    slug: "future-of-ai-education",
    date: "March 15, 2024",
    category: "AI in Education"
  },
  {
    id: 2,
    title: "Personalized Learning: AI's Role in Customizing Education",
    description: "Explore how AI-powered adaptive learning systems are creating personalized educational experiences for students. Understand the benefits of tailored learning paths and real-time feedback in modern education.",
    image: "/blog/Generative-AI-Oral-Viva-Exam-1024x562.webp",
    slug: "ai-personalized-learning",
    date: "March 10, 2024",
    category: "EdTech Innovation"
  },
  {
    id: 3,
    title: "Preparing CBSE Students for Board Exams with AI Mathematics Tools",
    description: "Explore how our AI-powered mathematics solutions are helping students prepare effectively for CBSE board examinations with targeted practice and comprehensive feedback.",
    image: "/blog/preparing.png",
    slug: "cbse-board-exam-preparation",
    date: "March 5, 2024",
    category: "Exam Preparation"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Technology Blog</h1>
        <p className="text-xl text-gray-600 mb-8">Stay updated with the latest insights in AI services, platforms, and solutions. Expert analysis on machine learning and artificial intelligence.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link 
              href={`/blogs/${post.slug}`} 
              key={post.id}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={`${post.title} - AI Technology Blog`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <span className="text-sm text-blue-600">{post.category}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="mt-4 flex items-center text-blue-600 group-hover:text-blue-700">
                    Read more
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 