import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { Request, Response, NextFunction } from 'express';
import { snakeCase } from 'lodash';

export function validateBody(type: any) {
  return (req: Request, res: Response, next: NextFunction) => {
    const input = plainToInstance(type, req.body);

    validate(input).then((errors) => {
      if (errors.length > 0) {
        const messages = errors.map((error) => {
          const constraints = Object.entries(error.constraints || {}).map(
            ([_, constraintValue]) => {
              const snakeCaseProperty = snakeCase(error.property);
              return `${snakeCaseProperty}: ${constraintValue.replace(error.property, snakeCase(error.property))}`;
            }
          );
          return constraints.join("\n");
        });
        return res.status(400).json({ message: messages });
      } else {
        next();
      }
    });
  };
}