<!-- old prisma schema -->

generator client {
provider = "prisma-client-js"
}

datasource db {
provider = "postgresql"
url = env("DATABASE_URL")
}

model User {
id String @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
name String @db.VarChar(70)
username String @unique @db.VarChar(100)
email String @unique @db.VarChar(100)
password String?
created_at DateTime @default(now())
updated_at DateTime @updatedAt
post Post[]
comments Comment[]
notifications Notification[]
upvotes Upvote[]
profile Profile?
bookmark Bookmark?
social_links SocialLinks?
skills Skills[]
}

model Profile {
id String @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
bio String?
website String?
user User @relation(fields: [user_id], references: [id], onDelete: Cascade)
user_id String @unique @db.Uuid
profile_path String?
gender String?
age String?
social_links SocialLinks? @relation(fields: [social_links_id], references: [id], onDelete: Cascade, onUpdate: NoAction)
social_links_id String? @db.Uuid
skills Skills[]
city String?
country String?
followers Followers[] @relation("ProfileFollowers")
followings Followers[] @relation("ProfileFollowings")
}

model Followers {
id String @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
follower Profile @relation("ProfileFollowers", fields: [follower_id], references: [id], onDelete: Cascade)
follower_id String @db.Uuid
followed Profile @relation("ProfileFollowings", fields: [followed_id], references: [id], onDelete: Cascade)
followed_id String @db.Uuid
created_at DateTime @default(now())
}

model Post {
id String @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
user User @relation(fields: [user_id], references: [id], onDelete: Cascade)
user_id String @db.Uuid
content String
bookmarked Bookmark[]
image String?
created_at DateTime @default(now())
comments Comment[]
upvotes Upvote[]
}

model Bookmark {
id String @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
user User @relation(fields: [user_id], references: [id], onDelete: Cascade)
user_id String @unique @db.Uuid
post Post @relation(fields: [post_id], references: [id], onDelete: Cascade)
post_id String @db.Uuid
created_at DateTime @default(now())
userId Int
}

model Comment {
id String @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
user User @relation(fields: [user_id], references: [id], onDelete: Cascade)
user_id String @unique @db.Uuid
post Post @relation(fields: [post_id], references: [id], onDelete: Cascade)
post_id String @db.Uuid
content String
created_at DateTime @default(now())
upvote Upvote[]
}

model Notification {
id String @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
user User @relation(fields: [user_id], references: [id], onDelete: Cascade)
user_id String @unique @db.Uuid
toUser_id Int
content String
created_at DateTime @default(now())
}

model Upvote {
id String @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
entity_type UPVOTE_ENTITY
post Post? @relation(fields: [post_id], references: [id], onDelete: Cascade, onUpdate: NoAction)
post_id String @db.Uuid

    // comment    Comment? @relation(fields: [comment_id], references: [id], onDelete: Cascade)
    // comment_id String?  @db.Uuid

    comment_reply    Comment? @relation(fields: [comment_reply_id], references: [id], onDelete: Cascade)
    comment_reply_id String?  @db.Uuid

    user    User?  @relation(fields: [user_id], references: [id], onDelete: Cascade, onUpdate: NoAction)
    user_id String @db.Uuid

}

enum UPVOTE_ENTITY {
POST
COMMENT
COMMENT_REPLY
}
