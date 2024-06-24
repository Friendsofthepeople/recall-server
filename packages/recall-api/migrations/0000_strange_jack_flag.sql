CREATE TABLE IF NOT EXISTS "roles" (
	"id" varchar(256) PRIMARY KEY NOT NULL,
	"name" text,
	"description" text,
	"is_active" boolean DEFAULT false,
	"created_at" timestamp DEFAULT '2024-06-22 12:17:40.940',
	"updated_at" timestamp DEFAULT '2024-06-22 12:17:40.940'
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_roles" (
	"user_id" varchar,
	"role_id" varchar
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" varchar(256) PRIMARY KEY NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"full_name" text NOT NULL,
	"phone_number" varchar NOT NULL,
	"email" varchar,
	"email_verified" boolean DEFAULT false,
	"is_active" boolean DEFAULT false,
	"password" varchar NOT NULL,
	"created_at" timestamp DEFAULT '2024-06-22 12:17:40.939',
	"updated_at" timestamp DEFAULT '2024-06-22 12:17:40.939',
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_role_id_roles_id_fk" FOREIGN KEY ("role_id") REFERENCES "public"."roles"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
