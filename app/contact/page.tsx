// "use client";
import Image from "next/image";
const Contact = () => {
    return (
        <div className="py-12 text-center flex flex-col gap-y-12  max-w-[1100px] m-auto">
            <div className="flex flex-col gap-y-1">
                <h1 className="text-xl text-kaiglo_brand-base font-bold ">Contact Us</h1>
                <h2 className="font-bold text-xl">We would love to hear from you.</h2>
                <p className="text-xl text-kaiglo_grey-base">Our friendly team is always here to chat.</p>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between md:px-8 gap-y-6">
                {/* Chat to support us starts here */}
                <section className="flex flex-col items-center gap-y-1">
                    <figure className="border border-kaiglo_grey-disabled p-2 w-[48px] h-[48px] flex items-center justify-center rounded-xl">
                        <Image src={"/images/sms.svg"} alt="sms icon" width={24} height={24} />
                    </figure>
                    <h2 className="font-medium">Chat to Support</h2>
                    <p className="text-sm text-kaiglo_grey-placeholder">Speak to our friendly team.</p>
                    <p className="font-medium text-kaiglo_brand-base">help@kaiglo.com</p>
                </section>
                {/* Chat to support ends here */}
                {/* Visit us starts here */}
                <section className="flex flex-col items-center gap-y-1">
                    <figure className="border border-kaiglo_grey-disabled p-2 w-[48px] h-[48px] flex items-center justify-center rounded-xl">
                        <Image src={"/images/location.svg"} alt="location icon" width={24} height={24} />
                    </figure>
                    <h2 className="font-medium">Visit us</h2>
                    <p className="text-sm text-kaiglo_grey-placeholder">Come say hello at our office HQ.</p>
                    <p className="font-medium text-kaiglo_brand-base">3, Ladipo Kuku Allen Avenue, Ikeja</p>
                </section>
                {/* Visit us ends here */}
                {/* Call us starts here */}
                <section className="flex flex-col items-center gap-y-1">
                    <figure className="border border-kaiglo_grey-disabled p-2 w-[48px] h-[48px] flex items-center justify-center rounded-xl">
                        <Image src={"/images/call.svg"} alt="call icon" width={24} height={24} />
                    </figure>
                    <h2 className="font-medium">Call us</h2>
                    <p className="text-sm text-kaiglo_grey-placeholder">Let’s hear from you</p>
                    <p className="font-medium text-kaiglo_brand-base">+234 915 449 1603</p>
                    <p className="font-medium text-kaiglo_brand-base">+234 915 449 1600</p>
                    <p className="font-medium text-kaiglo_brand-base">+234 901 642 3621</p>
                    {/* &nbsp; */}
                </section>
                {/* Call us ends here */}
            </div>

            {/* Contact form starts here */}
            <section className="flex flex-col gap-y-4 md:gap-y-8 text-left px-4 max-w-[600px] m-auto">
                <div className="md:text-center">
                    <h2 className="font-bold text-2xl mb-2">Get in touch</h2>
                    <p className="text-kaiglo_grey-placeholder font-medium mb-4">
                        We would love to hear from you. Fill out this form.
                    </p>
                </div>
                <form action="" className="grid gap-3">
                    <div className="flex flex-col">
                        <label htmlFor="firstname" className="font-medium text-sm">
                            First name
                        </label>
                        <input
                            className="p-3 border border-kaiglo_grey-disabled rounded-lg"
                            type="text"
                            name="firstname"
                            placeholder="First name"
                            id="firstname"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="lastname" className="font-medium text-sm">
                            Last name
                        </label>
                        <input
                            className="p-3 border border-kaiglo_grey-disabled rounded-lg"
                            type="text"
                            name="lastname"
                            placeholder="Last name"
                            id="lastname"
                        />
                    </div>
                    <div className="flex flex-col md:col-span-2">
                        <label htmlFor="email" className="font-medium text-sm">
                            Email
                        </label>
                        <input
                            className="p-3 border border-kaiglo_grey-disabled rounded-lg"
                            type="email"
                            name="email"
                            placeholder="Email"
                            id="email"
                        />
                    </div>
                    <div className="flex flex-col md:col-span-2">
                        <label htmlFor="Message" className="font-medium text-sm">
                            Message
                        </label>
                        <textarea
                            className="p-3 border border-kaiglo_grey-disabled rounded-lg"
                            name="message"
                            id="message"
                            cols={10}
                            rows={5}
                            placeholder="Leave a message..."
                        ></textarea>
                    </div>
                    <div className="py-6 md:col-span-2">
                        <button
                            type="submit"
                            className="rounded-full bg-kaiglo_brand-base w-full p-3 text-white font-medium"
                        >
                            Get in touch
                        </button>
                    </div>
                </form>
            </section>
            {/* Contact form ends here */}
            <figure>
                <Image
                    src={"/images/No_1_Platform_2.png"}
                    alt="No 1 E-commerce platform"
                    width={800}
                    height={400}
                    objectFit="cover"
                    className="md:hidden md:w-full md:h-[350px] p-4"
                />
                <Image
                    src={"/images/No_1_Platform_1_desktop.png"}
                    alt="No 1 E-commerce platform"
                    width={1100}
                    height={400}
                    objectFit="cover"
                    className="hidden md:block m-auto"
                />
            </figure>
        </div>
    );
};

export default Contact;
