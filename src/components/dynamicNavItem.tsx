"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

interface DynamicNavItemProps {
  title: string;
  param: string;
}

function DynamicNavItem({ title, param }: DynamicNavItemProps) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div>
      <Link
        className={`hover:text-amber-500 font-semibold ${
          genre === param
            ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
            : ""
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}

export default DynamicNavItem;
