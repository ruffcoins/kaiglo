import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { FAQS } from "../faqs/page";
const ShippingAndDelivery = () => {
    return (
        <div className="bg-white flex flex-col gap-5 md:gap-20 md:-mt-6">
            <div>
                <figure>
                    <Image
                        src={"/images/shipping-delivery-banner-mobile.png"}
                        alt="Shipping and delivery banner"
                        width={800}
                        height={300}
                        objectFit="cover"
                        className="md:hidden"
                    />
                    <Image
                        src={"/images/shipping-delivery-banner-desktop.png"}
                        alt="Shipping and delivery banner"
                        width={1500}
                        height={400}
                        objectFit="cover"
                        className="hidden md:block"
                    />
                </figure>
                <h1 className="max-w-[300px] m-auto font-bold md:font-bold text-2xl md:text-3xl lg:text-4xl text-center mt-4 md:mt-8">
                    Here's Why you can rely on us
                </h1>
            </div>

            <div className="p-4 grid gap-12 max-w-[800px] m-auto">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="md:row-span-2 w-full h-[250px] bg-kaiglo_grey-disabled rounded-xl"></div>
                    <div className="grid gap-6 md:gap-3">
                        <h2 className="bg-kaiglo_success-100 font-medium px-6 md:px-3 py-4 md:py-2 rounded-full justify-self-start">
                            Speed and Reliability
                        </h2>
                        <h3 className="font-bold text-xl">
                            Power flexible on-demand or scheduled deliveries.
                        </h3>
                        <p className="text-kaiglo_grey-base">
                            Your trust in Kaiglo.com is highly valued. Thus, we have implemented the best
                            standards for secure transactions and customer information privacy.
                        </p>
                        <Link
                            href={"/"}
                            className="text-kaiglo_brand-base flex items-center gap-2 font-medium"
                        >
                            Start Shopping
                            <ArrowRightIcon className="text-kaiglo_brand-base w-6 h-6 font-medium" />
                        </Link>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="md:row-span-2 md:col-start-2 w-full h-[250px] bg-kaiglo_grey-disabled rounded-xl"></div>
                    <div className="grid gap-6 md:gap-3">
                        <h2 className="bg-kaiglo_success-100 font-medium px-6 md:px-3 py-4 md:py-2 rounded-full justify-self-start">
                            Real-time Order Tracking
                        </h2>
                        <h3 className="font-bold text-xl">Trusted local delivery platform.</h3>
                        <p className="text-kaiglo_grey-base">
                            Your trust in Kaiglo.com is highly valued. Thus, we have implemented the best
                            standards for secure transactions and customer information privacy.
                        </p>
                        <Link
                            href={"/"}
                            className="text-kaiglo_brand-base flex items-center gap-2 font-medium"
                        >
                            Track My Order
                            <ArrowRightIcon className="text-kaiglo_brand-base w-6 h-6 font-medium" />
                        </Link>
                    </div>
                </div>
            </div>

            <section className="p-4 bg-kaiglo_grey-50">
                <h2 className="font-medium text-2xl md:text-3xl md:text-center">Our flexible payment</h2>
                <div className="grid md:grid-cols-3 gap-4 mt-6 lg:mx-8">
                    <section className="flex flex-col gap-4 md:gap-2 border border-kaiglo_grey-disabled bg-kaiglo_grey-50 md:bg-white py-5 px-4 rounded-lg">
                        <div className="bg-kaiglo_grey-50 font-bold flex items-center justify-center w-12 h-12 border border-kaiglo_grey-disabled rounded-lg"></div>

                        <h2 className="font-bold text-base">Payment with Card</h2>
                        <p className="text-kaiglo_grey-base">
                            Quality products at the best affordable prices Multiple varieties of each products
                            Fast and convenient delivery
                        </p>
                    </section>
                    <section className="flex flex-col gap-4 md:gap-2 border border-kaiglo_grey-disabled bg-kaiglo_grey-50 md:bg-white py-5 px-4 rounded-lg">
                        <div className="bg-kaiglo_grey-50 font-bold flex items-center justify-center w-12 h-12 border border-kaiglo_grey-disabled rounded-lg"></div>
                        <h2 className="font-bold text-base">Payment on Delivery</h2>
                        <p className="text-kaiglo_grey-base">
                            We promise to always provide our users with exceptional deals at manufacturer's
                            prices. Creating multiple channels where manufacturers can have access to millions
                            of Africans.
                        </p>
                    </section>
                    <section className="flex flex-col gap-4 md:gap-2 border border-kaiglo_grey-disabled bg-kaiglo_grey-50 md:bg-white py-5 px-4 rounded-lg">
                        <div className="bg-kaiglo_grey-50 font-bold flex items-center justify-center w-12 h-12 border border-kaiglo_grey-disabled rounded-lg"></div>
                        <h2 className="font-bold text-base">Pay with Shopping Balance</h2>
                        <p className="text-kaiglo_grey-base">
                            Continuous and never ending technological research and development for exploring
                            the ecommerce marketplace in Nigeria, and Africa.
                        </p>
                    </section>
                </div>
            </section>

            {/* FAQs starts here */}
            <section className="p-4 max-w-[1000px] w-full m-auto">
                <h2 className="font-bold text-2xl mb-2 text-center">Frequently Asked Questions</h2>
                <p className="text-kaiglo_grey-base text-center">Our friendly team is always here to chat.</p>
                <div className="mt-6">
                    <FAQS />
                </div>
            </section>
            {/* FAQs ends here */}

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

export default ShippingAndDelivery;
