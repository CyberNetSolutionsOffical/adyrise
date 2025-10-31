import React from 'react';
import type { BlogPost } from '../types';
import useIntersectionObserver from './useIntersectionObserver';

const blogData: BlogPost[] = [
  {
    image: 'https://picsum.photos/seed/blog1/500/300',
    category: 'AI Trends',
    title: 'Top 5 AI Trends Shaping Businesses in Nepal in 2024',
    excerpt: 'Discover the key artificial intelligence trends that are revolutionizing industries across Nepal, from tourism to finance.',
  },
  {
    image: 'https://picsum.photos/seed/blog2/500/300',
    category: 'Automation Tips',
    title: 'How Small Businesses Can Start with AI Automation',
    excerpt: 'A practical guide for small and medium-sized enterprises in Nepal to begin their AI automation journey without a huge budget.',
  },
  {
    image: 'https://picsum.photos/seed/blog3/500/300',
    category: 'Industry Insights',
    title: 'The Future of Customer Service: AI Chatbots in Nepal',
    excerpt: 'Explore how AI-powered chatbots are improving customer satisfaction and operational efficiency for Nepalese companies.',
  },
];

const BlogCard = ({ post, index }: { post: BlogPost; index: number }) => {
    // FIX: Specify HTMLDivElement as the generic type for useIntersectionObserver to match the 'div' tag ref.
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
    const delay = `delay-${index * 100}`;
    return (
        <div ref={ref} className={`bg-secondary rounded-lg overflow-hidden shadow-lg group fade-in-up ${delay} ${isVisible ? 'is-visible' : ''}`}>
            <img src={post.image} alt={post.title} className="w-full h-56 object-cover group-hover:opacity-80 transition-opacity duration-300"/>
            <div className="p-6">
                <p className="text-sm text-highlight font-semibold mb-2">{post.category}</p>
                <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                <p className="text-light mb-4">{post.excerpt}</p>
                <a href="#" className="font-bold text-highlight hover:underline">Read More &rarr;</a>
            </div>
        </div>
    );
};


const Blog: React.FC = () => {
  // FIX: Specify HTMLElement as the generic type for useIntersectionObserver to match the 'section' tag ref.
  const [sectionRef, isSectionVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 });
  return (
    <section id="blog" className="py-20 bg-primary" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 fade-in-up ${isSectionVisible ? 'is-visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Insights & Resources</h2>
          <p className="text-accent mt-4 text-lg">Stay updated with the latest in AI and automation.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post, index) => (
            <BlogCard key={index} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;