import { Expose } from "class-transformer";
import { IsArray, IsObject, IsString } from "class-validator";

export class CreateScheinRequest{
  
  @IsString()
  type: string

  @IsString()
  template: string

  @IsArray()
  @Expose({name: "validation_rules"})
  validationRules: Record<string, any>
}