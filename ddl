-- Users tablosu
CREATE TABLE "Users" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL UNIQUE,
    CONSTRAINT "name_check" CHECK (LENGTH("name") >= 3 AND LENGTH("name") <= 50)
);

-- Books tablosu
CREATE TABLE "Books" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL UNIQUE,
    "average_score" DECIMAL(5,2) DEFAULT -1 CHECK ("average_score" >= -1)
);

-- Borrowed tablosu
CREATE TABLE "Borrowed" (
    "id" SERIAL PRIMARY KEY,
    "borrowed_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "returned_at" TIMESTAMP,
    "user_score" INTEGER,
    "user_id" INTEGER NOT NULL,
    "book_id" INTEGER NOT NULL,
    CONSTRAINT "fk_user" FOREIGN KEY ("user_id") REFERENCES "Users" ("id"),
    CONSTRAINT "fk_book" FOREIGN KEY ("book_id") REFERENCES "Books" ("id")
);