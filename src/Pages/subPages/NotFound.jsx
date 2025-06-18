import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-surface text-on-surface px-4">
      <h1 className="text-6xl font-bold text-error mb-4">404</h1>
      <p className="text-xl text-on-surface-variant mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="bg-primary text-on-primary px-6 py-3 rounded-lg hover:bg-primary-dark transition"
      >
        Go Home
      </Link>
    </section>
  );
};

export default NotFound;
