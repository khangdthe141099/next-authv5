"use client";

import { FC } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

interface SocialProps {}

const Social: FC<SocialProps> = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button size="lg" className="w-full" variant="outline" onClick={() => {}}>
        <FcGoogle />
      </Button>

      <Button size="lg" className="w-full" variant="outline" onClick={() => {}}>
        <FaGithub />
      </Button>
    </div>
  );
};

export default Social;
