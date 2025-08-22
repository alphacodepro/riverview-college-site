import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone, Mail } from "lucide-react";

const Admissions = () => {
  const applicationSteps = [
    {
      step: "1",
      title: "Submit Application",
      description: "Complete the online application form with personal information and academic history.",
      color: "bg-college-blue"
    },
    {
      step: "2",
      title: "Submit Documents",
      description: "Send official transcripts, test scores, and letters of recommendation.",
      color: "bg-college-gold"
    },
    {
      step: "3", 
      title: "Interview (Optional)",
      description: "Participate in an interview with admissions staff or alumni.",
      color: "bg-purple-600"
    },
    {
      step: "4",
      title: "Decision",
      description: "Receive admissions decision and financial aid information.",
      color: "bg-green-600"
    }
  ];

  const undergraduateRequirements = [
    "High school diploma or equivalent",
    "Minimum GPA of 3.0 on a 4.0 scale",
    "SAT or ACT scores (optional for 2024)",
    "Personal essay or statement of purpose",
    "Two letters of recommendation",
    "Official high school transcripts"
  ];

  const graduateRequirements = [
    "Bachelor's degree from accredited institution",
    "Minimum undergraduate GPA of 3.0", 
    "GRE scores (program dependent)",
    "Statement of purpose",
    "Three letters of recommendation",
    "Official college transcripts"
  ];

  const fallDates = [
    { label: "Early Decision Deadline", date: "November 15, 2023" },
    { label: "Regular Decision Deadline", date: "January 15, 2024" },
    { label: "Decision Notification", date: "March 15, 2024" },
    { label: "Enrollment Deposit Due", date: "May 1, 2024" }
  ];

  const springDates = [
    { label: "Application Deadline", date: "October 1, 2024" },
    { label: "Decision Notification", date: "November 15, 2024" },
    { label: "Enrollment Deposit Due", date: "December 1, 2024" },
    { label: "Classes Begin", date: "January 15, 2025" }
  ];

  return (
    <div data-testid="page-admissions">
      {/* Admissions Hero */}
      <section className="bg-college-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Admissions</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Begin your journey at Riverview College. We're here to guide you through every step of the application process.
            </p>
          </div>
        </div>
      </section>

      {/* Admissions Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-college-navy mb-6">Join Our Community</h2>
            <p className="text-lg text-college-slate max-w-4xl mx-auto">
              At Riverview College, we seek students who are intellectually curious, academically prepared, and ready to contribute to our vibrant campus community. Our holistic admissions process evaluates each applicant as a whole person, considering academic achievement, extracurricular involvement, personal qualities, and potential for growth.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center" data-testid="stat-students">
              <div className="bg-college-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">3K+</span>
              </div>
              <h3 className="font-semibold text-xl mb-2">Students Enrolled</h3>
              <p className="text-college-slate">Diverse community from all backgrounds</p>
            </div>
            <div className="text-center" data-testid="stat-ratio">
              <div className="bg-college-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">15:1</span>
              </div>
              <h3 className="font-semibold text-xl mb-2">Student-Faculty Ratio</h3>
              <p className="text-college-slate">Personalized attention and mentorship</p>
            </div>
            <div className="text-center" data-testid="stat-placement">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">95%</span>
              </div>
              <h3 className="font-semibold text-xl mb-2">Job Placement Rate</h3>
              <p className="text-college-slate">Within 6 months of graduation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-college-navy mb-4">Application Process</h2>
            <p className="text-lg text-college-slate">Follow these steps to complete your application</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applicationSteps.map((step, index) => (
              <Card key={index} className="card-shadow text-center" data-testid={`card-step-${index}`}>
                <CardContent className="p-6">
                  <div className={`${step.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-white font-bold">{step.step}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                  <p className="text-college-slate text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-college-navy mb-4">Important Dates</h2>
            <p className="text-lg text-college-slate">Mark your calendar with these key admissions deadlines</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-shadow" data-testid="card-fall-dates">
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl font-bold text-college-navy mb-4">Fall 2024 Admission</h3>
                <div className="space-y-4">
                  {fallDates.map((dateItem, index) => (
                    <div key={index} className="flex justify-between items-center border-b pb-2">
                      <span className="font-medium">{dateItem.label}</span>
                      <span className="text-college-gold font-semibold">{dateItem.date}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="card-shadow" data-testid="card-spring-dates">
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl font-bold text-college-navy mb-4">Spring 2025 Admission</h3>
                <div className="space-y-4">
                  {springDates.map((dateItem, index) => (
                    <div key={index} className="flex justify-between items-center border-b pb-2">
                      <span className="font-medium">{dateItem.label}</span>
                      <span className="text-college-gold font-semibold">{dateItem.date}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Eligibility Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-college-navy mb-4">Eligibility Requirements</h2>
            <p className="text-lg text-college-slate">Review the requirements for undergraduate and graduate programs</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-shadow" data-testid="card-undergraduate-requirements">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold text-college-navy mb-6 text-center">Undergraduate Programs</h3>
                <ul className="space-y-3">
                  {undergraduateRequirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-college-gold mr-3 mt-1 flex-shrink-0" size={20} />
                      <span className="text-college-slate">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="card-shadow" data-testid="card-graduate-requirements">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold text-college-navy mb-6 text-center">Graduate Programs</h3>
                <ul className="space-y-3">
                  {graduateRequirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-college-gold mr-3 mt-1 flex-shrink-0" size={20} />
                      <span className="text-college-slate">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Apply Now Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-college-navy mb-4">Ready to Apply?</h2>
          <p className="text-lg text-college-slate mb-8">
            Take the first step towards your academic future. Our admissions team is here to help you through the entire process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg text-white" data-testid="button-start-application">
              Start Application
            </Button>
            <Button variant="outline" className="border-2 border-college-navy text-college-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-college-navy hover:text-white transition-all duration-300" data-testid="button-schedule-visit-admissions">
              Schedule Visit
            </Button>
          </div>
          <Card className="bg-blue-50" data-testid="card-help-info">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg text-college-navy mb-2">Need Help?</h3>
              <p className="text-college-slate mb-4">Our admissions counselors are available to answer your questions and guide you through the application process.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                <div className="flex items-center justify-center">
                  <Phone className="text-college-blue mr-2" size={16} />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="text-college-blue mr-2" size={16} />
                  <span>admissions@riverview.edu</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
