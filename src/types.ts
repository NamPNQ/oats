export interface Type {
  impl: string
  readOnly: boolean
  required: boolean
}

export type Operation = "get" | "post" | "put" | "patch" | "delete"

export const OPERATIONS: Operation[] = ["get", "post", "put", "patch", "delete"]

// A PathOperation is created for each path and method combination in the
// OpenAPI doc. It represents all the information needed to print out an
// implementation of a function that makes an HTTP request to that endpoint.
export type PathOperation = {
  // e.g. "/scrapers/{id}/members"
  path: string

  operation: Operation

  // Corresponds to OpenAPI Operation Object summary field.
  //
  // e.g. "List all users with member privileges for a scraper target"
  summary: string

  positionalParams: Array<{
    name: string
    description: string
    required: boolean
    type: "string" | "number" | "any"
  }>

  headerParams: Array<{
    name: string
    description: string
    required: boolean
    type: "string" | "number" | "any"
  }>

  queryParams: Array<{
    name: string
    description: string
    required: boolean
    type: "string" | "number" | "any"
  }>

  bodyParam: null | {
    description: string
    required: boolean
    type: string
  }

  responses: Array<{
    code: string
    description: string
    mediaTypes: Array<{
      mediaType: string
      type: string
    }>
  }>
}
