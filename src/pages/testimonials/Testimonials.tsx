// components/Testimonials.js

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    location: 'New York, USA',
    comment:
      'The trip was fantastic! Everything was organized to perfection. Definitely going to book my next trip with you!',
    avatar: '/images/avatar1.jpg', // Replace with your image path
  },
  {
    id: 2,
    name: 'Shantanu Kumar',
    location: 'New Delhi, India',
    comment:
      'The trip was fantastic! Everything was organized to perfection. Definitely going to book my next trip with you!',
    avatar: '/images/avatar1.jpg', // Replace with your image path
  },
  {
    id: 3,
    name: 'Robin Gagon',
    location: 'California, USA',
    comment:
      'The trip was fantastic! Everything was organized to perfection. Definitely going to book my next trip with you!',
    avatar: '/images/avatar1.jpg', // Replace with your image path
  },
  // ... Add more testimonials as needed
]

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container mx-auto">
        <div className="testimonials">
          <div className="py-16 ">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
                What Our Customers Say
              </h2>
              <div className="flex flex-wrap justify-center -m-4">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="p-4 md:w-1/2 lg:w-1/3">
                    <div className="h-full bg-white p-8 rounded shadow-xl">
                      <div className="text-center mb-4">
                        <div className="w-20 h-20 inline-block rounded-full overflow-hidden border-2 border-blue-300">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <p className="text-lg text-gray-600 mb-4">
                        {testimonial.comment}
                      </p>
                      <div className="text-center">
                        <p className="text-gray-800 font-semibold">
                          {testimonial.name}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
