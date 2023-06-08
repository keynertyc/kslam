import { Slam, SlamDetails, User } from '@prisma/client'

export {}

declare global {
  interface IFriendsSlamsWithRelation extends User {
    participatedSlams: (Slam & { 
      owner: User 
    })[]
  }

  interface IMySlamsWithRelation extends User {
    ownedSlams: (Slam & { 
      user: User 
    })[]
  }

  interface ISlamAnswers {
    [key: number]: string
  }

  interface ISlamDetailsWithRelations extends SlamDetails {
    slam: Slam & {
      user: User
    }
  }
}