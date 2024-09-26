import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => (
  <div className="w-full  pb-20">
    <div className="container mx-auto">
      <div className="flex flex-col text-center bg-violet-100 rounded-md p-4 lg:p-14 gap-8 items-center">
        <div>
          <Badge>Get started</Badge>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
            Try our platform today!
          </h3>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
          Unlock your career potential with our user-friendly job portal! Whether you’re seeking your dream job or looking to hire top talent, we have the tools and resources to help you succeed.  Sign up now to start your journey and take the first step towards a brighter future!
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <Button className="gap-4" variant="outline">
            Jump on a call <PhoneCall className="w-4 h-4" />
          </Button>
          <Link to="/signup">
          <Button className="gap-4">
            Sign up here <MoveRight className="w-4 h-4" />
          </Button>
          </Link>
          
        </div>
      </div>
    </div>
  </div>
);
export default CTA