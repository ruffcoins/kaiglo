import HomepageLayout from "../../components/layouts/Homepage/HomepageLayout";
import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Shipping and Delivery | Kaiglo Nigeria",
    description: "Here's Why you can rely on us.",
};

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <HomepageLayout>
            <div className="bg-white">{children}</div>
        </HomepageLayout>
    );
};

export default Layout;
