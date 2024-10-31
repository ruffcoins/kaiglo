import HomepageLayout from "../../components/layouts/Homepage/HomepageLayout";
import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Kaiglo Nigeria",
    description: "We would love to hear from you. Our friendly team is always here to chat.",
};

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <HomepageLayout>
            <div className="bg-white md:-mt-6">{children}</div>
        </HomepageLayout>
    );
};

export default Layout;
