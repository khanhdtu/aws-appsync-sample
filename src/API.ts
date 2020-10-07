/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
  online?: OnlineStatus | null,
};

export enum OnlineStatus {
  ONLINE = "ONLINE",
  OFFLINE = "OFFLINE",
}


export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  online?: ModelOnlineStatusInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelOnlineStatusInput = {
  eq?: OnlineStatus | null,
  ne?: OnlineStatus | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  online?: OnlineStatus | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateMessageInput = {
  id?: string | null,
  message: string,
  message_userId: string,
};

export type ModelMessageConditionInput = {
  message?: ModelStringInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type UpdateMessageInput = {
  id: string,
  message?: string | null,
  message_userId?: string | null,
};

export type DeleteMessageInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  online?: ModelOnlineStatusInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  message?: ModelStringInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    name: string,
    online: OnlineStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    name: string,
    online: OnlineStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    name: string,
    online: OnlineStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage:  {
    __typename: "Message",
    id: string,
    _user:  {
      __typename: "User",
      id: string,
      name: string,
      online: OnlineStatus | null,
      createdAt: string,
      updatedAt: string,
    },
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage:  {
    __typename: "Message",
    id: string,
    _user:  {
      __typename: "User",
      id: string,
      name: string,
      online: OnlineStatus | null,
      createdAt: string,
      updatedAt: string,
    },
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage:  {
    __typename: "Message",
    id: string,
    _user:  {
      __typename: "User",
      id: string,
      name: string,
      online: OnlineStatus | null,
      createdAt: string,
      updatedAt: string,
    },
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    name: string,
    online: OnlineStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      online: OnlineStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage:  {
    __typename: "Message",
    id: string,
    _user:  {
      __typename: "User",
      id: string,
      name: string,
      online: OnlineStatus | null,
      createdAt: string,
      updatedAt: string,
    },
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      message: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetUserByNameQueryVariables = {
  name?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetUserByNameQuery = {
  getUserByName:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      online: OnlineStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    name: string,
    online: OnlineStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    name: string,
    online: OnlineStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    name: string,
    online: OnlineStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage:  {
    __typename: "Message",
    id: string,
    _user:  {
      __typename: "User",
      id: string,
      name: string,
      online: OnlineStatus | null,
      createdAt: string,
      updatedAt: string,
    },
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage:  {
    __typename: "Message",
    id: string,
    _user:  {
      __typename: "User",
      id: string,
      name: string,
      online: OnlineStatus | null,
      createdAt: string,
      updatedAt: string,
    },
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage:  {
    __typename: "Message",
    id: string,
    _user:  {
      __typename: "User",
      id: string,
      name: string,
      online: OnlineStatus | null,
      createdAt: string,
      updatedAt: string,
    },
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
