type changeType = 'major' | 'minor' | 'patch' | 'dependency'

export interface Change {
  comment: string
  author: string
  commit: string
  type: changeType
}

export interface Release {
  packageName: string
  version: string
  tag: string
  date: string
  changes: Change[]
}
