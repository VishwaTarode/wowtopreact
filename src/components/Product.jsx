import "./../../public/assets/product.css?v5";
{/*export default function Product() {
  const productItems = [
    {
      id: 1,
      title: "Automated Assembly & Production Line",
      excerpt: "High-precision automated assembly and production line designed for consumer electronics and automotive applications. It integrates advanced motion control, visual inspection, and robotic handling technologies to achieve fully automated, high-efficiency, and stable manufacturing processes.",
      category: "Product",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "Precision Tooling & Inspection Fixture",
      excerpt: "Custom-designed tooling and inspection fixture used for positioning, clamping, and functional testing of components such as smartphones and wearable devices. Ensures high repeatability, dimensional accuracy, and improved product quality during the assembly and inspection stages.",
      category: "Product",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "FA Precision Components & Standard Parts",
      excerpt: "Comprehensive range of FA (Factory Automation) precision components and standard mechanical parts, including linear bearings, couplings, brackets, pneumatic elements, aluminum profiles, and structural frames. These components are the building blocks for automation systems, robotic platforms, and custom equipment.",
      category: "Product",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ]

  return (
    <section id="product" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Product
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understand the latest developments of the company and master the cutting-edge information of the industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productItems.map((item, index) => (
            <article 
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `\${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300">
            View more product
          </button>
        </div>
      </div>
    </section>
  )
}
*/}


export default function Product() {
  const downloadproduct = () => {
    const link = document.createElement("a");
    link.href = "/document/Product Catalog.docx"; // make sure file name and path are correct
    link.download = "Product Catalog.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <section id="product" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Product
          </h2>
        </div>

        <div className="">

          <div class="pcontainer">

    <div class="psection">
      <div class="pimage">
        <img src="image/product/automated.jpg" alt="Automated Assembly & Production Line"/>
      </div>
      <div class="pcontent">
        {/*<div class="pnumber">1</div>*/}
        <h2>Automated Assembly & Production Line</h2>
        <p><strong>Description:</strong> High-precision <strong>automated assembly and production line</strong> designed for consumer electronics and automotive applications. It integrates advanced motion control, visual inspection, and robotic handling technologies to achieve fully automated, high-efficiency, and stable manufacturing processes.</p>
      </div>
    </div>

    <div class="psection">
      <div class="pimage">
        <img src="image/product/FAPrecision.jpg" alt="Precision Tooling & Inspection Fixture"/>
      </div>
      <div class="pcontent">
        {/*<div class="pnumber">2</div>*/}
        <h2>Precision Tooling & Inspection Fixture</h2>
        <p><strong>Description:</strong> Custom-designed <strong>tooling and inspection fixture</strong> used for positioning, clamping, and functional testing of components such as smartphones and wearable devices. Ensures high repeatability, dimensional accuracy, and improved product quality during the assembly and inspection stages.</p>
      </div>
    </div>

    <div class="psection">
      <div class="pimage">
        <img src="image/product/Precision.jpg" alt="FA Precision Components & Standard Parts"/>
      </div>
      <div class="pcontent">
        {/*<div class="pnumber">3</div>*/}
        <h2>FA Precision Components & Standard Parts</h2>
        <p><strong>Description:</strong> Comprehensive range of <strong>FA (Factory Automation) precision components and standard mechanical parts</strong>, including linear bearings, couplings, brackets, pneumatic elements, aluminum profiles, and structural frames. These components are the building blocks for automation systems, robotic platforms, and custom equipment.</p>
      </div>
    </div>

  </div>


          
        </div>

        <div className="text-center mt-12">
          <button onClick={downloadproduct} className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300">
            Production Category download 
          </button>
        </div>
      </div>
    </section>
  )
}