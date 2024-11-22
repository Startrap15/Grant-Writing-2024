import React from 'react';
import { FileText, Search, BarChart3, GraduationCap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: FileText,
      title: 'Grant Applications',
      description: 'Tailored grant proposals for individuals and organizations.',
      services: ['Drafting', 'Compliance reviews', 'Application submissions']
    },
    {
      icon: Search,
      title: 'Funding Research',
      description: 'Identifying the best funding opportunities tailored to specific goals.',
      services: ['Database access', 'Insights', 'Custom research']
    },
    {
      icon: BarChart3,
      title: 'Program Development',
      description: 'Strategic guidance for building fundable programs.',
      services: ['Planning', 'Budgeting', 'Narrative alignment']
    },
    {
      icon: GraduationCap,
      title: 'Training Workshops',
      description: 'Equipping teams with grant writing expertise.',
      services: ['Virtual training', 'On-site sessions', 'Ongoing support']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Our Specialized Services</h2>
          <p className="mt-4 text-xl text-gray-600">Comprehensive solutions tailored to your funding needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-6">
                <div className="bg-[#4169E1]/10 p-3 rounded-lg">
                  <service.icon className="h-8 w-8 text-[#4169E1]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="space-y-3">
                {service.services.map((item, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-2 h-2 bg-[#4169E1] rounded-full mr-3"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}