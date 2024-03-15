export default function OurPackages() {
  const packages = [
    {
      id: 1,
      name: 'Beachside gateway',
      description:
        'Enjoy a relaxing time by the sea with our Beachside Getaway package.',
      price: '$999',
      duration: '5 days',
      image: 'https://traveler.marriott.com/wp-content/uploads/2021/12/Phu-Quoc-GI-1207687172.jpg', // Replace with your image path
    },
    {
      id: 2,
      name: 'Amazing Italy',
      description:
        'Amazing scenes and urban italy let you go in the old times with this exclusive package.',
      price: '$999',
      duration: '5 days',
      image: 'https://curlytales.com/wp-content/uploads/2019/09/Sea-view-restaurants-in-Mumbai.jpg', // Replace with your image path
    },
    {
      id: 3,
      name: 'Lakshwadeep Island',
      description:
        'Enjoy a relaxing time by the sea with our Beachside Getaway package.',
      price: '$499',
      duration: '4 days',
      image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1020,h_679/https://besthotelsinthailand.com/wp-content/uploads/2023/09/beachfront-hotel-phuket-1202x800.jpg', // Replace with your image path
    },
    // ... Add more packages as needed
  ]

  return (
    <section id="ourPackages">
      <div className="container mx-auto">
        <div className="ourPackages mt-12">
          <div className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-semibold text-center mb-8">
                Our Packages
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {packages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className="bg-white shadow-md rounded-lg overflow-hidden"
                  >
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                      <p className="text-gray-700 mb-4">{pkg.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold">{pkg.price}</span>
                        <span className="text-sm text-gray-600">
                          {pkg.duration}
                        </span>
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
