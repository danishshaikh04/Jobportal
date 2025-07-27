import React, { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Opportunity", "Remote Job", "Career", "Tech Role", "Startup"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
   
    <div className="w-full">
      
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 pt-16 pb-8 lg:py-10">
          <div>
            <Button
              variant="secondary"
              size="md"
              className="text-[#6A38C2] gap-4 h-5 b py-5 px-5 bg-white rounded-full"
            >
              Your Dream Job Awaits – Start Your Journey Today
            </Button>
          </div>

          <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50">Find Your Next</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-sm sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-lg md:max-w-2xl text-center">
              Whether you're looking for your first job, a career change, or the
              next step in your professional journey, we’ve got you covered.
              Create your profile, upload your resume, and let employers find
              you.
            </p>
          </div>

          <div className="flex w-full sm:w-[90%] md:w-[80%] lg:w-[60%] shadow-lg border border-gray-200 pl-3 bg-white  rounded-full items-center gap-4 mx-auto">
            <input
              type="text"
              placeholder="Search your dream jobs"
              onChange={(e) => setQuery(e.target.value)}
              className="outline-none   border-none border-purple-400 bg-inherit w-full"
            />
            <Button
              onClick={searchJobHandler}
              className="rounded-r-full "
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
