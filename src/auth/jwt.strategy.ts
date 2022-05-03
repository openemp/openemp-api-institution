import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtConstants } from "src/common/constants";
import { AuthService } from "./auth.service";

export class JwtStrategy extends PassportStrategy(Strategy) {


    constructor(private authService: AuthService,
        private config: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            jsonWebTokenOptions: {
                ignoreNotBefore: true,
            },
            secretOrKey: jwtConstants.secret,
        });
    }

    async validate(payload: any) {
        return { userId: payload.sub, username: payload.username }
    }

}