export default function Jersey() {
    return (

        <div className="w-100 h-full relative">

            <img src="https://www.fcbarcelona.com/photo-resources/2024/08/05/1151f5d8-9013-4f4b-ab5c-fbff1af6ece4/1800x900_NewKit.png?width=1600&height=700" alt="Jersey" className="w-full h-full object-cover" />
            <div className="w-full h-full absolute top-0 left-0 flex flex-col justify-end items-center" style={{ background: 'linear-gradient(180deg, rgba(9,0,10,0.4430147058823529) 85%, rgba(3,31,121,1) 97%)', paddingBottom: '40px' }}>
                <h1 className="text-orange-300 text-2xl font-bold mb-2">WIN THE NEW JERSEY!</h1>
                <a href="/jersey" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                    <span className="w-full h-full bg-gradient-to-r from-[#c91430] via-[#8a1dfd] to-[#4561fc] group-hover:from-[#c9001f] group-hover:via-[#51099c] group-hover:to-[#001dbe] absolute"></span>
                    <span className="relative px-6 py-1 transition-all ease-out bg-[#e60426] rounded-md group-hover:bg-opacity-0 duration-400">
                        <span className="relative text-white">TAKE PART</span>
                    </span>
                </a>
            </div>
        </div>
    )
}