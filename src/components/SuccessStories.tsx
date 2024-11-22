import React from 'react';
import { Star } from 'lucide-react';

export default function SuccessStories() {
  const stories = [
    {
      name: 'David Wilson',
      title: 'Executive Director',
      organization: 'Education First Foundation',
      content: 'GrantCraft Pro helped us secure a $2.5M federal grant for our STEM education initiative. Their expertise was invaluable throughout the entire process.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      title: 'Research Director',
      organization: 'Healthcare Innovation Labs',
      content: "Outstanding service! The team's attention to detail and strategic approach helped us win multiple research grants.",
      rating: 5
    },
    {
      name: 'Robert Martinez',
      title: 'Program Manager',
      organization: 'Community Development Corp',
      content: "Their expertise in government contracts is unmatched. We've achieved a 90% success rate working with GrantCraft Pro.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Client Success Stories</h2>
          <p className="mt-4 text-xl text-gray-600">
            See what our clients say about their experience with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(story.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">{story.content}</p>
              <div>
                <h4 className="font-bold text-gray-900">{story.name}</h4>
                <p className="text-[#4169E1]">{story.title}</p>
                <p className="text-gray-600 text-sm">{story.organization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}