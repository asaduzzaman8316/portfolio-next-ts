
"use client"
function ContactForm() {

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }
    return (
        <div className=" p-4 text-center">
            <h1 className="text-6xl font-bold">Hire Me.</h1>
            <p className="text-xl text-gray-600 mt-8">I am available for freelance work. Connect with me via phone:</p>
            <h2 className="text-xl font-semibold mt-2 mb-8">011610 839202 <span className="text-gray-600 font-medium">or email: </span>asaduzzaman8316@gmail.com</h2>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-8" >
                <input
                    className="outline-none border-2 border-gray-300 rounded-md px-6 py-3 focus:border-red-500 focus:text-green-500"
                    type="text" placeholder="Your Name *" />
                <input
                    className="outline-none border-2 border-gray-300 rounded-md px-6 py-3 focus:border-red-500 focus:text-green-500"
                    type="text" placeholder="Your email *" />
                <input
                    className="outline-none border-2 border-gray-300 rounded-md px-6 py-3 focus:border-red-500 focus:text-green-500"
                    type="text" placeholder="Write a Sunject *" />
                <textarea
                    className="outline-none border-2 border-gray-300 rounded-md px-6 py-3 focus:border-red-500 focus:text-green-500"
                    rows={10}
                    placeholder="Your Message" />
                <div>
                    <button
                        type="submit"
                        className="bg-[#F9004D] text-white px-6 py-2 text-xl rounded-md tracking-widest uppercase border-3 hover:text-black duration-500 ease-in-out hover:-translate-y-2 hover:bg-white  border-[#F9004D]">
                        submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm
