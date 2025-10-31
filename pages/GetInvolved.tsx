
import React, { useState } from 'react';

const GetInvolved: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus(`Thank you, ${formData.name}! Your message has been sent.`);
      setFormData({ name: '', email: '', organization: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="animate-fadeIn">
      <header className="bg-green-primary py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Get Involved</h1>
          <p className="mt-2 text-xl">Be a part of the solution. Join the <span className="font-semibold"><span className="text-green-accent">Green</span><span className="text-blue-light">Loop</span></span> movement.</p>
        </div>
      </header>

      {/* Ways to Get Involved Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-2xl font-bold text-green-dark mb-3">For Schools & Universities</h3>
              <p className="text-gray-700">Partner with <span className="font-semibold"><span className="text-green-primary">Green</span><span className="text-blue-primary">Loop</span></span> to bring our innovative recycling program to your campus. Contact us to schedule a presentation and pilot project.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-2xl font-bold text-green-dark mb-3">For Students</h3>
              <p className="text-gray-700">Want to start a <span className="font-semibold"><span className="text-green-primary">Green</span><span className="text-blue-primary">Loop</span></span> chapter at your school? Get in touch, and we'll help you get started!</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-2xl font-bold text-green-dark mb-3">For Sponsors & Volunteers</h3>
              <p className="text-gray-700">Your support helps us expand our reach and impact. Learn how you can contribute to a greener Bangladesh.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-dark mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-green-dark mb-4">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" name="name" id="name" required value={formData.name} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-primary focus:border-green-primary" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" name="email" id="email" required value={formData.email} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-primary focus:border-green-primary" />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700">Organization / School</label>
                  <input type="text" name="organization" id="organization" value={formData.organization} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-primary focus:border-green-primary" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                  <input type="text" name="subject" id="subject" required value={formData.subject} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-primary focus:border-green-primary" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-primary focus:border-green-primary"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-green-primary hover:bg-green-dark text-white font-bold py-3 px-6 rounded-md transition duration-300">
                    Send Message
                  </button>
                </div>
              </form>
              {formStatus && <p className="mt-4 text-center text-green-dark">{formStatus}</p>}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-dark mb-4">Contact Information</h3>
              <div className="space-y-4 text-gray-700">
                <p><strong>Email:</strong> <a href="mailto:contact@greenloop.org" className="text-green-primary hover:underline">contact@greenloop.org</a></p>
                <p><strong>Phone:</strong> +880 123 456 7890 (Placeholder)</p>
                <p><strong>Address:</strong> Dhaka, Bangladesh (Main Office)</p>
                <p>We're looking forward to hearing from you and working together to create a greener future!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
