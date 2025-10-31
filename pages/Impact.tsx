
import React from 'react';

const products = [
  { name: 'School Rulers', description: 'Durable and practical rulers for everyday classroom use.', imageUrl: 'https://picsum.photos/400/300?image=1073' },
  { name: 'Pen Holders', description: 'Keep desks organized with these stylish and sturdy pen holders.', imageUrl: 'https://picsum.photos/400/300?image=1074' },
  { name: 'Classroom Benches', description: 'Comfortable and weather-resistant benches for school common areas.', imageUrl: 'https://picsum.photos/400/300?image=1075' },
  { name: 'Plant Pots', description: 'Eco-friendly pots perfect for school gardening projects.', imageUrl: 'https://picsum.photos/400/300?image=1076' },
  { name: 'Building Bricks', description: 'Interlocking bricks for small construction projects on campus.', imageUrl: 'https://picsum.photos/400/300?image=1077' },
  { name: 'Coasters', description: 'Colorful coasters to protect surfaces in the staff room.', imageUrl: 'https://picsum.photos/400/300?image=1078' },
];

const testimonials = [
    { quote: "GreenLoop changed how I see waste!", author: "Student, Dhaka", school: "Participant" },
    { quote: "Our school is much cleaner thanks to GreenLoop.", author: "Principal, Chittagong", school: "Partner School" }
]

const Impact: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <header className="bg-green-primary py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Our Impact & Products</h1>
          <p className="mt-2 text-xl">Creating tangible change from plastic waste.</p>
        </div>
      </header>

      {/* Impact Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-dark mb-4">More Than Just Recycling</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            <span className="font-semibold"><span className="text-green-primary">Green</span><span className="text-blue-primary">Loop</span></span> isn't just recycling plastic; we're cultivating a generation of environmentally conscious leaders. We turn waste into value, demonstrating the power of community action.
          </p>
        </div>
      </section>
      
      {/* Statistics Section */}
      <section className="py-16 bg-green-dark text-white">
          <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                      <h3 className="text-4xl font-bold text-green-accent">1,500+ kg</h3>
                      <p className="mt-2 text-lg">Plastic Diverted from Landfills</p>
                  </div>
                  <div>
                      <h3 className="text-4xl font-bold text-green-accent">7,500+</h3>
                      <p className="mt-2 text-lg">Students Engaged</p>
                  </div>
                  <div>
                      <h3 className="text-4xl font-bold text-green-accent">20+</h3>
                      <p className="mt-2 text-lg">Schools Partnered</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Upcycled Products Showcase */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-dark">Upcycled Products Showcase</h2>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              From discarded bottles to durable rulers and functional pen holders, see how we give plastic a new life. These products demonstrate the circular economy in action.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.name} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                <img src={product.imageUrl} alt={product.name} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-dark mb-2">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-dark mb-12">What People Are Saying</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-neutral-light p-8 rounded-lg">
                <p className="text-gray-700 italic text-lg mb-4">
                  "
                  {testimonial.quote.split('GreenLoop').map((part, i, arr) => (
                    <React.Fragment key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <span className="font-semibold not-italic">
                          <span className="text-green-primary">Green</span>
                          <span className="text-blue-primary">Loop</span>
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                  "
                </p>
                <p className="font-bold text-green-primary">{testimonial.author}</p>
                <p className="text-gray-600">{testimonial.school}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
