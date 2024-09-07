"use client";

import { Button } from "@/components/ui/button"


import React, { useEffect, useRef, useState } from "react";

export default function Header() {
  return (
    <div className="w-full flex flex-row justify-between">
      search
      <div className="flex flex-row items-center gap-2">
        <div>notification</div>
        <Button variant="outline">Add Task</Button>

      </div>
    </div>
  );
}
