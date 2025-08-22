import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Book, Dumbbell, Home as HomeIcon, Users } from "lucide-react";

const About = () => {
  const leadership = [
    {
      name: "Dr. Robert Anderson",
      position: "President",
      credentials: "Ph.D. in Education Administration, Harvard University. Leading Riverview College with over 25 years of experience in higher education."
    },
    {
      name: "Dr. Maria Gonzalez",
      position: "Vice President, Academic Affairs",
      credentials: "Ph.D. in Biochemistry, Stanford University. Overseeing curriculum development and academic excellence initiatives."
    },
    {
      name: "James Thompson",
      position: "Dean of Student Affairs",
      credentials: "M.Ed. in Student Personnel Services, Columbia University. Dedicated to enhancing student life and campus community."
    }
  ];

  const facilities = [
    {
      icon: Book,
      name: "Anderson Library",
      description: "State-of-the-art library with over 500,000 volumes and 24/7 study spaces",
      color: "text-college-blue"
    },
    {
      icon: Users,
      name: "Science Complex",
      description: "Modern laboratories equipped with cutting-edge research equipment",
      color: "text-green-600"
    },
    {
      icon: Dumbbell,
      name: "Fitness Center", 
      description: "Complete fitness facility with gym, pool, and recreational courts",
      color: "text-orange-600"
    },
    {
      icon: HomeIcon,
      name: "Residence Halls",
      description: "Comfortable living spaces fostering community and academic success",
      color: "text-purple-600"
    }
  ];

  return (
    <div data-testid="page-about">
      {/* About Hero Section */}
      <section className="bg-college-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">About Riverview College</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Established in 1985, Riverview College has been a beacon of academic excellence and innovation for nearly four decades.
            </p>
          </div>
        </div>
      </section>

      {/* College Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-college-navy mb-6">Our Story</h2>
              <p className="text-college-slate text-lg mb-6">
                Founded on the banks of the scenic Riverside, our college began as a small liberal arts institution with a vision to provide quality education in an intimate, supportive environment. Over the years, we have grown into a comprehensive college offering diverse programs while maintaining our commitment to personalized education.
              </p>
              <p className="text-college-slate text-lg">
                Today, Riverview College serves over 3,000 students from across the nation and around the world, offering undergraduate and graduate programs in arts, sciences, and commerce. Our beautiful 150-acre campus combines historic buildings with modern facilities, creating an inspiring environment for learning and growth.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Historic Campus Building" 
                className="rounded-lg shadow-lg w-full"
                data-testid="img-historic-campus"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-shadow" data-testid="card-mission">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="bg-college-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="text-white text-2xl" size={32} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-college-navy">Our Mission</h3>
                </div>
                <p className="text-college-slate text-center">
                  To provide transformative educational experiences that empower students to become critical thinkers, ethical leaders, and engaged citizens who contribute meaningfully to their communities and the global society.
                </p>
              </CardContent>
            </Card>
            <Card className="card-shadow" data-testid="card-vision">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="bg-college-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="text-white text-2xl" size={32} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-college-navy">Our Vision</h3>
                </div>
                <p className="text-college-slate text-center">
                  To be recognized as a premier liberal arts and sciences institution that cultivates innovation, fosters intellectual curiosity, and prepares graduates to address the challenges of tomorrow with wisdom and integrity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-college-navy mb-4">Leadership Team</h2>
            <p className="text-lg text-college-slate">Meet the dedicated professionals who guide our institution</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="card-shadow text-center" data-testid={`card-leader-${index}`}>
                <CardContent className="p-6">
                  <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold text-xl text-college-navy mb-1">{leader.name}</h3>
                  <p className="text-college-gold font-medium mb-3">{leader.position}</p>
                  <p className="text-college-slate text-sm">{leader.credentials}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-college-navy mb-4">Campus Facilities</h2>
            <p className="text-lg text-college-slate">World-class facilities designed to support academic and personal growth</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <div key={index} className="text-center" data-testid={`facility-${index}`}>
                <Card className="card-shadow mb-4">
                  <CardContent className="p-6">
                    <facility.icon className={`${facility.color} text-3xl mb-3 mx-auto`} size={48} />
                    <h3 className="font-semibold text-lg mb-2">{facility.name}</h3>
                    <p className="text-college-slate text-sm">{facility.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
