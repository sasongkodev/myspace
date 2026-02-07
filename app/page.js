import React from "react";
import ProfileCard from "@/components/ProfileCard";

function Page() {
  return (
    <main className="bg-background dark flex items-center justify-center min-h-screen relative overflow-hidden">
      {/* Developer Space Background */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5 -z-10">
        <div className="absolute inset-0 bg-neutral-950 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-900/0 to-slate-900/0 -z-20"></div>

      <ProfileCard />
    </main>
  );
}

export default Page;
