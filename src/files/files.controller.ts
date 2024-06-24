import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ApiBody, ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';
import { extname } from 'path';
import { FileUploadDto } from './dto/file-upload.dto';

@ApiTags('files')
@Controller('files')
export class FilesController {
  @Post('upload')
  @ApiOperation({ summary: 'Subir una imagen' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Archivo de imagen a subir',
    type: FileUploadDto,
  })
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return {
      filename: file.filename,
      path: file.path,
      mimetype: file.mimetype,
      size: file.size,
    };
  }
}
