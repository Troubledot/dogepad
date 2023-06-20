// @ts-nocheck
import React, { forwardRef } from "react";
import Link from "next/link";

export const MyLink = () =>
  forwardRef(({ href, children }, ref) => (
    <Link href={href}>
      <a ref={ref}>{children}</a>
    </Link>
  ));
