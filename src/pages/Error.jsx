import React from "react";
import Button from "../ui/Button";

export default function Error() {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 ">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we Working on this page.{" "}
          </p>
          <Button
            onClick={() => {
              window.location.replace("/");
            }}
            colored={true}
            className={'md:ml-[13rem]'}
          >
            Back to Homepage
          </Button>
        </div>
      </div>
    </section>
  );
}
