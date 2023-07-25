import { ApiProperty } from "@nestjs/swagger";

export class CreateContactoDto {

    @ApiProperty({
        description: 'el id del contacto',
        type: Number
      })
    idContacto:number;

    @ApiProperty({
        description: 'nombre del contacto',
        type: String
      })
    nombre:string;

    @ApiProperty({
        description: 'telefono del contacto',
        type: Number
      })
    telefono:number;

    @ApiProperty({
        description: 'email del contacto',
        type: String
      })
    email:string;
}

