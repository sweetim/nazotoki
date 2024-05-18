import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Riddle
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const riddleAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [
      {
        name: 'item',
        internalType: 'struct Riddle.RiddleItem',
        type: 'tuple',
        components: [
          { name: 'title', internalType: 'string', type: 'string' },
          { name: 'description', internalType: 'string', type: 'string' },
          { name: 'uri', internalType: 'string', type: 'string' },
          {
            name: 'answers',
            internalType: 'struct Riddle.RiddleAnswer',
            type: 'tuple',
            components: [
              { name: 'answer_1', internalType: 'string', type: 'string' },
              { name: 'answer_2', internalType: 'string', type: 'string' },
              { name: 'answer_3', internalType: 'string', type: 'string' },
              { name: 'answer_4', internalType: 'string', type: 'string' },
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
        internalType: 'struct Riddle.RiddleItem',
        type: 'tuple',
        components: [
          { name: 'title', internalType: 'string', type: 'string' },
          { name: 'description', internalType: 'string', type: 'string' },
          { name: 'uri', internalType: 'string', type: 'string' },
          {
            name: 'answers',
            internalType: 'struct Riddle.RiddleAnswer',
            type: 'tuple',
            components: [
              { name: 'answer_1', internalType: 'string', type: 'string' },
              { name: 'answer_2', internalType: 'string', type: 'string' },
              { name: 'answer_3', internalType: 'string', type: 'string' },
              { name: 'answer_4', internalType: 'string', type: 'string' },
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
        internalType: 'struct Riddle.RiddleAnswer',
        type: 'tuple',
        components: [
          { name: 'answer_1', internalType: 'string', type: 'string' },
          { name: 'answer_2', internalType: 'string', type: 'string' },
          { name: 'answer_3', internalType: 'string', type: 'string' },
          { name: 'answer_4', internalType: 'string', type: 'string' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'rankings',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'index', internalType: 'uint256', type: 'uint256' },
      { name: 'answer', internalType: 'string', type: 'string' },
    ],
    name: 'submitAnswer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riddleAbi}__
 */
export const useReadRiddle = /*#__PURE__*/ createUseReadContract({
  abi: riddleAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riddleAbi}__ and `functionName` set to `"getItem"`
 */
export const useReadRiddleGetItem = /*#__PURE__*/ createUseReadContract({
  abi: riddleAbi,
  functionName: 'getItem',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riddleAbi}__ and `functionName` set to `"itemIndex"`
 */
export const useReadRiddleItemIndex = /*#__PURE__*/ createUseReadContract({
  abi: riddleAbi,
  functionName: 'itemIndex',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riddleAbi}__ and `functionName` set to `"items"`
 */
export const useReadRiddleItems = /*#__PURE__*/ createUseReadContract({
  abi: riddleAbi,
  functionName: 'items',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riddleAbi}__ and `functionName` set to `"rankings"`
 */
export const useReadRiddleRankings = /*#__PURE__*/ createUseReadContract({
  abi: riddleAbi,
  functionName: 'rankings',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riddleAbi}__
 */
export const useWriteRiddle = /*#__PURE__*/ createUseWriteContract({
  abi: riddleAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riddleAbi}__ and `functionName` set to `"createItem"`
 */
export const useWriteRiddleCreateItem = /*#__PURE__*/ createUseWriteContract({
  abi: riddleAbi,
  functionName: 'createItem',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riddleAbi}__ and `functionName` set to `"submitAnswer"`
 */
export const useWriteRiddleSubmitAnswer = /*#__PURE__*/ createUseWriteContract({
  abi: riddleAbi,
  functionName: 'submitAnswer',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riddleAbi}__
 */
export const useSimulateRiddle = /*#__PURE__*/ createUseSimulateContract({
  abi: riddleAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riddleAbi}__ and `functionName` set to `"createItem"`
 */
export const useSimulateRiddleCreateItem =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riddleAbi,
    functionName: 'createItem',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riddleAbi}__ and `functionName` set to `"submitAnswer"`
 */
export const useSimulateRiddleSubmitAnswer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riddleAbi,
    functionName: 'submitAnswer',
  })
