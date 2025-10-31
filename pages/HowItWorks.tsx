import React from 'react';

const processSteps = [
  {
    step: 1,
    title: 'Educate & Engage',
    description: 'Interactive workshops for students on plastic pollution, sorting, and the circular economy.',
    imageUrl: 'https://picsum.photos/600/400?image=24'
  },
  {
    step: 2,
    title: 'Collect & Sort',
    description: 'Students gather clean, dry plastic from homes and campus in designated GreenLoop collection points.',
    imageUrl: 'https://picsum.photos/600/400?image=550'
  },
  {
    step: 3,
    title: 'Process & Produce',
    description: 'Our mobile plastic plant visits the campus to process collected plastic into useful items.',
    imageUrl: 'https://picsum.photos/600/400?image=3'
  },
  {
    step: 4,
    title: 'Impact & Reward',
    description: 'Students receive upcycled products, schools benefit from a cleaner environment, and the community fosters environmental stewardship.',
    imageUrl: 'https://picsum.photos/600/400?image=1073'
  },
];

const acceptablePlastics = [
  { name: 'PET Bottles', example: 'Water, soda bottles', code: '1' },
  { name: 'HDPE Containers', example: 'Milk jugs, shampoo bottles', code: '2' },
  { name: 'Plastic Caps', example: 'Bottle lids of all sizes', code: '5' },
];

const benefits = [
  { title: 'For Students', description: 'Practical learning, eco-champions, useful products.' },
  { title: 'For Schools', description: 'Cleaner campus, sustainability leader, community engagement.' },
  { title: 'For the Environment', description: 'Reduced pollution, resource conservation.' },
];

const HowItWorks: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <header className="bg-green-primary py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">How GreenLoop Works</h1>
          <p className="mt-2 text-xl">A simple process for a powerful impact.</p>
        </div>
      </header>

      {/* Step-by-Step Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-dark mb-12">Our Four-Step Process</h2>
          <div className="space-y-12">
            {processSteps.map((item, index) => (
              <div key={item.step} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2">
                  <img src={item.imageUrl} alt={item.title} className="rounded-lg shadow-lg" />
                </div>
                <div className="md:w-1/2">
                  <span className="inline-block bg-green-accent text-green-dark font-bold text-lg py-1 px-3 rounded-full mb-3">Step {item.step}</span>
                  <h3 className="text-2xl font-bold text-green-dark mb-3">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* What to Collect Section */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-dark mb-12">What You Can Collect</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {acceptablePlastics.map((plastic) => (
              <div key={plastic.name} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center border-4 border-green-primary rounded-full text-green-primary text-2xl font-bold">
                  {plastic.code}
                </div>
                <h3 className="text-xl font-semibold text-green-dark">{plastic.name}</h3>
                <p className="text-gray-600">e.g., {plastic.example}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-gray-700">Please make sure all items are clean and empty before collection!</p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-dark mb-12">The Benefits of Joining the Loop</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-green-light p-8 rounded-lg text-green-dark">
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;