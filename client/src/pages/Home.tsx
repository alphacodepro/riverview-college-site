import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BookOpen, 
  Users, 
  Lightbulb, 
  FlaskConical, 
  Palette, 
  TrendingUp, 
  GraduationCap, 
  Star, 
  Calendar,
  Mic,
  Theater,
  Quote
} from "lucide-react";

const Home = () => {
  const programs = [
    {
      icon: FlaskConical,
      title: "Bachelor of Science",
      description: "Comprehensive science programs including Biology, Chemistry, Physics, and Mathematics.",
      bgColor: "bg-blue-100",
      iconColor: "text-college-blue"
    },
    {
      icon: Palette,
      title: "Bachelor of Arts",
      description: "Liberal arts education with majors in Literature, History, Philosophy, and Fine Arts.",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Bachelor of Commerce",
      description: "Business-focused curriculum covering Accounting, Finance, Marketing, and Management.",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: GraduationCap,
      title: "Master of Science",
      description: "Advanced graduate programs for specialized research and professional development.",
      bgColor: "bg-red-100",
      iconColor: "text-red-600"
    }
  ];

  const testimonials = [
    {
      quote: "Riverview College didn't just provide me with an education – it gave me the confidence to pursue my dreams. The mentorship from faculty and the research opportunities opened doors I never imagined possible.",
      name: "Dr. Sarah Mitchell",
      title: "Class of 2015, Research Scientist at NASA"
    },
    {
      quote: "The liberal arts education at Riverview taught me to think critically and communicate effectively. These skills have been invaluable in my career as a social entrepreneur.",
      name: "Marcus Johnson", 
      title: "Class of 2018, Founder of GreenTech Solutions"
    }
  ];

  const newsItems = [
    {
      date: "March 15, 2024",
      title: "New Research Center Opens",
      description: "The state-of-the-art Riverside Research Center for Environmental Sciences officially opened its doors, featuring cutting-edge laboratories and sustainable design elements."
    },
    {
      date: "March 10, 2024",
      title: "Student Wins National Award",
      description: "Emma Rodriguez, a senior Biology major, received the prestigious National Science Foundation Graduate Research Fellowship for her work on marine ecosystems."
    },
    {
      date: "March 5, 2024",
      title: "Spring Concert Series",
      description: "The Music Department announces its Spring Concert Series featuring performances by student ensembles and guest artists from around the region."
    }
  ];

  const events = [
    {
      date: "April 15, 2024",
      time: "2:00 PM - 4:00 PM",
      title: "Spring Open House",
      description: "Explore our campus, meet faculty, and learn about our programs. Perfect for prospective students and families.",
      icon: Calendar,
      borderColor: "border-l-4 border-college-blue",
      bgColor: "bg-college-blue"
    },
    {
      date: "April 22, 2024", 
      time: "7:00 PM - 9:00 PM",
      title: "Guest Lecture Series",
      description: "Dr. Amanda Chen discusses \"Climate Change and Marine Biology\" in Thompson Auditorium.",
      icon: Mic,
      borderColor: "border-l-4 border-college-gold",
      bgColor: "bg-college-gold"
    },
    {
      date: "May 1, 2024",
      time: "8:00 PM",
      title: "Spring Theater Production",
      description: "The Drama Department presents Shakespeare's \"A Midsummer Night's Dream\" at the Riverside Theater.",
      icon: Theater,
      borderColor: "border-l-4 border-purple-500",
      bgColor: "bg-purple-500"
    }
  ];

  const whyChooseUs = [
    {
      icon: Star,
      title: "Nationally Ranked Programs",
      description: "Multiple programs ranked in the top 25% nationally"
    },
    {
      icon: Users,
      title: "Small Class Sizes", 
      description: "15:1 student-to-faculty ratio for personalized attention"
    },
    {
      icon: Users,
      title: "Career Services",
      description: "95% job placement rate within 6 months of graduation"
    },
    {
      icon: Users,
      title: "Affordable Tuition",
      description: "Competitive rates with generous financial aid packages"
    },
    {
      icon: Users,
      title: "Study Abroad",
      description: "Partnerships with universities in 15+ countries"
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Strong tradition of service learning and civic engagement"
    }
  ];

  return (
    <div data-testid="page-home">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Riverview College of<br />Arts & Science
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
              Shaping tomorrow's leaders through academic excellence, innovation, and community engagement since 1985.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg" data-testid="button-apply-now">
                Apply Now
              </Button>
              <Button variant="outline" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-college-navy transition-all duration-300" data-testid="button-virtual-tour">
                Virtual Tour
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-college-navy mb-4">Welcome to Excellence</h2>
            <p className="text-lg text-college-slate max-w-3xl mx-auto">
              At Riverview College, we foster an environment where academic rigor meets creative exploration. 
              Our diverse community of scholars, researchers, and innovators work together to push the boundaries of knowledge and prepare students for successful careers in an ever-evolving world.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-college-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-white text-2xl" size={32} />
              </div>
              <h3 className="font-semibold text-xl mb-2">Academic Excellence</h3>
              <p className="text-college-slate">Rigorous curriculum designed to challenge and inspire students across all disciplines.</p>
            </div>
            <div className="text-center">
              <div className="bg-college-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white text-2xl" size={32} />
              </div>
              <h3 className="font-semibold text-xl mb-2">Community Focus</h3>
              <p className="text-college-slate">Building lasting relationships and networks that extend far beyond graduation.</p>
            </div>
            <div className="text-center">
              <div className="bg-college-navy w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-white text-2xl" size={32} />
              </div>
              <h3 className="font-semibold text-xl mb-2">Innovation</h3>
              <p className="text-college-slate">Cutting-edge research opportunities and state-of-the-art facilities for hands-on learning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-college-navy mb-4">Our Programs</h2>
            <p className="text-lg text-college-slate">Discover your passion through our comprehensive academic offerings</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className="card-shadow text-center" data-testid={`card-program-${index}`}>
                <CardContent className="p-6">
                  <div className={`${program.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <program.icon className={`${program.iconColor} text-2xl`} size={32} />
                  </div>
                  <h3 className="font-semibold text-xl mb-3">{program.title}</h3>
                  <p className="text-college-slate mb-4">{program.description}</p>
                  <a href="/academics" className="text-college-blue font-medium hover:underline" data-testid={`link-program-${index}`}>
                    Learn More →
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Life Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-college-navy mb-4">Campus Life</h2>
            <p className="text-lg text-college-slate">Experience vibrant student life at our beautiful riverside campus</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-lg card-shadow">
              <img 
                src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Campus Buildings" 
                className="w-full h-64 object-cover"
                data-testid="img-campus-buildings"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="font-semibold text-xl mb-2">Historic Campus</h3>
                  <p>Beautiful architecture and modern facilities</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg card-shadow">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Students Studying" 
                className="w-full h-64 object-cover"
                data-testid="img-students-studying"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="font-semibold text-xl mb-2">Study Groups</h3>
                  <p>Collaborative learning environments</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg card-shadow">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Graduation Ceremony" 
                className="w-full h-64 object-cover"
                data-testid="img-graduation-ceremony"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="font-semibold text-xl mb-2">Graduation</h3>
                  <p>Celebrating academic achievements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-college-navy mb-4">Alumni Success Stories</h2>
            <p className="text-lg text-college-slate">Hear from our graduates making a difference in the world</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-shadow" data-testid={`card-testimonial-${index}`}>
                <CardContent className="p-8">
                  <div className="mb-6">
                    <Quote className="text-college-gold text-2xl mb-4" size={32} />
                    <p className="text-college-slate text-lg leading-relaxed">
                      {testimonial.quote}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="ml-4">
                      <h4 className="font-semibold text-college-navy">{testimonial.name}</h4>
                      <p className="text-college-slate">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-college-navy mb-4">News & Updates</h2>
            <p className="text-lg text-college-slate">Stay informed about the latest developments at Riverview College</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {newsItems.map((item, index) => (
              <Card key={index} className="card-shadow overflow-hidden" data-testid={`card-news-${index}`}>
                <CardContent className="p-6">
                  <div className="text-college-gold font-medium text-sm mb-2">{item.date}</div>
                  <h3 className="font-semibold text-xl mb-3 text-college-navy">{item.title}</h3>
                  <p className="text-college-slate mb-4">{item.description}</p>
                  <a href="#" className="text-college-blue font-medium hover:underline" data-testid={`link-news-${index}`}>
                    Read More →
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-college-navy mb-4">Upcoming Events</h2>
            <p className="text-lg text-college-slate">Join us for these exciting campus events</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <Card key={index} className={`card-shadow ${event.borderColor}`} data-testid={`card-event-${index}`}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`${event.bgColor} text-white rounded-lg p-3 mr-4`}>
                      <event.icon size={24} />
                    </div>
                    <div>
                      <div className="text-college-gold font-semibold">{event.date}</div>
                      <div className="text-sm text-college-slate">{event.time}</div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{event.title}</h3>
                  <p className="text-college-slate mb-4">{event.description}</p>
                  <a href="#" className="text-college-blue font-medium hover:underline" data-testid={`link-event-${index}`}>
                    Learn More →
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-college-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Why Choose Riverview College?</h2>
            <p className="text-xl text-blue-100">Discover what sets us apart as a premier institution of higher learning</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center" data-testid={`feature-${index}`}>
                <div className="bg-college-gold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-white" size={20} />
                </div>
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-college-navy mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-lg text-college-slate mb-8">
            Join our community of scholars, innovators, and leaders. Your future starts here at Riverview College.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg text-white" data-testid="button-apply-today">
              Apply Today
            </Button>
            <Button variant="outline" className="border-2 border-college-navy text-college-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-college-navy hover:text-white transition-all duration-300" data-testid="button-schedule-visit">
              Schedule Visit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
