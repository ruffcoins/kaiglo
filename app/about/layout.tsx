import HomepageLayout from "../../components/layouts/Homepage/HomepageLayout";
import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Kaiglo Nigeria",
    description:
        "At Kaiglo, our goal is to create channels for online users to acquire and provide goods that are not only affordable but also available in multiple variations and of the highest quality.",
};

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <HomepageLayout>
            <div className="bg-white md:-mt-6">{children}</div>
        </HomepageLayout>
    );
};

export default Layout;
