"use client";

import useGetSales from "@/hooks/queries/homePage/getSales";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Sale = () => {
  const { sales } = useGetSales();
  const restrictedSales = sales?.salesObjectList.slice(0, 2) || [];
  const columnCount = restrictedSales?.length === 1 ? 1 : 2;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isMobile = window.innerWidth < 769;
      setIsMobile(isMobile);
    }
  }, [isMobile]);

  return (
    <div
      className={cn(
        `grid gap-4 lg:grid-cols-${columnCount} grid-cols-1 w-full lg:px-8 px-4`,
        restrictedSales?.length === 0 && "hidden",
      )}
    >
      {restrictedSales?.map((sale, index) => (
        <div key={index}>
          <Link href={`/sales/${sale.name}`}>
            <Image
              src={
                isMobile
                  ? sale.banners.mobileHome
                  : restrictedSales?.length === 1
                    ? sale.banners.desktopSalesPage
                    : sale.banners.desktopHome
              }
              alt={sale.name}
              width={1920}
              height={400}
              className="rounded-lg lg:h-[400px]"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};
export default Sale;
