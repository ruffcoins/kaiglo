import HomepageLayout from "../../components/layouts/Homepage/HomepageLayout";
import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Kaiglo Nigeria",
    description:
        "Please read this Privacy Policy carefully as it will help you make informed decisions about sharing your personal information with us.",
};

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <HomepageLayout>
            <div className="bg-white md:-mt-6">{children}</div>
        </HomepageLayout>
    );
};

export default Layout;
