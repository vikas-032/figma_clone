"use client";
// import { useOthers } from "./liveblocks.config"
// import {useOthers} from "@liveblocks/client";
import { useOthers } from "@liveblocks/react/suspense";

export function CollaborativeApp() {
  const others = useOthers();
  const userCount = others.length;
  return <div>There are {userCount} other user(s) online</div>;
}