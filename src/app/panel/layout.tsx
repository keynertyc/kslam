import React from "react";
import Header from "@/components/panel/header";
import Sidebar from "@/components/panel/sidebar";

export default function PanelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="relative h-screen overflow-hidden">
      <div className="flex items-start justify-between">
        <Sidebar />
        <div className="flex flex-col w-full md:space-y-4">
            <Header />
            {children}
        </div>
      </div>
    </main>
  )
}