"use client";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { FAQItem } from "@/interfaces/faqs.interface";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const Faqs = () => {
    return (
        <div className="py-12 text-center flex flex-col gap-y-12  max-w-[1100px] m-auto">
            <div className="flex flex-col gap-y-1 px-4">
                <h1 className="text-xl md:text-2xl text-kaiglo_brand-base font-bold ">FAQ</h1>
                <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">Everything you need to know.</h2>
                <p className="text-xl text-kaiglo_grey-base">Our friendly team is always here to chat.</p>
            </div>
            <div>
                <FAQS />
            </div>

            <section className="flex flex-col gap-y-4 p-6 max-w-[1000px] w-full m-auto bg-kaiglo_grey-50 rounded-3xl">
                <div className="text-center">
                    <h2 className="font-bold text-2xl mb-2">Still have questions?</h2>
                    <p className="text-kaiglo_grey-placeholder">Can't find the answer you're looking for?</p>
                    <p className="text-kaiglo_grey-placeholder mb-4">Please chat our friendly team.</p>
                </div>

                <Link
                    href={"/contact"}
                    className="rounded-full bg-kaiglo_brand-base px-8 py-4 text-white font-medium self-center "
                >
                    Get in touch
                </Link>
            </section>

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

export default Faqs;

export const FAQS = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleItemToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const faqs: FAQItem[] = [
        {
            question: "What is the estimated time of delivery?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
        },
        {
            question: "What is the estimated time of delivery?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
        },
        {
            question: "What is the estimated time of delivery?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
        },
        {
            question: "What is the estimated time of delivery?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
        },
        {
            question: "What is the estimated time of delivery?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
        },
        {
            question: "What is the estimated time of delivery?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
        },
        {
            question: "What is the estimated time of delivery?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
        },
    ];
    return (
        <div className="grid md:px-8 gap-y-6">
            <Accordion>
                {faqs.map((faq, index) => (
                    <AccordionItem
                        key={index}
                        item={faq}
                        isOpen={openIndex === index}
                        onToggle={() => handleItemToggle(index)}
                    />
                ))}
            </Accordion>
        </div>
    );
};
