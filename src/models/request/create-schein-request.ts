import { Expose } from "class-transformer";
import { IsObject, IsString } from "class-validator";

export class CreateScheinRequest{
  
  @IsString()
  type: string

  @IsString()
  template: string

  @IsObject()
  @Expose({name: "validation_rules"})
  validationRules: Record<string, any>
}