import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Riddle
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const riddleAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'index',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'isCorrect', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'RiddleAnswerEvent',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'item',
        internalType: 'struct Riddle.RiddleItem',
        type: 'tuple',
        components: [
          { name: 'owner', internalType: 'address', type: 'address' },
          { name: 'title', internalType: 'string', type: 'string' },
          { name: 'description', internalType: 'string', type: 'string' },
          { name: 'uri', internalType: 'string', type: 'string' },
          { name: 'answers', internalType: 'string[]', type: 'string[]' },
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
          { name: 'owner', internalType: 'address', type: 'address' },
          { name: 'title', internalType: 'string', type: 'string' },
          { name: 'description', internalType: 'string', type: 'string' },
          { name: 'uri', internalType: 'string', type: 'string' },
          { name: 'answers', internalType: 'string[]', type: 'string[]' },
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
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'title', internalType: 'string', type: 'string' },
      { name: 'description', internalType: 'string', type: 'string' },
      { name: 'uri', internalType: 'string', type: 'string' },
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
// School
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const schoolAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'description', internalType: 'string', type: 'string' },
    ],
    name: 'createSchool',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'getAllQuestions',
    outputs: [{ name: '', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'getSchoolMetadata',
    outputs: [
      {
        name: '',
        internalType: 'struct School.SchoolMetadata',
        type: 'tuple',
        components: [
          { name: 'owner', internalType: 'address', type: 'address' },
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'description', internalType: 'string', type: 'string' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'questionsBank',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'questionId', internalType: 'string', type: 'string' }],
    name: 'registerQuestions',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'schoolMetadatas',
    outputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'description', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SchoolPaymaster
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const schoolPaymasterAbi = [
  {
    type: 'function',
    inputs: [
      { name: '_context', internalType: 'bytes', type: 'bytes' },
      {
        name: '_transaction',
        internalType: 'struct Transaction',
        type: 'tuple',
        components: [
          { name: 'txType', internalType: 'uint256', type: 'uint256' },
          { name: 'from', internalType: 'uint256', type: 'uint256' },
          { name: 'to', internalType: 'uint256', type: 'uint256' },
          { name: 'gasLimit', internalType: 'uint256', type: 'uint256' },
          {
            name: 'gasPerPubdataByteLimit',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'maxFeePerGas', internalType: 'uint256', type: 'uint256' },
          {
            name: 'maxPriorityFeePerGas',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'paymaster', internalType: 'uint256', type: 'uint256' },
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'reserved', internalType: 'uint256[4]', type: 'uint256[4]' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
          { name: 'signature', internalType: 'bytes', type: 'bytes' },
          { name: 'factoryDeps', internalType: 'bytes32[]', type: 'bytes32[]' },
          { name: 'paymasterInput', internalType: 'bytes', type: 'bytes' },
          { name: 'reservedDynamic', internalType: 'bytes', type: 'bytes' },
        ],
      },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      {
        name: '_txResult',
        internalType: 'enum ExecutionResult',
        type: 'uint8',
      },
      { name: '_maxRefundedGas', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'postTransaction',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      {
        name: '_transaction',
        internalType: 'struct Transaction',
        type: 'tuple',
        components: [
          { name: 'txType', internalType: 'uint256', type: 'uint256' },
          { name: 'from', internalType: 'uint256', type: 'uint256' },
          { name: 'to', internalType: 'uint256', type: 'uint256' },
          { name: 'gasLimit', internalType: 'uint256', type: 'uint256' },
          {
            name: 'gasPerPubdataByteLimit',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'maxFeePerGas', internalType: 'uint256', type: 'uint256' },
          {
            name: 'maxPriorityFeePerGas',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'paymaster', internalType: 'uint256', type: 'uint256' },
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'reserved', internalType: 'uint256[4]', type: 'uint256[4]' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
          { name: 'signature', internalType: 'bytes', type: 'bytes' },
          { name: 'factoryDeps', internalType: 'bytes32[]', type: 'bytes32[]' },
          { name: 'paymasterInput', internalType: 'bytes', type: 'bytes' },
          { name: 'reservedDynamic', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'validateAndPayForPaymasterTransaction',
    outputs: [
      { name: 'magic', internalType: 'bytes4', type: 'bytes4' },
      { name: 'context', internalType: 'bytes', type: 'bytes' },
    ],
    stateMutability: 'payable',
  },
  { type: 'receive', stateMutability: 'payable' },
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

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riddleAbi}__
 */
export const useWatchRiddleEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: riddleAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riddleAbi}__ and `eventName` set to `"RiddleAnswerEvent"`
 */
export const useWatchRiddleRiddleAnswerEventEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riddleAbi,
    eventName: 'RiddleAnswerEvent',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link schoolAbi}__
 */
export const useReadSchool = /*#__PURE__*/ createUseReadContract({
  abi: schoolAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link schoolAbi}__ and `functionName` set to `"getAllQuestions"`
 */
export const useReadSchoolGetAllQuestions = /*#__PURE__*/ createUseReadContract(
  { abi: schoolAbi, functionName: 'getAllQuestions' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link schoolAbi}__ and `functionName` set to `"getSchoolMetadata"`
 */
export const useReadSchoolGetSchoolMetadata =
  /*#__PURE__*/ createUseReadContract({
    abi: schoolAbi,
    functionName: 'getSchoolMetadata',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link schoolAbi}__ and `functionName` set to `"questionsBank"`
 */
export const useReadSchoolQuestionsBank = /*#__PURE__*/ createUseReadContract({
  abi: schoolAbi,
  functionName: 'questionsBank',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link schoolAbi}__ and `functionName` set to `"schoolMetadatas"`
 */
export const useReadSchoolSchoolMetadatas = /*#__PURE__*/ createUseReadContract(
  { abi: schoolAbi, functionName: 'schoolMetadatas' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link schoolAbi}__
 */
export const useWriteSchool = /*#__PURE__*/ createUseWriteContract({
  abi: schoolAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link schoolAbi}__ and `functionName` set to `"createSchool"`
 */
export const useWriteSchoolCreateSchool = /*#__PURE__*/ createUseWriteContract({
  abi: schoolAbi,
  functionName: 'createSchool',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link schoolAbi}__ and `functionName` set to `"registerQuestions"`
 */
export const useWriteSchoolRegisterQuestions =
  /*#__PURE__*/ createUseWriteContract({
    abi: schoolAbi,
    functionName: 'registerQuestions',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link schoolAbi}__
 */
export const useSimulateSchool = /*#__PURE__*/ createUseSimulateContract({
  abi: schoolAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link schoolAbi}__ and `functionName` set to `"createSchool"`
 */
export const useSimulateSchoolCreateSchool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: schoolAbi,
    functionName: 'createSchool',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link schoolAbi}__ and `functionName` set to `"registerQuestions"`
 */
export const useSimulateSchoolRegisterQuestions =
  /*#__PURE__*/ createUseSimulateContract({
    abi: schoolAbi,
    functionName: 'registerQuestions',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link schoolPaymasterAbi}__
 */
export const useWriteSchoolPaymaster = /*#__PURE__*/ createUseWriteContract({
  abi: schoolPaymasterAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link schoolPaymasterAbi}__ and `functionName` set to `"postTransaction"`
 */
export const useWriteSchoolPaymasterPostTransaction =
  /*#__PURE__*/ createUseWriteContract({
    abi: schoolPaymasterAbi,
    functionName: 'postTransaction',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link schoolPaymasterAbi}__ and `functionName` set to `"validateAndPayForPaymasterTransaction"`
 */
export const useWriteSchoolPaymasterValidateAndPayForPaymasterTransaction =
  /*#__PURE__*/ createUseWriteContract({
    abi: schoolPaymasterAbi,
    functionName: 'validateAndPayForPaymasterTransaction',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link schoolPaymasterAbi}__
 */
export const useSimulateSchoolPaymaster =
  /*#__PURE__*/ createUseSimulateContract({ abi: schoolPaymasterAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link schoolPaymasterAbi}__ and `functionName` set to `"postTransaction"`
 */
export const useSimulateSchoolPaymasterPostTransaction =
  /*#__PURE__*/ createUseSimulateContract({
    abi: schoolPaymasterAbi,
    functionName: 'postTransaction',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link schoolPaymasterAbi}__ and `functionName` set to `"validateAndPayForPaymasterTransaction"`
 */
export const useSimulateSchoolPaymasterValidateAndPayForPaymasterTransaction =
  /*#__PURE__*/ createUseSimulateContract({
    abi: schoolPaymasterAbi,
    functionName: 'validateAndPayForPaymasterTransaction',
  })
