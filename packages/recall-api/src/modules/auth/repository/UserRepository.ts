import { Service } from "typedi";
import { users } from '../models/user.models';
import Repository from '@recall-server/data/database/repository';
import { eq } from "drizzle-orm";
import { RegisterDependency } from "@recall-server/core/di";

@Service()
@RegisterDependency()
export default class UserRepository extends Repository<typeof users>{
    constructor() {
        super(users);
    }

    public findUserById = async (id: string) => {
        // const finsdUser = this.db.query.$drizzleTypeError.
        const user = await this.db.select().from(users).where(eq(users.id, id)).limit(1).execute();
        return user[0];
    };

}
