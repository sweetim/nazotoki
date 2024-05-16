import { defineConfig } from '@wagmi/cli'
import { react } from '@wagmi/cli/plugins'
import { puzzleAbi } from "./PuzzleAbi"

export default defineConfig({
  out: 'src/generated.ts',
  contracts: [
    {
      name: 'Puzzle',
      abi: puzzleAbi.abi as any,
    },
  ],
  plugins: [
    react(),
  ],
})
