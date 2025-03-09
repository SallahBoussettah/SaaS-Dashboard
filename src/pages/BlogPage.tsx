import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PublicNavigation from '../components/layout/PublicNavigation';
import PublicFooter from '../components/layout/PublicFooter';

// Mock blog post data
const blogPosts = [
  {
    id: 1,
    title: "5 Ways to Improve Your Data Analytics Strategy",
    excerpt: "Learn how to enhance your organization's approach to data analytics with these proven strategies.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800",
    category: "Strategy",
    author: "Sarah Johnson",
    authorImage: "https://i.pravatar.cc/100?img=1",
    date: "June 15, 2023",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "The Future of Business Intelligence: AI and Machine Learning",
    excerpt: "Discover how artificial intelligence and machine learning are revolutionizing business intelligence tools.",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=800",
    category: "Technology",
    author: "Michael Chen",
    authorImage: "https://i.pravatar.cc/100?img=3",
    date: "May 28, 2023",
    readTime: "12 min read"
  },
  {
    id: 3,
    title: "Creating Effective Data Dashboards: Best Practices",
    excerpt: "Learn the principles of good dashboard design and how to create visualizations that drive action.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800",
    category: "Design",
    author: "Aisha Patel",
    authorImage: "https://i.pravatar.cc/100?img=5",
    date: "May 12, 2023",
    readTime: "10 min read"
  },
  {
    id: 4,
    title: "Data Security in the Age of Cloud Analytics",
    excerpt: "How to maintain security and compliance while leveraging the power of cloud-based analytics platforms.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800",
    category: "Security",
    author: "James Wilson",
    authorImage: "https://i.pravatar.cc/100?img=4",
    date: "April 30, 2023",
    readTime: "9 min read"
  },
  {
    id: 5,
    title: "How to Build a Data-Driven Culture in Your Organization",
    excerpt: "Strategies for fostering a culture where decisions at all levels are informed by data and analytics.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800",
    category: "Culture",
    author: "Elena Rodriguez",
    authorImage: "https://i.pravatar.cc/100?img=9",
    date: "April 18, 2023",
    readTime: "7 min read"
  },
  {
    id: 6,
    title: "Real-time Analytics: Transforming Business Decision Making",
    excerpt: "How real-time data processing is enabling faster and more effective business decision making.",
    image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?auto=format&fit=crop&w=800",
    category: "Strategy",
    author: "David Kim",
    authorImage: "https://i.pravatar.cc/100?img=7",
    date: "April 5, 2023",
    readTime: "11 min read"
  }
];

// Array of all categories
const allCategories = Array.from(new Set(blogPosts.map(post => post.category)));

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Filter posts based on category and search query
  const filteredPosts = blogPosts.filter(post => {
    // Filter by category if selected
    if (selectedCategory && post.category !== selectedCategory) {
      return false;
    }
    
    // Filter by search query if present
    if (searchQuery && !post.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });
  
  return (
    <div className="bg-white min-h-screen">
      <PublicNavigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-10 bg-gradient-to-r from-indigo-50 to-primary-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">SaaS Dashboard Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, guides, and expert perspectives on data analytics, business intelligence, and more.
            </p>
            
            {/* Search Bar */}
            <div className="mt-8 max-w-xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
                <div className="absolute right-3 top-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Category Filters */}
      <section className="py-8 px-4 md:px-10 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full ${!selectedCategory ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors`}
            >
              All
            </button>
            {allCategories.map((category, index) => (
              <button 
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full ${selectedCategory === category ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Blog Posts */}
      <section className="py-16 px-4 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Featured Post */}
          {filteredPosts.length > 0 && (
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src={filteredPosts[0].image} 
                    alt={filteredPosts[0].title} 
                    className="w-full h-auto transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                      {filteredPosts[0].category}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {filteredPosts[0].date} · {filteredPosts[0].readTime}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    <Link to={`/blog/${filteredPosts[0].id}`} className="hover:text-primary-600 transition-colors">
                      {filteredPosts[0].title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-6">{filteredPosts[0].excerpt}</p>
                  <div className="flex items-center">
                    <img 
                      src={filteredPosts[0].authorImage} 
                      alt={filteredPosts[0].author}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <span className="font-medium">{filteredPosts[0].author}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No matching articles found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter to find what you're looking for.</p>
              <button 
                onClick={() => {setSelectedCategory(null); setSearchQuery('');}}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
          
          {/* Rest of the Posts */}
          {filteredPosts.length > 1 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map((post) => (
                <div key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100">
                  <Link to={`/blog/${post.id}`} className="block overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="bg-primary-50 text-primary-700 px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-xs">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      <Link to={`/blog/${post.id}`} className="hover:text-primary-600 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img 
                          src={post.authorImage} 
                          alt={post.author}
                          className="w-8 h-8 rounded-full mr-2"
                        />
                        <span className="text-sm font-medium">{post.author}</span>
                      </div>
                      <span className="text-gray-500 text-sm">{post.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Load More Button */}
          {filteredPosts.length > 6 && (
            <div className="text-center mt-12">
              <button className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20 px-4 md:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-primary-600 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-8 md:p-12 text-white">
                <h2 className="text-3xl font-bold mb-4">Stay up to date</h2>
                <p className="mb-6">
                  Get the latest articles, resources, and insights on data analytics delivered straight to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="px-4 py-3 rounded-lg text-gray-900 w-full sm:max-w-xs"
                  />
                  <button className="px-6 py-3 bg-white text-primary-600 rounded-lg font-medium hover:bg-gray-100 transition-colors whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
                <p className="mt-4 text-sm text-primary-100">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
              <div className="hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800"
                  alt="Newsletter" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <PublicFooter />
    </div>
  );
};

export default BlogPage; 