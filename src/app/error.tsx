"use client";
import { useEffect } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="full-height mt-[-40px] flex flex-col items-center justify-center gap-6 px-4">
            <p className="text-center text-16px sm:text-24px">Oops... something went wrong</p>
            <button
                onClick={() => reset()}
                className="rounded-lg bg-transparent-black px-8 py-4 uppercase transition-opacity hover:opacity-70"
            >
                Try again
            </button>
        </div>
    );
};

export default Error;
