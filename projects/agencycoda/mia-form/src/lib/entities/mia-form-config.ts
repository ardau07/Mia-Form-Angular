import { MiaBaseCrudHttpService } from "@agencycoda/mia-core";
import { MiaField } from "./mia-field";

export class MiaFormConfig {
    fields: Array<MiaField> = [];
    service!: MiaBaseCrudHttpService<any>;
    errorMessages?: Array<{key: string, message: string}> = [];
    hasSubmit = true;
}
