import HomepageLayout from "../../components/layouts/Homepage/HomepageLayout";
import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQs | Kaiglo Nigeria",
    description: "Everything you need to know. Our friendly team is always here to chat.",
};

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <HomepageLayout>
            <div className="bg-white -mt-6">{children}</div>
        </HomepageLayout>
    );
};

export default Layout;
