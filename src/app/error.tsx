"use client";
import { Metadata } from "next";
import { useEffect } from "react";

export const metadata: Metadata = {
    title: "Error",
    description: "Something went wrong",
};

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
    useEffect(() => {
        console.error(error);
    }, [error]);
    return (
        <div className="full-height flex flex-col items-center justify-center gap-6 px-4">
            <p className="text-center text-16px sm:text-24px">Oops... something went wrong</p>
            <button title="Try again" onClick={() => reset()} />
        </div>
    );
};

export default Error;
