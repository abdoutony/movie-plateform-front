import React from "react";
import NavBar from "../components/nav-bar";
import Hero from "../components/hero";
import HomeLayout from "../components/layouts/home";
export default function HomePage() {
  return (
    <HomeLayout>
      <Hero title="Hello from movie app" />
    </HomeLayout>
  );
}
