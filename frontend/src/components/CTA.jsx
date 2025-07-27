import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => (
  <div className="w-full pb-16">
    <div className="container mx-auto px-4">
      <div className="flex flex-col text-center text-black dark:text-white bg-violet-100 dark:bg-violet-900 rounded-md p-6 md:p-10 lg:p-14 gap-8 items-center">
        {/* Badge Section */}
        <div>
          <Badge>Get started</Badge>
        </div>

        {/* Heading and Paragraph */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl md:text-4xl lg:text-5xl tracking-tighter max-w-xl font-regular">
            Try our platform today!
          </h3>
          <p className="text-sm md:text-lg leading-relaxed tracking-tight text-muted-foreground dark:text-gray-400 max-w-xl">
            Unlock your career potential with our user-friendly job portal! 
            Whether you’re seeking your dream job or looking to hire top talent, 
            we have the tools and resources to help you succeed. 
            Sign up now to start your journey and take the first step towards a brighter future!
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Button className="gap-2" variant="outline">
            Jump on a call <PhoneCall className="w-4 h-4" />
          </Button>
          <Link to="/signup" className="w-full sm:w-auto">
            <Button className="gap-2 w-full sm:w-auto">
              Sign up here <MoveRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default CTA;
