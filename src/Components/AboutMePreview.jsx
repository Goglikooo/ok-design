export default function AboutMePreview() {
  return (
    <section className="bg-[#f5be9e]">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8  ">
        <div className=" mx-auto grid md:grid-cols-2 gap-5 items-center ">
          <div className=" ">
            <p>
              rame foto Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Impedit, mollitia eum. Vel corrupti asperiores ducimus sint natus
              unde fuga molestiae est error ipsa quod eius, dolorem non a
              assumenda repudiandae.
            </p>
          </div>
          <div className=" ">
            <h2 className="text-5xl font-semibold text-white mb-6">About Me</h2>
            <p className="font-medium tracking-wider mb-8">
              I discovered my passion for interior design during the pandemic
              and have since built a practice around creating beautiful,
              functional spaces. With [X] years of experience and a portfolio of
              successful projects, I handle every step personally — from
              consultation and concept to 3D visualization, feedback,
              documentation, and final implementation. Every space is designed
              to reflect your personality, feel inspiring, and be truly livable.
            </p>
            <button className="bg-[#ea9573] w-full text-white font-semibold pt-2 pb-2 pl-10 pr-10">
              <span>"xxxx"</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
