import Ajv from "ajv/dist/2020";
import * as fs from "fs/promises"

const ajv = new Ajv();

export class ScheinService{
  public static async validateScheinValidationRules(validationRule: Object): Promise<string> {
    const schemaFile = await fs.readFile("./src/validations/schema/schein_validation_rules.json", "utf-8")
    const schema = JSON.parse(schemaFile)
    const schemaValidation = ajv.compile(schema)

    const valid = schemaValidation(validationRule)
    
    if(valid) return

    return schemaValidation.errors.map(er => `${er.instancePath} ${er.message}`).join(",")
  }
}