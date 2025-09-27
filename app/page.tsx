'use client';

import { useState } from 'react';

export default function Home() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const dropdownItems = {
    about: [
      { name: 'Our Mission', url: 'https://example.com/mission' },
      { name: 'Our Team', url: 'https://example.com/team' },
      { name: 'Our Story', url: 'https://example.com/story' },
      { name: 'Careers', url: 'https://example.com/careers' }
    ],
    programs: [
      { name: 'Junior Innovators', url: 'https://example.com/junior-innovators' },
      { name: 'Young Entrepreneurs', url: 'https://example.com/young-entrepreneurs' },
      { name: 'Innovation Accelerator', url: 'https://example.com/innovation-accelerator' },
      { name: 'Online Courses', url: 'https://example.com/online-courses' }
    ],
    innovation: [
      { name: 'Success Stories', url: 'https://example.com/success-stories' },
      { name: 'Patent Database', url: 'https://example.com/patents' },
      { name: 'Innovation Lab', url: 'https://example.com/innovation-lab' },
      { name: 'Research Papers', url: 'https://example.com/research' }
    ],
    testimonials: [
      { name: 'Student Reviews', url: 'https://example.com/student-reviews' },
      { name: 'Parent Testimonials', url: 'https://example.com/parent-testimonials' },
      { name: 'Success Metrics', url: 'https://example.com/success-metrics' },
      { name: 'Awards & Recognition', url: 'https://example.com/awards' }
    ],
    contact: [
      { name: 'Get in Touch', url: 'https://example.com/contact' },
      { name: 'Schedule a Visit', url: 'https://example.com/schedule-visit' },
      { name: 'Support Center', url: 'https://example.com/support' },
      { name: 'Newsletter Signup', url: 'https://example.com/newsletter' }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-blue-600">STEMLearn</h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {/* About Dropdown */}
                <div className="relative">
                  <button
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors flex items-center"
                    onMouseEnter={() => setActiveDropdown('about')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    About
                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeDropdown === 'about' && (
                    <div 
                      className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50"
                      onMouseEnter={() => setActiveDropdown('about')}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {dropdownItems.about.map((item, index) => (
                        <a
                          key={index}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Programs Dropdown */}
                <div className="relative">
                  <button
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors flex items-center"
                    onMouseEnter={() => setActiveDropdown('programs')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    Programs
                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeDropdown === 'programs' && (
                    <div 
                      className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50"
                      onMouseEnter={() => setActiveDropdown('programs')}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {dropdownItems.programs.map((item, index) => (
                        <a
                          key={index}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Innovation Dropdown */}
                <div className="relative">
                  <button
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors flex items-center"
                    onMouseEnter={() => setActiveDropdown('innovation')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    Innovation
                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeDropdown === 'innovation' && (
                    <div 
                      className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50"
                      onMouseEnter={() => setActiveDropdown('innovation')}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {dropdownItems.innovation.map((item, index) => (
                        <a
                          key={index}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Testimonials Dropdown */}
                <div className="relative">
                  <button
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors flex items-center"
                    onMouseEnter={() => setActiveDropdown('testimonials')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    Testimonials
                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeDropdown === 'testimonials' && (
                    <div 
                      className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50"
                      onMouseEnter={() => setActiveDropdown('testimonials')}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {dropdownItems.testimonials.map((item, index) => (
                        <a
                          key={index}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Contact Dropdown */}
                <div className="relative">
                  <button
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors flex items-center"
                    onMouseEnter={() => setActiveDropdown('contact')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    Contact
                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeDropdown === 'contact' && (
                    <div 
                      className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50"
                      onMouseEnter={() => setActiveDropdown('contact')}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {dropdownItems.contact.map((item, index) => (
                        <a
                          key={index}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Empowering the Next Generation of
              <span className="text-blue-600 block">STEM Innovators</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We mentor children and young people in STEM fields to become innovators and entrepreneurs. 
              Our programs help students identify real-world problems and develop practical, patentable solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Start Your Journey
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About STEMLearn</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe every young mind has the potential to change the world through innovation and entrepreneurship.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation Focus</h3>
              <p className="text-gray-600">
                We guide students to identify real-world problems and develop practical solutions that can be patented and commercialized.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Mentorship</h3>
              <p className="text-gray-600">
                Our experienced mentors provide personalized guidance to help students navigate the complex world of STEM innovation.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Entrepreneurship</h3>
              <p className="text-gray-600">
                We teach students how to turn their innovations into viable businesses and become successful entrepreneurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive STEM education programs designed to nurture innovation and entrepreneurship.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Junior Innovators (Ages 8-12)</h3>
              <p className="text-gray-600 mb-4">
                Introduction to STEM concepts through hands-on projects and creative problem-solving activities.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Basic coding and robotics</li>
                <li>• Science experiments</li>
                <li>• Creative thinking workshops</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Young Entrepreneurs (Ages 13-17)</h3>
              <p className="text-gray-600 mb-4">
                Advanced STEM education with focus on innovation, patent development, and business creation.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Advanced programming</li>
                <li>• Patent research and filing</li>
                <li>• Business plan development</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation Accelerator (Ages 18-25)</h3>
              <p className="text-gray-600 mb-4">
                Intensive program for young adults ready to launch their own STEM-based startups and innovations.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Startup incubation</li>
                <li>• Patent portfolio management</li>
                <li>• Investor pitch preparation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section id="innovation" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">From Ideas to Patents</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We guide students through the complete innovation process, from problem identification to patent filing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Innovation Process</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">1</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Problem Identification</h4>
                    <p className="text-gray-600">Students learn to identify real-world problems through research and observation.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">2</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution Development</h4>
                    <p className="text-gray-600">Creative brainstorming and prototyping to develop innovative solutions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">3</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Patent Research</h4>
                    <p className="text-gray-600">Comprehensive patent research to ensure novelty and avoid infringement.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">4</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Patent Filing</h4>
                    <p className="text-gray-600">Professional assistance with patent application and filing process.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Success Stories</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-900">Smart Water Conservation System</h4>
                  <p className="text-sm text-gray-600">A 16-year-old student developed an IoT-based system that reduced water usage by 40% in residential buildings.</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-900">AI-Powered Learning Assistant</h4>
                  <p className="text-sm text-gray-600">A 19-year-old created an AI tutor that adapts to individual learning styles, now used by 10,000+ students.</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-900">Renewable Energy Optimizer</h4>
                  <p className="text-sm text-gray-600">A 17-year-old&apos;s algorithm increased solar panel efficiency by 25%, leading to a successful startup.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from the young innovators who have transformed their ideas into reality.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">SM</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sarah Martinez</h4>
                  <p className="text-sm text-gray-600">Age 16, Patent Holder</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                STEMLearn helped me turn my idea for a smart irrigation system into a patent. The mentorship was incredible, and now I&apos;m running my own company!
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-semibold">AJ</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Alex Johnson</h4>
                  <p className="text-sm text-gray-600">Age 19, Startup Founder</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                The innovation accelerator program gave me the tools and confidence to launch my AI startup. I couldn&apos;t have done it without their support.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-semibold">EC</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Emma Chen</h4>
                  <p className="text-sm text-gray-600">Age 14, Young Innovator</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                I love how STEMLearn makes complex topics fun and accessible. I&apos;ve already filed my first patent application for a medical device!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Start Your Innovation Journey?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of young innovators who are changing the world through STEM education and entrepreneurship.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-600">info@stemlearn.org</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-600">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600">123 Innovation Drive, Tech City, TC 12345</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Send us a Message</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Select Program Interest</option>
                    <option>Junior Innovators (Ages 8-12)</option>
                    <option>Young Entrepreneurs (Ages 13-17)</option>
                    <option>Innovation Accelerator (Ages 18-25)</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">STEMLearn</h3>
              <p className="text-gray-400 mb-4">
                Empowering the next generation of STEM learner and entrepreneurs.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Junior Innovators</li>
                <li>Young Entrepreneurs</li>
                <li>Innovation Accelerator</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Patent Guide</li>
                <li>Innovation Toolkit</li>
                <li>Success Stories</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Contact</li>
                <li>Newsletter</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 STEMLearn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
