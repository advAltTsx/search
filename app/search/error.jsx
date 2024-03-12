"use client";

import Link from "next/link";
import React, { Suspense, useEffect } from "react";

function Error({ error, reset }) {
  useEffect(() => {
    console.log("error", error);
  }, [error]);
  return (
    <Suspense>
      <div className="flex flex-col mt-44 items-center pt-10 justify-center">
        <h1 className="text-3xl mb-4 font-nothing text-neutral-700">
          Error
        </h1>
        <Link href={"/"} className="text-red-600 font-nothing">
          Try Again
        </Link>
      </div>
    </Suspense>
  );
}

export default Error;
