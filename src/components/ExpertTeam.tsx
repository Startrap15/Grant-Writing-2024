import React from 'react';
import { Award, Star } from 'lucide-react';

export default function ExpertTeam() {
  const team = [
    {
      name: 'Sarah Johnson',
      title: 'Senior Grant Writer',
      expertise: 'Federal Grants',
      experience: '12+ years experience',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300'
    },
    {
      name: 'Michael Chen',
      title: 'Program Director',
      expertise: 'Research Grants',
      experience: '15+ years experience',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300'
    },
    {
      name: 'Emily Rodriguez',
      title: 'Grant Strategist',
      expertise: 'Non-Profit Grants',
      experience: '8+ years experience',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=300'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Our Expert Team</h2>
          <p className="mt-4 text-xl text-gray-600">
            Industry leaders with proven track records in grant success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-[#4169E1] font-semibold mb-4">{member.title}</p>
              <div className="flex items-center justify-center mb-2">
                <Award className="h-5 w-5 text-[#4169E1] mr-2" />
                <span className="text-gray-700">{member.expertise}</span>
              </div>
              <div className="flex items-center justify-center">
                <Star className="h-5 w-5 text-[#4169E1] mr-2" />
                <span className="text-gray-700">{member.experience}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}