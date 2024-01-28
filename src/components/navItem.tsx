import Loading from "@/app/loading";
import React from "react";
import { Suspense } from "react";

interface NavItemProps {
  title: string;
  param: string;
}
const DynamicNavItem = React.lazy(() => import("./dynamicNavItem"));

function NavItem({ title, param }: NavItemProps) {
  return (
    <Suspense fallback={<Loading />}>
      <DynamicNavItem title={title} param={param} />
    </Suspense>
  );
}

export default NavItem;
