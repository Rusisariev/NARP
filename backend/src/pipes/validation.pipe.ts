import {ArgumentMetadata, HttpException, Injectable, PipeTransform} from "@nestjs/common";
import {plainToClass} from "class-transformer";
import {validate} from "class-validator";
import {ValidationException} from "../exceptions/validation.exception";

@Injectable()
export class ValidationPipe implements PipeTransform<any>{
    async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
        const obj = plainToClass(metadata.metatype, value)
        const errors = await validate(obj)

        if (errors.length) {
            let message = errors.reduce((acc, el) => {
                acc[el.property] = Object.values(el.constraints).join(", ");
                return acc;
            }, {})
            throw new ValidationException(message)
        }
        return value
    }
}