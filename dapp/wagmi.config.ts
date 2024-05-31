import { defineConfig } from "@wagmi/cli"
import { react } from "@wagmi/cli/plugins"
import { Abi } from "viem"
import { abi as RiddleAbi } from "./abis/Riddle.json"
import { abi as SchoolAbi } from "./abis/School.json"
import { abi as SchoolPaymasterAbi } from "./abis/SchoolPaymaster.json"

export default defineConfig({
  out: "src/generated.ts",
  contracts: [
    {
      name: "Riddle",
      abi: RiddleAbi as Abi,
    },
    {
      name: "School",
      abi: SchoolAbi as Abi,
    },
    {
      name: "SchoolPaymaster",
      abi: SchoolPaymasterAbi as Abi,
    },
  ],
  plugins: [
    react(),
  ],
})
