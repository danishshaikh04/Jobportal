import React from "react";
import { MoveDownLeft, MoveUpRight } from "lucide-react";

 const Stats = () => (
  <div className="w-full py-10 lg:py-2s0">
    <div className="container mx-auto">
      <div className="grid text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4 lg:gap-8">
        <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
          <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
          <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">20,000+
            
          </h2>
          <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
           Jobs Posted
          </p>
        </div>
        <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
          <MoveDownLeft className="w-4 h-4 mb-10 text-destructive" />
          <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
            5000.00+
          </h2>
          <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
          Candidates Hired
          </p>
        </div>
        <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
          <MoveUpRight className="w-4 h-4 mb-10 text-success" />
          <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
          200+
            
          </h2>
          <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
          Companies Trust Us
          </p>
        </div>
        <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
          <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
          <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
          50+
            
          </h2>
          <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
          Locations Served
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Stats