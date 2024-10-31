import HomepageLayout from "../../components/layouts/Homepage/HomepageLayout";
import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Return Policy | Kaiglo Nigeria",
    description:
        "Thank you for shopping with Kaiglo Stores Limited. We strive to provide you with a seamless and enjoyable shopping experience.",
};

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <HomepageLayout>
            <div className="bg-white md:-mt-6">{children}</div>
        </HomepageLayout>
    );
};

export default Layout;
