import Image from "next/image";
import { useState } from "react";
import ReactQuill from "react-quill";
import Note from "./components/organisms/note";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-beige">
      <Note/>

      </div>
    </main>
  );
}
