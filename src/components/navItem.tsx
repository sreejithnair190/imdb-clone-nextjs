import Loading from "@/app/loading";
import { Suspense } from "react";
import dynamic from "next/dynamic";

interface NavItemProps {
  title: string;
  param: string;
}

const DynamicNavItem = dynamic(() => import("./dynamicNavItem"));

function NavItem({ title, param }: NavItemProps) {
  return (
    <Suspense fallback={<Loading />}>
      <DynamicNavItem title={title} param={param} />
    </Suspense>
  );
}

export default NavItem;
