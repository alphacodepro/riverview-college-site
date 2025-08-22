import { Card, CardContent } from "@/components/ui/card";
import { 
  Atom, 
  Palette, 
  TrendingUp, 
  GraduationCap, 
  Microscope, 
  Globe, 
  Award, 
  CheckCircle 
} from "lucide-react";

const Academics = () => {
  const departments = [
    {
      icon: Atom,
      title: "Sciences",
      description: "Our science programs combine theoretical knowledge with hands-on research opportunities. Students work alongside faculty on cutting-edge projects in state-of-the-art laboratories.",
      programs: [
        "Biology & Environmental Science",
        "Chemistry & Biochemistry", 
        "Physics & Astronomy",
        "Mathematics & Statistics"
      ],
      bgColor: "bg-blue-100",
      iconColor: "text-college-blue"
    },
    {
      icon: Palette,
      title: "Liberal Arts",
      description: "Our liberal arts programs develop critical thinking, communication skills, and cultural understanding through interdisciplinary approaches to learning.",
      programs: [
        "English Literature & Creative Writing",
        "History & Political Science",
        "Philosophy & Religious Studies", 
        "Fine Arts & Theatre"
      ],
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Business & Commerce",
      description: "Our business programs prepare students for leadership roles in the global economy through practical experience and ethical business practices.",
      programs: [
        "Business Administration",
        "Accounting & Finance",
        "Marketing & Communications",
        "Economics"
      ],
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: GraduationCap,
      title: "Graduate Programs",
      description: "Advanced degree programs designed for specialized study and research, preparing graduates for leadership in their chosen fields.",
      programs: [
        "Master of Science Programs",
        "Master of Arts Programs",
        "Master of Business Administration",
        "Certificate Programs"
      ],
      bgColor: "bg-red-100",
      iconColor: "text-red-600"
    }
  ];

  const researchOpportunities = [
    {
      icon: Microscope,
      title: "Undergraduate Research",
      description: "Work directly with faculty members on cutting-edge research projects, presenting findings at national conferences.",
      color: "bg-college-blue"
    },
    {
      icon: Globe,
      title: "International Collaborations",
      description: "Participate in global research initiatives with partner institutions around the world.",
      color: "bg-college-gold"
    },
    {
      icon: Award,
      title: "Research Grants",
      description: "Access to competitive research grants and funding opportunities for independent study projects.",
      color: "bg-purple-600"
    }
  ];

  const libraryFeatures = [
    "Digital databases and online journals",
    "Research consultation services",
    "Multimedia production studio"
  ];

  const labFeatures = [
    "Spectroscopy and chromatography equipment",
    "Cell culture and molecular biology facilities", 
    "Environmental monitoring station"
  ];

  return (
    <div data-testid="page-academics">
      {/* Academics Hero */}
      <section className="bg-college-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Academics</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover rigorous academic programs designed to challenge, inspire, and prepare you for success in your chosen field.
            </p>
          </div>
        </div>
      </section>

      {/* Academic Philosophy */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-college-navy mb-6">Our Academic Philosophy</h2>
            <p className="text-lg text-college-slate max-w-4xl mx-auto">
              At Riverview College, we believe in the transformative power of a liberal arts and sciences education. Our approach combines rigorous academic inquiry with hands-on learning experiences, encouraging students to think critically, communicate effectively, and solve complex problems. We foster an environment where intellectual curiosity thrives and students are empowered to become lifelong learners.
            </p>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-college-navy mb-4">Academic Departments</h2>
            <p className="text-lg text-college-slate">Explore our comprehensive range of academic programs</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((department, index) => (
              <Card key={index} className="card-shadow" data-testid={`card-department-${index}`}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`${department.bgColor} p-3 rounded-lg mr-4`}>
                      <department.icon className={`${department.iconColor} text-2xl`} size={32} />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-college-navy">{department.title}</h3>
                  </div>
                  <p className="text-college-slate mb-4">{department.description}</p>
                  <div className="space-y-2">
                    {department.programs.map((program, programIndex) => (
                      <div key={programIndex} className="flex items-center">
                        <CheckCircle className="text-college-gold text-sm mr-2 flex-shrink-0" size={16} />
                        <span className="text-college-slate">{program}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Opportunities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-college-navy mb-4">Research Opportunities</h2>
            <p className="text-lg text-college-slate">Engage in meaningful research alongside our distinguished faculty</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {researchOpportunities.map((opportunity, index) => (
              <div key={index} className="text-center" data-testid={`research-${index}`}>
                <div className={`${opportunity.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <opportunity.icon className="text-white text-2xl" size={32} />
                </div>
                <h3 className="font-semibold text-xl mb-3">{opportunity.title}</h3>
                <p className="text-college-slate">{opportunity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-college-navy mb-4">Academic Resources</h2>
            <p className="text-lg text-college-slate">Comprehensive support services to ensure your academic success</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex">
              <div className="mr-6">
                <img 
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300" 
                  alt="Library Interior" 
                  className="rounded-lg shadow-lg w-64 h-40 object-cover"
                  data-testid="img-library-interior"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-2xl font-bold text-college-navy mb-3">Anderson Library</h3>
                <p className="text-college-slate mb-4">
                  Our state-of-the-art library houses over 500,000 books, journals, and digital resources. Features include collaborative study spaces, individual carrels, and 24/7 access during finals week.
                </p>
                <ul className="space-y-2">
                  {libraryFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="text-college-gold mr-2 flex-shrink-0" size={16} />
                      <span className="text-college-slate">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex">
              <div className="mr-6">
                <img 
                  src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300" 
                  alt="Science Laboratory" 
                  className="rounded-lg shadow-lg w-64 h-40 object-cover"
                  data-testid="img-science-lab"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-2xl font-bold text-college-navy mb-3">Research Laboratories</h3>
                <p className="text-college-slate mb-4">
                  Modern laboratory facilities equipped with cutting-edge instruments for chemistry, biology, physics, and environmental science research.
                </p>
                <ul className="space-y-2">
                  {labFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="text-college-gold mr-2 flex-shrink-0" size={16} />
                      <span className="text-college-slate">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
