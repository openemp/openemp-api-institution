import { ExecutionContext, Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthGuard, IAuthGuard } from "@nestjs/passport";

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') implements IAuthGuard {
   constructor(private reflector: Reflector) {
      super();
   }

   async canActivate(context: ExecutionContext) {
      const isValid = await super.canActivate(context);
      return true;
   }

   handleRequest(err: any, user: any, info: { message: any; }) {
      if (err || !user) {
         Logger.error(`Unauthorized: ${info && info.message}`);
         throw err || new UnauthorizedException();
      }
      return user;
   }
}