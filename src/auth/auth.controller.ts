import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

//
@ApiTags('auth')
//
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  //
  @ApiOperation({ summary: 'Inicio de sesión de usuario' })
  // solo el elemento async es nuevo
  async signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.singIn(signInDto.username, signInDto.password);
  }
  @UseGuards(AuthGuard)
  //
  @ApiBearerAuth() // Especifica que este endpoint requiere autenticación JWT
  //
  @Get('Profile')
  //
  @ApiOperation({ summary: 'Obtener perfil de usuario autenticado' })
  //
  getProfile(@Request() req) {
    return req.user;
  }
}
