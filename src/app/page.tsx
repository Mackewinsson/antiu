import React from "react";
import { Button } from "../../ src/components/button";

export function ButtonDemo() {
  return <Button>Button</Button>;
}

export default function Home() {
  return (
    <>
      <div>Home</div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <ButtonDemo />
    </>
  );
}
