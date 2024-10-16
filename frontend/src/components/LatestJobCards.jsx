import React from 'react';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

const LatestJobCards = ({ job }) => {
    const navigate = useNavigate();

    return (
        <div 
            onClick={() => navigate(`/description/${job._id}`)} 
            className="p-4 sm:p-5 rounded-md shadow-md bg-white border border-gray-100 cursor-pointer transition-all duration-200 hover:shadow-lg"
        >
            {/* Company and Location */}
            <div className="mb-3">
                <h1 className="font-medium text-base sm:text-lg">{job?.company?.name}</h1>
                <p className="text-xs sm:text-sm text-gray-500">India</p>
            </div>

            {/* Job Title and Description */}
            <div className="mb-3">
                <h1 className="font-bold text-base sm:text-lg my-1">{job?.title}</h1>
                <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                    {job?.description}
                </p>
            </div>

            {/* Badges for Position, Job Type, Salary */}
            <div className="flex flex-wrap items-center gap-2 mt-4">
                <Badge className="text-blue-700 font-bold" variant="ghost">
                    {job?.position} Positions
                </Badge>
                <Badge className="text-[#F83002] font-bold" variant="ghost">
                    {job?.jobType}
                </Badge>
                <Badge className="text-[#7209b7] font-bold" variant="ghost">
                    {job?.salary}LPA
                </Badge>
            </div>
        </div>
    );
};

export default LatestJobCards;
