import { Link } from "react-router-dom";
import { ArrowBigRight, ArrowRight, CheckIcon } from "lucide-react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:py-40 overflow-hidden">
        {/* Background pattern */}
        <div className="home-first-bg absolute inset-0 -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <h1 className="home-title text-4xl md:text-6xl font-bold mb-6">
                Create Stunning <span className="gradient-text">Resumes</span> That Get You Hired
              </h1>
              
              <p className="text-xl mb-8 max-w-lg">
                Build professional resumes in minutes with our easy-to-use builder. 
                Stand out from the competition and land your dream job faster.
              </p>
              
              <div className="flex flex-wrap gap-4">

                  <Link to="/resumecreator" className="relative px-6 py-3 font-bold group">
                      <span className="create-btn absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                      <span className="absolute inset-0 w-full h-full border-4 create-btn-border"></span>
                      <span className="relative create-btn-text">Create Your Resume</span>
                  </Link>

                <Link to="/about" className="learn-more-btn rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium">
                    <span className="learn-more-btn-span absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span className="learn-more-btn-text relative transition duration-300 ease">Learn More</span>
                </Link>
              </div>
              
              <div className="mt-8 flex items-center space-x-2 text-sm">
                <span className="inline-flex items-center justify-center home-check-icon p-1 rounded-full">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <span>No credit card required</span>
                
                <span className="inline-flex items-center justify-center home-check-icon p-1 rounded-full ml-4">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <span>ATS-friendly templates</span>
                
                <span className="inline-flex items-center justify-center home-check-icon p-1 rounded-full ml-4">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <span>Unlimited downloads</span>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="Resume Example" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 home-pic-text-down p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full home-check-icon flex items-center justify-center">
                    <CheckIcon className="h-5 w-5" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-semibold">ATS-Optimized</p>
                    <p className="text-xs ">Pass through application tracking systems</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 home-pic-text-down p-4 rounded-lg shadow-lg">
                <p className="text-sm font-semibold">3 Professional Themes</p>
                <div className="flex mt-2 space-x-1">
                  <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
                  <span className="w-4 h-4 bg-resume-primary rounded-full"></span>
                  <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 home-mid-sections">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Create Professional Resumes in <span className="gradient-text">Minutes</span>
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              Our intuitive builder makes it easy to create a resume that helps you stand out and gets you noticed by employers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="mid-section-cards overflow-hidden border-resume-primary/10 animate-fade-in">
              <div className="p-6">
                <div className="h-12 w-12 rounded-full gradient-bg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy Step-by-Step Process</h3>
                <p>
                  Our guided form takes you through each section of your resume, making it simple to add your information.
                </p>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="mid-section-cards overflow-hidden border-resume-primary/10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="p-6">
                <div className="h-12 w-12 rounded-full gradient-bg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Professional Templates</h3>
                <p>
                  Choose from multiple professionally designed themes that are proven to catch recruiters' attention.
                </p>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="mid-section-cards overflow-hidden border-resume-primary/10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="p-6">
                <div className="h-12 w-12 rounded-full gradient-bg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Instant PDF Download</h3>
                <p>
                  Export your polished resume as a professional PDF file ready to be sent to employers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Templates Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional <span className="gradient-text">Resume Templates</span>
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              Choose from our collection of professionally designed templates that are optimized for applicant tracking systems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Template 1 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1586282391129-76a6b6a21188?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Modern Resume Template" 
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold">Modern</h3>
                <p className="text-white/80 mb-4">Clean and contemporary design</p>
                <Link to="/builder" className="text-white font-medium hover:text-resume-primary transition-colors">
                  Try This Template →
                </Link>
              </div>
            </div>
            
            {/* Template 2 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1471970394675-613138e45da3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Classic Resume Template" 
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold">Classic</h3>
                <p className="text-white/80 mb-4">Traditional and elegant layout</p>
                <Link to="/builder" className="text-white font-medium hover:text-resume-primary transition-colors">
                  Try This Template →
                </Link>
              </div>
            </div>
            
            {/* Template 3 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <img 
                src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Creative Resume Template" 
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold">Creative</h3>
                <p className="text-white/80 mb-4">Unique design that stands out</p>
                <Link to="/resumecreator" className="text-white font-medium hover:text-resume-primary transition-colors">
                  Try This Template →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">

            <Link to="/resumecreator" class="create-grd-btn relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                <span class="gradient-bg absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out group-hover:h-full"></span>
                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <ArrowRight className="h-6 w-6" />
                </span>
                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <ArrowRight className='h-6 w-6' />
                </span>
                <span class="relative w-full text-left transition-colors duration-200 ease-in-out">Create Your Resume Now</span>
            </Link>

          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 home-mid-sections home-mid-sections">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Users <span className="gradient-text">Are Saying</span>
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              Join thousands of job seekers who have successfully landed interviews using our resume builder.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="mid-section-cards overflow-hidden hover:shadow-lg transition-shadow border-resume-primary/10 animate-fade-in">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full home-some-dot flex items-center justify-center mr-4">
                    "
                  </div>
                  <div>
                    <h3 className="font-semibold">Sarah J.</h3>
                    <p className="text-sm">Marketing Manager</p>
                  </div>
                </div>
                <p>
                  "I applied to 3 jobs with my new resume and got invited to interview for all of them! The templates are beautiful and so easy to customize."
                </p>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="mid-section-cards overflow-hidden hover:shadow-lg transition-shadow border-resume-primary/10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full home-some-dot flex items-center justify-center mr-4">
                    "
                  </div>
                  <div>
                    <h3 className="font-semibold">Michael T.</h3>
                    <p className="text-sm">Software Engineer</p>
                  </div>
                </div>
                <p>
                  "The step-by-step process made it so easy to create a professional resume. I landed my dream job within 2 weeks of using Make-Your-Resume!"
                </p>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="mid-section-cards overflow-hidden hover:shadow-lg transition-shadow border-resume-primary/10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full home-some-dot flex items-center justify-center mr-4">
                    "
                  </div>
                  <div>
                    <h3 className="font-semibold">Alex R.</h3>
                    <p className="text-sm">Recent Graduate</p>
                  </div>
                </div>
                <p>
                  "As a recent graduate with limited experience, I was worried about my resume. Make-Your-Resume helped me highlight my skills and I got a job offer within a month!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-resume-primary to-resume-tertiary -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Create a Winning Resume?
            </h2>
            <p className="text-xl mb-8">
              Join thousands of job seekers who have successfully landed their dream jobs with our professional resume builder.
            </p>

            <Link to="/resumecreator" class="create-grd-btn relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold transition-all duration-150 ease-in-out rounded-lg hover:pl-10 hover:pr-6 group">
                <span class="gradient-bg absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out group-hover:h-full"></span>
                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <ArrowRight className="h-6 w-6" />
                </span>
                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <ArrowRight className='h-6 w-6' />
                </span>
                <span class="relative w-full text-left transition-colors duration-200 ease-in-out">Get Started For Free</span>
            </Link>
            
            <p className="mt-6 text-sm">
              No credit card required. Create and download your professional resume in minutes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;