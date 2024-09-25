function Hero({ menuOpen }) {
    return (
        <div className={`${menuOpen ? 'hidden' : 'block'} mt-20 md:mt-32 lg:mt-52 px-4 md:px-8 text-center lg:text-left`}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium text-white leading-tight">
                Witness the Thrill of IPL 2024!
            </h1>
            <p className="mt-3 md:mt-5 text-sm md:text-base lg:text-lg text-gray-300 font-medium">
                Get ready for the ultimate cricket extravaganza. Stay tuned to watch your favorite teams battle for glory
                <br className="hidden lg:block" /> in this year's IPL season, live on national TV!
            </p>
            <button className="rounded-full p-3 px-5 bg-blue-600 text-gray-100 font-medium text-sm md:text-base mt-5">
                LEARN MORE
            </button>
        </div>
    );
}

export default Hero;
