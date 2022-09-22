const dvoteabi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint8',
        name: 'version',
        type: 'uint8',
      },
    ],
    name: 'Initialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'id',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'creator',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'pollId',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'title',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'body',
            type: 'string',
          },
        ],
        indexed: false,
        internalType: 'struct DVoteV1.Option',
        name: 'option',
        type: 'tuple',
      },
    ],
    name: 'OptionCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'id',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'creator',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'pollId',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'title',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'body',
            type: 'string',
          },
        ],
        indexed: false,
        internalType: 'struct DVoteV1.Option',
        name: 'option',
        type: 'tuple',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'signer',
        type: 'address',
      },
    ],
    name: 'OptionCreatedBySig',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'id',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'creator',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'pollId',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'title',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'body',
            type: 'string',
          },
        ],
        indexed: false,
        internalType: 'struct DVoteV1.Option',
        name: 'option',
        type: 'tuple',
      },
    ],
    name: 'OptionUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'id',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'creator',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'pollId',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'title',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'body',
            type: 'string',
          },
        ],
        indexed: false,
        internalType: 'struct DVoteV1.Option',
        name: 'option',
        type: 'tuple',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'signer',
        type: 'address',
      },
    ],
    name: 'OptionUpdatedBySig',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'creator',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'pollId',
        type: 'string',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'id',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'value',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'communityAccount',
            type: 'string',
          },
          {
            internalType: 'uint8',
            name: 'ruleType',
            type: 'uint8',
          },
          {
            internalType: 'string',
            name: 'point',
            type: 'string',
          },
        ],
        indexed: false,
        internalType: 'struct DVoteV1.PointRule[]',
        name: 'pointRules',
        type: 'tuple[]',
      },
    ],
    name: 'PointRulesAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'creator',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'pollId',
        type: 'string',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'id',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'value',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'communityAccount',
            type: 'string',
          },
          {
            internalType: 'uint8',
            name: 'ruleType',
            type: 'uint8',
          },
          {
            internalType: 'string',
            name: 'point',
            type: 'string',
          },
        ],
        indexed: false,
        internalType: 'struct DVoteV1.PointRule[]',
        name: 'pointRules',
        type: 'tuple[]',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'signer',
        type: 'address',
      },
    ],
    name: 'PointRulesAddedBySig',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'creator',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'pollId',
        type: 'string',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'id',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'value',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'communityAccount',
            type: 'string',
          },
          {
            internalType: 'uint8',
            name: 'ruleType',
            type: 'uint8',
          },
          {
            internalType: 'string',
            name: 'point',
            type: 'string',
          },
        ],
        indexed: false,
        internalType: 'struct DVoteV1.PointRule[]',
        name: 'pointRules',
        type: 'tuple[]',
      },
    ],
    name: 'PointRulesDeleted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'creator',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'pollId',
        type: 'string',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'id',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'value',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'communityAccount',
            type: 'string',
          },
          {
            internalType: 'uint8',
            name: 'ruleType',
            type: 'uint8',
          },
          {
            internalType: 'string',
            name: 'point',
            type: 'string',
          },
        ],
        indexed: false,
        internalType: 'struct DVoteV1.PointRule[]',
        name: 'pointRules',
        type: 'tuple[]',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'signer',
        type: 'address',
      },
    ],
    name: 'PointRulesDeletedBySig',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'id',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'creator',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'title',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'body',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'startAt',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'endAt',
            type: 'uint256',
          },
          {
            internalType: 'uint64',
            name: 'maxOption',
            type: 'uint64',
          },
          {
            internalType: 'string',
            name: 'maxPoint',
            type: 'string',
          },
          {
            internalType: 'uint8',
            name: 'pointType',
            type: 'uint8',
          },
          {
            internalType: 'uint8',
            name: 'pointEvaluationType',
            type: 'uint8',
          },
          {
            internalType: 'uint8',
            name: 'pointDecimalPlace',
            type: 'uint8',
          },
          {
            internalType: 'bool',
            name: 'addOption',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'hideResult',
            type: 'bool',
          },
          {
            internalType: 'string',
            name: 'qualification',
            type: 'string',
          },
        ],
        indexed: false,
        internalType: 'struct DVoteV1.Poll',
        name: 'poll',
        type: 'tuple',
      },
    ],
    name: 'PollCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'id',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'creator',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'title',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'body',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'startAt',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'endAt',
            type: 'uint256',
          },
          {
            internalType: 'uint64',
            name: 'maxOption',
            type: 'uint64',
          },
          {
            internalType: 'string',
            name: 'maxPoint',
            type: 'string',
          },
          {
            internalType: 'uint8',
            name: 'pointType',
            type: 'uint8',
          },
          {
            internalType: 'uint8',
            name: 'pointEvaluationType',
            type: 'uint8',
          },
          {
            internalType: 'uint8',
            name: 'pointDecimalPlace',
            type: 'uint8',
          },
          {
            internalType: 'bool',
            name: 'addOption',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'hideResult',
            type: 'bool',
          },
          {
            internalType: 'string',
            name: 'qualification',
            type: 'string',
          },
        ],
        indexed: false,
        internalType: 'struct DVoteV1.Poll',
        name: 'poll',
        type: 'tuple',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'signer',
        type: 'address',
      },
    ],
    name: 'PollCreatedBySig',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'id',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'creator',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'title',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'body',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'startAt',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'endAt',
            type: 'uint256',
          },
          {
            internalType: 'uint64',
            name: 'maxOption',
            type: 'uint64',
          },
          {
            internalType: 'string',
            name: 'maxPoint',
            type: 'string',
          },
          {
            internalType: 'uint8',
            name: 'pointType',
            type: 'uint8',
          },
          {
            internalType: 'uint8',
            name: 'pointEvaluationType',
            type: 'uint8',
          },
          {
            internalType: 'uint8',
            name: 'pointDecimalPlace',
            type: 'uint8',
          },
          {
            internalType: 'bool',
            name: 'addOption',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'hideResult',
            type: 'bool',
          },
          {
            internalType: 'string',
            name: 'qualification',
            type: 'string',
          },
        ],
        indexed: false,
        internalType: 'struct DVoteV1.Poll',
        name: 'poll',
        type: 'tuple',
      },
    ],
    name: 'PollUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'id',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'creator',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'title',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'body',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'startAt',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'endAt',
            type: 'uint256',
          },
          {
            internalType: 'uint64',
            name: 'maxOption',
            type: 'uint64',
          },
          {
            internalType: 'string',
            name: 'maxPoint',
            type: 'string',
          },
          {
            internalType: 'uint8',
            name: 'pointType',
            type: 'uint8',
          },
          {
            internalType: 'uint8',
            name: 'pointEvaluationType',
            type: 'uint8',
          },
          {
            internalType: 'uint8',
            name: 'pointDecimalPlace',
            type: 'uint8',
          },
          {
            internalType: 'bool',
            name: 'addOption',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'hideResult',
            type: 'bool',
          },
          {
            internalType: 'string',
            name: 'qualification',
            type: 'string',
          },
        ],
        indexed: false,
        internalType: 'struct DVoteV1.Poll',
        name: 'poll',
        type: 'tuple',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'signer',
        type: 'address',
      },
    ],
    name: 'PollUpdatedBySig',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'id',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'optionId',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'voter',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'point',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'memo',
            type: 'string',
          },
        ],
        indexed: false,
        internalType: 'struct DVoteV1.Vote',
        name: 'vote',
        type: 'tuple',
      },
    ],
    name: 'VoteCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'id',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'optionId',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'voter',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'point',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'memo',
            type: 'string',
          },
        ],
        indexed: false,
        internalType: 'struct DVoteV1.Vote',
        name: 'vote',
        type: 'tuple',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'signer',
        type: 'address',
      },
    ],
    name: 'VoteCreatedBySig',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'voter',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'id',
        type: 'string',
      },
    ],
    name: 'VoteDeleted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'voter',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'id',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'signer',
        type: 'address',
      },
    ],
    name: 'VoteDeletedBySig',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'id',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'optionId',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'voter',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'point',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'memo',
            type: 'string',
          },
        ],
        indexed: false,
        internalType: 'struct DVoteV1.Vote',
        name: 'vote',
        type: 'tuple',
      },
    ],
    name: 'VoteUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'id',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'optionId',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'voter',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'point',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'memo',
            type: 'string',
          },
        ],
        indexed: false,
        internalType: 'struct DVoteV1.Vote',
        name: 'vote',
        type: 'tuple',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'signer',
        type: 'address',
      },
    ],
    name: 'VoteUpdatedBySig',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'creator',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'pollId',
        type: 'string',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'id',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'value',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'communityAccount',
            type: 'string',
          },
          {
            internalType: 'uint8',
            name: 'ruleType',
            type: 'uint8',
          },
          {
            internalType: 'string',
            name: 'point',
            type: 'string',
          },
        ],
        internalType: 'struct DVoteV1.PointRule[]',
        name: 'pointRules',
        type: 'tuple[]',
      },
      {
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'addPointRules',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'creator',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'pollId',
        type: 'string',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'id',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'value',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'communityAccount',
            type: 'string',
          },
          {
            internalType: 'uint8',
            name: 'ruleType',
            type: 'uint8',
          },
          {
            internalType: 'string',
            name: 'point',
            type: 'string',
          },
        ],
        internalType: 'struct DVoteV1.PointRule[]',
        name: 'pointRules',
        type: 'tuple[]',
      },
      {
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'signature',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'userSig',
        type: 'bytes',
      },
    ],
    name: 'addPointRulesBySig',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'id',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'creator',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'pollId',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'title',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'body',
            type: 'string',
          },
        ],
        internalType: 'struct DVoteV1.Option',
        name: 'option',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'createOption',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'id',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'creator',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'pollId',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'title',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'body',
            type: 'string',
          },
        ],
        internalType: 'struct DVoteV1.Option',
        name: 'option',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'signature',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'userSig',
        type: 'bytes',
      },
    ],
    name: 'createOptionBySig',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'id',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'creator',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'title',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'body',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'startAt',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'endAt',
            type: 'uint256',
          },
          {
            internalType: 'uint64',
            name: 'maxOption',
            type: 'uint64',
          },
          {
            internalType: 'string',
            name: 'maxPoint',
            type: 'string',
          },
          {
            internalType: 'uint8',
            name: 'pointType',
            type: 'uint8',
          },
          {
            internalType: 'uint8',
            name: 'pointEvaluationType',
            type: 'uint8',
          },
          {
            internalType: 'uint8',
            name: 'pointDecimalPlace',
            type: 'uint8',
          },
          {
            internalType: 'bool',
            name: 'addOption',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'hideResult',
            type: 'bool',
          },
          {
            internalType: 'string',
            name: 'qualification',
            type: 'string',
          },
        ],
        internalType: 'struct DVoteV1.Poll',
        name: 'poll',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'createPoll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'id',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'creator',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'title',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'body',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'startAt',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'endAt',
            type: 'uint256',
          },
          {
            internalType: 'uint64',
            name: 'maxOption',
            type: 'uint64',
          },
          {
            internalType: 'string',
            name: 'maxPoint',
            type: 'string',
          },
          {
            internalType: 'uint8',
            name: 'pointType',
            type: 'uint8',
          },
          {
            internalType: 'uint8',
            name: 'pointEvaluationType',
            type: 'uint8',
          },
          {
            internalType: 'uint8',
            name: 'pointDecimalPlace',
            type: 'uint8',
          },
          {
            internalType: 'bool',
            name: 'addOption',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'hideResult',
            type: 'bool',
          },
          {
            internalType: 'string',
            name: 'qualification',
            type: 'string',
          },
        ],
        internalType: 'struct DVoteV1.Poll',
        name: 'poll',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'signature',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'userSig',
        type: 'bytes',
      },
    ],
    name: 'createPollBySig',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'id',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'optionId',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'voter',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'point',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'memo',
            type: 'string',
          },
        ],
        internalType: 'struct DVoteV1.Vote',
        name: 'vote',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'createVote',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'id',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'optionId',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'voter',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'point',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'memo',
            type: 'string',
          },
        ],
        internalType: 'struct DVoteV1.Vote',
        name: 'vote',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'signature',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'userSig',
        type: 'bytes',
      },
    ],
    name: 'createVoteBySig',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'creator',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'pollId',
        type: 'string',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'id',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'value',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'communityAccount',
            type: 'string',
          },
          {
            internalType: 'uint8',
            name: 'ruleType',
            type: 'uint8',
          },
          {
            internalType: 'string',
            name: 'point',
            type: 'string',
          },
        ],
        internalType: 'struct DVoteV1.PointRule[]',
        name: 'pointRules',
        type: 'tuple[]',
      },
      {
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'deletePointRules',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'voter',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'voteId',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'deleteVote',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'voter',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'voteId',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'signature',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'userSig',
        type: 'bytes',
      },
    ],
    name: 'deleteVoteBySig',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getSigner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'signer',
        type: 'address',
      },
    ],
    name: 'init',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'signer',
        type: 'address',
      },
    ],
    name: 'setSigner',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'id',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'creator',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'pollId',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'title',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'body',
            type: 'string',
          },
        ],
        internalType: 'struct DVoteV1.Option',
        name: 'option',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'updateOption',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'id',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'creator',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'pollId',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'title',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'body',
            type: 'string',
          },
        ],
        internalType: 'struct DVoteV1.Option',
        name: 'option',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'signature',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'userSig',
        type: 'bytes',
      },
    ],
    name: 'updateOptionBySig',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'id',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'creator',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'title',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'body',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'startAt',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'endAt',
            type: 'uint256',
          },
          {
            internalType: 'uint64',
            name: 'maxOption',
            type: 'uint64',
          },
          {
            internalType: 'string',
            name: 'maxPoint',
            type: 'string',
          },
          {
            internalType: 'uint8',
            name: 'pointType',
            type: 'uint8',
          },
          {
            internalType: 'uint8',
            name: 'pointEvaluationType',
            type: 'uint8',
          },
          {
            internalType: 'uint8',
            name: 'pointDecimalPlace',
            type: 'uint8',
          },
          {
            internalType: 'bool',
            name: 'addOption',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'hideResult',
            type: 'bool',
          },
          {
            internalType: 'string',
            name: 'qualification',
            type: 'string',
          },
        ],
        internalType: 'struct DVoteV1.Poll',
        name: 'poll',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'updatePoll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'id',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'creator',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'title',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'body',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'startAt',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'endAt',
            type: 'uint256',
          },
          {
            internalType: 'uint64',
            name: 'maxOption',
            type: 'uint64',
          },
          {
            internalType: 'string',
            name: 'maxPoint',
            type: 'string',
          },
          {
            internalType: 'uint8',
            name: 'pointType',
            type: 'uint8',
          },
          {
            internalType: 'uint8',
            name: 'pointEvaluationType',
            type: 'uint8',
          },
          {
            internalType: 'uint8',
            name: 'pointDecimalPlace',
            type: 'uint8',
          },
          {
            internalType: 'bool',
            name: 'addOption',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'hideResult',
            type: 'bool',
          },
          {
            internalType: 'string',
            name: 'qualification',
            type: 'string',
          },
        ],
        internalType: 'struct DVoteV1.Poll',
        name: 'poll',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'signature',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'userSig',
        type: 'bytes',
      },
    ],
    name: 'updatePollBySig',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'id',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'optionId',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'voter',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'point',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'memo',
            type: 'string',
          },
        ],
        internalType: 'struct DVoteV1.Vote',
        name: 'vote',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'updateVote',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'id',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'optionId',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'voter',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'point',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'memo',
            type: 'string',
          },
        ],
        internalType: 'struct DVoteV1.Vote',
        name: 'vote',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'signature',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'userSig',
        type: 'bytes',
      },
    ],
    name: 'updateVoteBySig',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

module.exports = { dvoteabi };
