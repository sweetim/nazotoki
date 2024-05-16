import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Puzzle
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const puzzleAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [
      {
        name: 'item',
        internalType: 'struct Puzzle.PuzzleItem',
        type: 'tuple',
        components: [
          { name: 'title', internalType: 'string', type: 'string' },
          { name: 'description', internalType: 'string', type: 'string' },
          { name: 'uri', internalType: 'string', type: 'string' },
          {
            name: 'answers',
            internalType: 'struct Puzzle.PuzzleAnswer',
            type: 'tuple',
            components: [
              { name: 'answers_1', internalType: 'string', type: 'string' },
              { name: 'answers_2', internalType: 'string', type: 'string' },
              { name: 'answers_3', internalType: 'string', type: 'string' },
              { name: 'answers_4', internalType: 'string', type: 'string' },
            ],
          },
        ],
      },
    ],
    name: 'createItem',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'getItem',
    outputs: [
      {
        name: '',
        internalType: 'struct Puzzle.PuzzleItem',
        type: 'tuple',
        components: [
          { name: 'title', internalType: 'string', type: 'string' },
          { name: 'description', internalType: 'string', type: 'string' },
          { name: 'uri', internalType: 'string', type: 'string' },
          {
            name: 'answers',
            internalType: 'struct Puzzle.PuzzleAnswer',
            type: 'tuple',
            components: [
              { name: 'answers_1', internalType: 'string', type: 'string' },
              { name: 'answers_2', internalType: 'string', type: 'string' },
              { name: 'answers_3', internalType: 'string', type: 'string' },
              { name: 'answers_4', internalType: 'string', type: 'string' },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'itemIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'items',
    outputs: [
      { name: 'title', internalType: 'string', type: 'string' },
      { name: 'description', internalType: 'string', type: 'string' },
      { name: 'uri', internalType: 'string', type: 'string' },
      {
        name: 'answers',
        internalType: 'struct Puzzle.PuzzleAnswer',
        type: 'tuple',
        components: [
          { name: 'answers_1', internalType: 'string', type: 'string' },
          { name: 'answers_2', internalType: 'string', type: 'string' },
          { name: 'answers_3', internalType: 'string', type: 'string' },
          { name: 'answers_4', internalType: 'string', type: 'string' },
        ],
      },
    ],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link puzzleAbi}__
 */
export const useReadPuzzle = /*#__PURE__*/ createUseReadContract({
  abi: puzzleAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link puzzleAbi}__ and `functionName` set to `"getItem"`
 */
export const useReadPuzzleGetItem = /*#__PURE__*/ createUseReadContract({
  abi: puzzleAbi,
  functionName: 'getItem',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link puzzleAbi}__ and `functionName` set to `"itemIndex"`
 */
export const useReadPuzzleItemIndex = /*#__PURE__*/ createUseReadContract({
  abi: puzzleAbi,
  functionName: 'itemIndex',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link puzzleAbi}__ and `functionName` set to `"items"`
 */
export const useReadPuzzleItems = /*#__PURE__*/ createUseReadContract({
  abi: puzzleAbi,
  functionName: 'items',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link puzzleAbi}__
 */
export const useWritePuzzle = /*#__PURE__*/ createUseWriteContract({
  abi: puzzleAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link puzzleAbi}__ and `functionName` set to `"createItem"`
 */
export const useWritePuzzleCreateItem = /*#__PURE__*/ createUseWriteContract({
  abi: puzzleAbi,
  functionName: 'createItem',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link puzzleAbi}__
 */
export const useSimulatePuzzle = /*#__PURE__*/ createUseSimulateContract({
  abi: puzzleAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link puzzleAbi}__ and `functionName` set to `"createItem"`
 */
export const useSimulatePuzzleCreateItem =
  /*#__PURE__*/ createUseSimulateContract({
    abi: puzzleAbi,
    functionName: 'createItem',
  })
