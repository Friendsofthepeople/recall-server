import { RegisterDependency } from "@recall-server/core";
import { Service } from "typedi";

@Service()
@RegisterDependency()
export class ExampleRepository {
    public async find() {
        return [
            {
                id: 1,
                name: 'Example'
            },
            {
                id: 2,
                name: 'Example 2'
            }
        ]
    }
}
