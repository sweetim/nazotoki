import { defineConfig } from '@wagmi/cli'
import { react } from '@wagmi/cli/plugins'
import { abi } from "./Riddle.json"

export default defineConfig({
  out: 'src/generated.ts',
  contracts: [
    {
      name: 'Riddle',
      abi: abi as any,
    },
  ],
  plugins: [
    react(),
  ],
})
