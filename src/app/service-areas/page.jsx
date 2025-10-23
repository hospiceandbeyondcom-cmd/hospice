"use client";
import Header from "../Header";
import Footer from "../Footer";

export default function ServiceArea() {
  const areas = [
    "Dallas", "Fort Worth", "Arlington", "Plano", "Irving", "Garland", "Frisco",
    "McKinney", "Grand Prairie", "Richardson", "Mesquite", "Carrollton",
    "Denton", "Lewisville", "Allen", "Waco", "Tyler", "Longview", "Killeen",
    "Round Rock", "Georgetown", "Temple", "Belton", "Austin", "Pflugerville",
    "Cedar Park", "San Antonio", "New Braunfels", "Boerne", "Seguin",
    "Houston", "Pasadena", "Baytown", "Pearland", "League City", "Sugar Land",
    "Katy", "The Woodlands", "Conroe", "Spring", "Tomball", "Beaumont",
    "Port Arthur", "Orange", "Lufkin", "Nacogdoches", "College Station",
    "Bryan", "Abilene", "Wichita Falls", "Lubbock", "Midland", "Odessa",
    "Amarillo", "Brownsville", "Harlingen", "McAllen", "Edinburg", "Mission",
    "Corpus Christi", "Victoria", "San Marcos", "Bastrop", "Ennis", "Waxahachie",
    "Cleburne", "Weatherford", "Sherman", "Greenville", "Rockwall", "Burleson",
    "Huntsville", "Palestine", "Other Surrounding Communities Across Texas"
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />

      {/* ===== Animated Map Section ===== */}
      <section className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/servicearea.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
        />
      </section>

      {/* ===== Page Title ===== */}
      <section className="py-20 text-center px-6 md:px-12 border-b border-gray-100">
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{
            background: "linear-gradient(90deg, #006D66, #7D5F42)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Our Service Areas
        </h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
          Hospice & Beyond proudly serves patients and families across Texas and
          nearby communities — bringing comfort, dignity, and peace to every home we reach.
        </p>
      </section>

      {/* ===== Area List ===== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-4 gap-x-8 text-gray-700 text-lg">
          {areas.map((city, i) => (
            <li key={i} className="hover:text-[#006D66] transition-colors duration-300">
              {city}
            </li>
          ))}
        </ul>
      </section>

      {/* ===== Closing Section ===== */}
      <section
        className="py-20 text-center"
        style={{
          background: "linear-gradient(90deg, #006D66, #7D5F42)",
        }}
      >
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
          Together, We Bring Comfort Across Texas
        </h2>
        <p className="text-white text-lg max-w-3xl mx-auto leading-relaxed mb-8">
          From major cities to rural towns, Hospice & Beyond ensures compassionate care is
          available wherever it’s needed most.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-white text-[#006D66] font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>

      <Footer />
    </div>
  );
}
