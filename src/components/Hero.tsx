import React from 'react';
import { Award, Users, TrendingUp, Medal } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-24 pb-48 bg-[#4169E1] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Expert Grant Writing<br />& Government<br />Contract Solutions
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Professional grant writing and government proposal services backed by decades of experience and proven expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-[#4169E1] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center font-semibold">
                Start Free Consultation
                <span className="ml-2">→</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold">
                View Success Stories
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#5277e5] p-8 rounded-2xl">
              <Award className="h-12 w-12 text-[#ffd700] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
              <p className="text-gray-200">Consistent success in securing funding</p>
            </div>
            <div className="bg-[#5277e5] p-8 rounded-2xl">
              <Users className="h-12 w-12 text-[#90EE90] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-200">Former grant reviewers & proposal writers</p>
            </div>
            <div className="bg-[#5277e5] p-8 rounded-2xl">
              <TrendingUp className="h-12 w-12 text-[#FF69B4] mb-4" />
              <h3 className="text-xl font-semibold mb-2">15+ Years</h3>
              <p className="text-gray-200">Of industry expertise</p>
            </div>
            <div className="bg-[#5277e5] p-8 rounded-2xl">
              <Medal className="h-12 w-12 text-[#FFA500] mb-4" />
              <h3 className="text-xl font-semibold mb-2">500+ Clients</h3>
              <p className="text-gray-200">Across various sectors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}